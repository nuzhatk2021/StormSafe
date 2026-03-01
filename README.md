🌨️ StormSafe

A real-time, location-based emergency coordination platform designed to protect vulnerable community (stray and feral) animals during extreme weather events.

🌎 Problem

During snowstorms, flooding, heatwaves, and hurricanes, stray animals face immediate survival risks. Community members often encounter animals exposed to dangerous conditions but lack:

A centralized reporting system

Visibility into whether someone is already helping

Clear urgency classification

Structured coordination

Real-time case tracking

Current coordination relies on fragmented platforms like social media posts, informal group chats, and rescue hotlines. These methods lack structure, transparency, and live updates.

StormSafe solves this by providing a centralized, real-time, map-based coordination system built specifically for weather-driven emergencies.

🎯 Mission

To reduce animal suffering during extreme weather events through structured, real-time community coordination.

🚀 Live Features (MVP)
📍 Location-Based Reporting

- GPS-enabled reporting
- Manual map pin placement
- Photo upload
- Description field
- Timestamped submission

🗺 Interactive Live Map

- Real-time Firestore updates
- Color-coded urgency pins
- Clickable case details
- Sliding detail drawer UI
- Filter by urgency or status

🚨 Urgency Classification

Structured tagging ensures prioritization:
🔴 Injured (Critical)
🟠 Shelter Needed
🟡 Monitoring / Food Provided
🟢 Resolved

✅ Case Lifecycle Tracking

Each report follows:
OPEN → IN PROGRESS → HANDLED → ARCHIVED

- Volunteers can claim cases
- Status updates are visible in real-time
- Duplicate rescue efforts are reduced

🔐 Authentication

- Firebase Authentication
- Secure reporting
- Only claimant can update status

🕒 Real-Time Sync

Powered by Firebase Firestore listeners:
- Instant updates across users
- No page refresh required
- Live coordination visibility

🛠 Tech Stack
Frontend

⚛️ React (Vite)
🎨 TailwindCSS
🗺 React-Leaflet
✨ Framer Motion (animations)
🧩 React Icons

Backend (Serverless)

🔥 Firebase Firestore (Database)
🔥 Firebase Storage (Image uploads)
🔥 Firebase Authentication
🔥 Firebase Hosting (optional)

Maps
🗺 Leaflet + OpenStreetMap (100% free)

This architecture keeps operational cost at $0 within Firebase’s free tier.

🏗 Architecture
User
 ↓
React Frontend (Vite)
 ↓
Firebase Services
   ├── Firestore (Reports)
   ├── Storage (Images)
   ├── Auth (Users)
   └── Hosting

Serverless, scalable, and minimal infrastructure overhead.

📦 Firestore Data Model

Collection: reports

{
  "animalType": "Cat",
  "urgency": "Injured",
  "status": "Open",
  "location": {
    "lat": 40.744,
    "lng": -74.032
  },
  "description": "Cat under parked car during snowstorm",
  "imageUrl": "firebase-storage-url",
  "reportedBy": "userId",
  "claimedBy": null,
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}

🎨 UI Design Philosophy

StormSafe uses a modern, storm-inspired interface:

Dark navy background
Glassmorphism navbar
2xl rounded cards
Smooth micro-interactions
Animated modals and side drawers
Clear visual urgency hierarchy
Built to feel like a production emergency response tool.

📱 Planned Enhancements

🌩 Weather alert integration via National Weather Service API

🔔 Push notifications
🧑‍🤝‍🧑 Verified volunteer badges
📊 Admin dashboard & heatmaps
📍 Geofencing alerts
📲 Progressive Web App (PWA) support
☁️ AWS cloud-native migration

☁️ Future AWS Architecture (Scalable Version)
Future migration path:
- AWS Lambda
- API Gateway
- DynamoDB
- S3
- Cognito
- AWS Amplify Hosting

This allows StormSafe to scale into a production-grade emergency coordination platform.