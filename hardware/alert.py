
import RPi.GPIO as GPIO
import time
import os
from dotenv import load_dotenv
import re
import json
import requests
import math

# ✅ Unique Raspberry Pi Identifier
RASPBERRY_UID = "RPI-001"  # Replace with actual UID if needed

load_dotenv()

# ✅ API Keys (Replace with actual keys)
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
BACKEND_API_URL = os.getenv("BACKEND_URL")


BUTTON_PIN = 17  # GPIO pin connected to the button
STATUS_FILE = "status.txt"  # File to get status from speech.py

GPIO.setmode(GPIO.BCM)
GPIO.setup(BUTTON_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP)  # Pull-up resistor enabled

def read_status():
    """Read the emergency status from the shared file."""
    try:
        with open(STATUS_FILE, "r") as file:
            return int(file.read().strip())  # Read '1' or '0'
    except:
        return 0  # Default to no emergency if file is missing

def reset_status():
    """Reset the emergency status back to 0."""
    with open(STATUS_FILE, "w") as file:
        file.write("0")

def get_raspberry_uid():
    try:
        with open("/proc/cpuinfo", "r") as f:
            for line in f:
                if line.startswith("Serial"):
                    return line.split(":")[1].strip()
    except Exception as e:
        return "Unknown"


def get_wifi_networks():
    wifi_data = []
    scan_result = os.popen("sudo iwlist wlan0 scan").read()
    mac_addresses = re.findall(r"Address: ([\dA-Fa-f:]+)", scan_result)
    signal_levels = re.findall(r"Signal level=(-?\d+)", scan_result)
    if not mac_addresses or not signal_levels:
        return []
    for i in range(min(len(mac_addresses), len(signal_levels))):
        wifi_data.append({
            "macAddress": mac_addresses[i],
            "signalStrength": int(signal_levels[i])
        })
    return wifi_data

def get_location_from_google(wifi_networks):
    url = f"https://www.googleapis.com/geolocation/v1/geolocate?key={GOOGLE_API_KEY}"
    payload = json.dumps({"wifiAccessPoints": wifi_networks})
    headers = {"Content-Type": "application/json"}
    response = requests.post(url, data=payload, headers=headers)
    if response.status_code == 200:
        return response.json()
    return None

def get_altitude(lat, lng):
    url = f"https://maps.googleapis.com/maps/api/elevation/json?locations={lat},{lng}&key={GOOGLE_API_KEY}"
    response = requests.get(url)
    if response.status_code == 200:
        elevation_data = response.json()
        if elevation_data["status"] == "OK":
            return elevation_data["results"][0]["elevation"]
    return None

def get_floor_number(altitude):
    ground_level = 411  # Assume ground level is at 25m
    floor_height = 3    # Assume each floor is ~3m high
    floor_number = (altitude - ground_level) / floor_height
    return max(0, (math.floor(floor_number)))  # Ensure it doesn’t go below 0
def send_sos_alert():
    print("🚨 SOS")
    wifi_networks = get_wifi_networks()
    location_data = get_location_from_google(wifi_networks)
    if location_data:
        lat, lng = location_data["location"]["lat"], location_data["location"]["lng"]
        altitude = get_altitude(lat, lng)
        floor_number = get_floor_number(altitude) if altitude is not None else None
        alert_data = {
            "latitude": lat,
            "longitude": lng,
            "altitude": altitude,
            "floor_number": floor_number,
            "raspberryUID": get_raspberry_uid()
        }
        print(json.dumps(alert_data, indent=2))
        try:
            response = requests.post(BACKEND_API_URL, json=alert_data)
            print(response)
            if response.status_code == 200:
                print("✅ SOS alert sent successfully!")
            else:
                print("❌ Failed to send SOS alert.")
        except Exception as e:
            print(f"Error sending alert: {e}")
    else:
        print("❌ Failed to determine location.")

print("Press the button or trigger an SOS from speech.py...")


try:
    while True:
        button_pressed = GPIO.input(BUTTON_PIN) == GPIO.LOW
        speech_detected = read_status() == 1

        if button_pressed or speech_detected:
            send_sos_alert()
            reset_status()
            time.sleep(1)  # Prevent spam

        time.sleep(0.1)  # Reduce CPU usage
except KeyboardInterrupt:
    GPIO.cleanup()  # Cleanup GPIO on exit



