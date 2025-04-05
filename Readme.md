# 🚨 Alertra – Advanced Campus Safety System for Women 🚨

## 📌 Project Overview
**Alertra** is an AI-powered, smart emergency response system specifically designed for enhancing women’s safety on campuses. It combines **discreet wearable hardware and cutting-edge software** to provide instant distress alerts, location tracking, and real-time evidence capture. The alert is triggered via a simple **press of a switch on an ID card**, ensuring immediate communication of danger without drawing attention.

Built with privacy, accessibility, and urgency in mind, Alertra leverages **speech recognition, emotion detection, and secure data handling** to create a holistic and responsive safety infrastructure. 

## 🛠 Tech Stack
### 🚀 Software:
- 🌐 *Frontend*:
  - *React.js* - For building an interactive and dynamic UI.
  - *Tailwind CSS* - For responsive and modern styling.
  - *Framer Motion* - For smooth animations and transitions.
- 💾 *Backend*:
  - *Node.js* - For server-side logic and API development.
  - *Express.js* - For handling RESTful API requests efficiently.
  - *JWT + Bcrypt* – For secure authentication and data protection
- 🛢 *Database*:
  - *MongoDB* - A NoSQL database for storing user data and alerts.
  - *Mongoose* - An ODM library for easy MongoDB interaction.
### 🔊 AI/ML Modules:
  -*Speech Recognition* - For capturing and transcribing verbal distress
  -*Emotion Detection* - Analyzing vocal tone for detecting emotional stress
  -*Gemini AI* - To analyse pitch, volume and text to determine the emotion

### 🖥 Hardware:
- 🍓 *Raspberry Pi* (Core processing unit)
- 📷 *Camera Module* (Captures proof of evidence)
- 🎙 *Microphone* (Records distress audio)
- 🎛 *Switch Button* (Emergency activation trigger)

## 🎯 Features
-✅ *One-Click Emergency Alert* – Press the card button to instantly send alerts
-✅ *Live Location Sharing* – Tracks user’s current GPS position in real-time
-✅ *Audio-Visual Evidence Collection* – Captures environment context at time of alert
-✅ *Emotion-Aware System* – Emotion detection aids in prioritizing high-risk alerts
-✅ *Offline Fallback Mode* – Stores data locally if internet drops and syncs later
-✅ *Secure & Reliable* - Data encryption for safety 🔒

## 🏗 Project Structure
```bash
Alertra-HackByte/
│
├── frontend/          # React.js + Tailwind CSS + Framer Motion UI
│   └── components/    # UI Components (Map, AlertCard, Navbar, etc.)
│
├── backend/           # Node.js + Express.js APIs
│   └── routes/        # API endpoints for users, alerts, auth
│   └── socket/        # WebSocket handlers for real-time updates
│
├── database/          # MongoDB models (User, Alert, Media)
│
├── hardware/          # Raspberry Pi scripts and interface
│   └── alert.py       # Physical button integration
│   └── voicerec.py      # Audio recording
│      
│
└── docs/              # User manual, architecture diagram, setup guide

```

## 🔧 Installation & Setup
```bash
# Clone the repository
$ git clone https://github.com/ArnabhS/Alertra-HackByte.git
$ cd Alertra-HackByte
```
# Frontend Setup
```bash
$ cd frontend
$ npm install
$ npm run dev
# Runs on http://localhost:5173
```

# Backend Setup
```bash
$ cd backend
$ npm install
$ npm run dev
# Runs on http://localhost:5000
```
# Raspberry Pi (Hardware) Setup
- Ensure Raspberry Pi is configured with camera and mic modules
- Navigate to the hardware/ folder and run:
```bash
python3 alert.py
```
## 📸 Project Preview
![Alertra Preview](https://raw.githubusercontent.com/ArnabhS/Alertra-HackByte/main/frontend/public/model.jpeg)