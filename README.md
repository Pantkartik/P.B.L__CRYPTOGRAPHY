# P.B.L-__CRYPTOGRAPHY
Encrypted Chat Application
A professional project README for a secure, end-to-end encrypted chat application, intended for browser or mobile use.

Project Overview
Project Name: Encrypted Chat Application
Purpose: To provide users with a secure and private messaging solution utilizing state-of-the-art end-to-end encryption, similar to WhatsApp or Signal, for daily secure communications.


Team Leader: Kartik Pant

Team Members: Nivedita Dani, Diva Tripathi, Abhay Goswami

Table of Contents
Introduction

Features

Technology Stack

Installation

Usage

Encryption Details

Folder Structure

Contributing

License

Contact

Introduction
This project aims to deliver a simple, user-friendly chat application with end-to-end encryption (E2EE) for every message. The security model ensures only the communicating users can read the messages—even the server cannot decrypt or view the content.

Features
Real-Time Chat: Send and receive messages instantly.

End-to-End Encryption: Messages are only readable by sender and receiver.

Secure Key Exchange: Utilizes RSA key exchange, with messages encrypted/decrypted using AES session keys.

User Registration & Login: Basic authentication for access control.

Cross-Platform: Browser-based UI (optionally extendible to mobile).

Minimal Data Retention: No messages are stored in plaintext on the server.

Technology Stack
Frontend: React.js (or plain JavaScript and HTML/CSS)

Backend: Node.js with Express.js

Database: MongoDB or SQLite (for user data, not messages)

Encryption: RSA for key exchange, AES-256 for message encryption (using libraries such as crypto or crypto-js)

Communication: WebSockets (Socket.IO)

Installation
Prerequisites:

Node.js (v16+ recommended)

npm/yarn

MongoDB (optional, if persistence is desired)

Setup Instructions:

Clone the repository:

bash
git clone https://github.com/yourusername/encrypted-chat-app.git
Install backend dependencies:

bash
cd encrypted-chat-app/backend
npm install
Start the backend server:

bash
npm start
Install frontend dependencies:

bash
cd ../frontend
npm install
Start the frontend server:

bash
npm start
Update environment variables as needed in .env files (for configs such as backend server URL, DB connection string, etc.).

Usage
Open the application in your browser.

Register a new account or log in with existing credentials.

Start a new chat by selecting another user.

Messages are encrypted on your device before being sent.

Receive encrypted messages which are decrypted locally.

Encryption Details
Key Generation: On registration, each user generates a public/private RSA key pair. The private key is securely stored and never leaves the client device.

Key Exchange: Users exchange public keys to establish secure sessions.

Session Keys: For each chat, a random AES session key is generated and securely transmitted (RSA-encrypted).

Message Encryption: Messages are encrypted with AES-256 using the session key before transmission.

Decryption: Only the intended recipient can decrypt the session key and subsequently the message.

Folder Structure
text
encrypted-chat-app/
├── backend/
│   ├── server.js
│   ├── routes/
│   └── models/
├── frontend/
│   ├── src/
│   ├── App.js
│   └── components/
└── README.md
Contributing
Fork the repository.

Create a branch for your feature/fix: git checkout -b feature-name.

Commit your changes with descriptive messages.

Submit a pull request to the main repository.

License
This project is licensed under the MIT License. See LICENSE for more details.

Contact
For questions, contributions, or feedback, please contact:

Kartik Pant (Team Leader) — [Contact via email/github/LinkedIn/other]

Nivedita Dani

Diva Tripathi

Abhay Goswami

Disclaimer: This project is a demo of encrypted communication for learning and demonstration purposes. Do not use as-is for high-security needs without external audit and review.

End of README
