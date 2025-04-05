import os
from dotenv import load_dotenv
import speech_recognition as sr
import librosa
import numpy as np
import sounddevice as sd
import tempfile
import wave
import google.generativeai as genai
import time



load_dotenv() 
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# ✅ Configure Gemini API
genai.configure(api_key=GEMINI_API_KEY)

STATUS_FILE = "status.txt"
VOLUME_THRESHOLD = -35  # Minimum volume level in dB to ignore silent noise
SOS_KEYWORD = "help"  # ✅ SOS triggered if "help" is detected

# 🎤 Function to analyze pitch and volume from an audio file
def detect_pitch_and_volume(audio_file):
    y, sr = librosa.load(audio_file, sr=None)
    volume = librosa.amplitude_to_db(np.abs(y)).mean()
    pitches, _ = librosa.piptrack(y=y, sr=sr)
    avg_pitch = np.mean(pitches[pitches > 0]) if np.any(pitches > 0) else 0
    return avg_pitch, volume

# 🎤 Function to capture audio from USB microphone (ONLY if pitch > 360 Hz)
def record_audio(duration=3, sample_rate=44100):
    print("🎤 Listening for sound...")
    recording = sd.rec(int(duration * sample_rate), samplerate=sample_rate, channels=1, dtype="int16")
    sd.wait()

    temp_file = tempfile.NamedTemporaryFile(delete=False, suffix=".wav")
    with wave.open(temp_file.name, "wb") as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(sample_rate)
        wf.writeframes(recording.tobytes())

    pitch_value, volume = detect_pitch_and_volume(temp_file.name)

    if pitch_value < 360 or volume < VOLUME_THRESHOLD:
        print(f"⏳ Ignored: Low pitch ({pitch_value:.2f} Hz) or quiet sound ({volume:.2f} dB)")
        os.remove(temp_file.name)
        return None

    print(f"🎧 Processing Audio: Avg Pitch = {pitch_value:.2f} Hz, Volume = {volume:.2f} dB")
    return temp_file.name

# 🎤 Function to detect speech keywords and extract text
def detect_keyword(audio_file):
    recognizer = sr.Recognizer()
    with sr.AudioFile(audio_file) as source:
        audio = recognizer.record(source)
        try:
            text = recognizer.recognize_google(audio).lower().strip()
            print(f"🔍 Detected speech: {text}")
            return text
        except sr.UnknownValueError:
            print("⚠️ Ignored: No speech detected")
            return None
        except sr.RequestError:
            print("❌ Speech recognition service unavailable")
            return None

# 🤖 Analyze Emotion using Google Gemini
def analyze_emotion(text):
    if not text:
        return "neutral"  # Default to neutral if no text

    model = genai.GenerativeModel("gemini-2.0-flash")  # Load Gemini model

    prompt = f"Analyze the following speech text and determine the emotion: '{text}'. Reply with a single word (happy, sad, angry, fear, panic, neutral)."

    response = model.generate_content(prompt)

    if response.text:
        emotion = response.text.strip().lower()
        print(f"🧠 Detected Emotion: {emotion}")
        return emotion

    return "neutral"  # Default if no valid response


# 🚨 Function to update status file
def update_status(value):
    with open(STATUS_FILE, "w") as file:
        file.write(str(value))

# 🚨 Main function to run both speech and scream detection
def main():
    while True:
        audio_file = record_audio()
        if not audio_file:
            time.sleep(1)
            continue

        detected_text = detect_keyword(audio_file)
        if not detected_text:
            time.sleep(1)
            continue

        emotion = analyze_emotion(detected_text)

        # ✅ Trigger SOS if "help" is spoken OR if distress is detected
        if SOS_KEYWORD in detected_text or emotion in ["angry", "panicked", "fear", "sad"]:
            print("🚨 SOS alert triggered!")
            update_status(1)

            while True:
                time.sleep(0.5)
                with open(STATUS_FILE, "r") as file:
                    status = file.read().strip()
                if status == "0":
                    print("✅ SOS Acknowledged! Restarting detection...")
                    break

        time.sleep(1)

# Run the script
if __name__ == "__main__":
    main()
