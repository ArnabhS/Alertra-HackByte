import os
from dotenv import load_dotenv
import json
import requests
import re
import math
import RPi.GPIO as GPIO
import time

load_dotenv()  
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
BUTTON_PIN = 17

GPIO.setmode(GPIO.BCM)
GPIO.setup(BUTTON_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP)  # Pull-up resistor enabled

def get_raspberry_uid():
    try:
        with open("/proc/cpuinfo", "r") as f:
            for line in f:
                if line.startswith("Serial"):
                    return line.split(":")[1].strip()
    except:
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
    ground_level = 511  # Customize as needed
    floor_height = 3
    floor_number = (altitude - ground_level) / floor_height
    return max(0, math.floor(floor_number))


def send_sos():
    print("🚨 SOS!")

    wifi_networks = get_wifi_networks()
    if not wifi_networks:
        print("❌ No WiFi networks found for location.")
        return

    location_data = get_location_from_google(wifi_networks)
    if not location_data:
        print("❌ Failed to get location.")
        return

    lat = location_data["location"]["lat"]
    lng = location_data["location"]["lng"]
    altitude = get_altitude(lat, lng)
    floor_number = get_floor_number(altitude) if altitude else None
    raspberryUID = get_raspberry_uid()

    result = {
        "latitude": lat,
        "longitude": lng,
        "altitude": altitude,
        "floor_number": floor_number,
        "raspberryUID": raspberryUID
    }

    print(json.dumps(result, indent=2))

# ✅ Run main loop
print("📍 Waiting for button press...")

try:
    while True:
        if GPIO.input(BUTTON_PIN) == GPIO.LOW:
            send_sos()
            time.sleep(1)  # Debounce delay
        time.sleep(0.1)
except KeyboardInterrupt:
    print("👋 Exiting...")
finally:
    GPIO.cleanup()

