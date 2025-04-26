# 🛡️ AI Safety Incident Dashboard

SparkleHood Project

A simple, responsive web application to view, filter, sort, and report AI safety incidents, built with clean UI and smart interactions using HTML, CSS, and TypeScript.

🔗 Live Demo
👉  https://ai-safetydashboard.netlify.app/ 

📋 Project Overview
The AI Safety Incident Dashboard is designed to help track and manage AI safety incidents effectively.
It provides features like dynamic filtering, sorting, state management, and user input handling — ensuring easy monitoring of potential AI-related issues.

Additionally, it introduces an optional AI-based severity suggestion (bonus feature) based on the incident description.

✨ Features
📄 Display incidents: View a list of AI safety incidents (showing Title, Severity, and Reported Date).

🔎 Filter by severity: Quickly filter incidents by severity levels (All, Low, Medium, High).

📅 Sort by date: Sort incidents by Reported Date (Newest First, Oldest First).

👁️ Expand details: View full incident description by toggling detail visibility.

📝 Report new incidents: Add new incidents easily via a simple form (with basic validation).

🤖 (Bonus) AI-based severity suggestion: Analyze incident descriptions to suggest severity levels automatically.

📱 Responsive layout: Designed for smooth experience across devices using Flexbox/Grid.

🎨 Clean UI: Modern, clean, and user-friendly interface with subtle hover effects.

🧩 Tech Stack
HTML5

CSS3 (Flexbox, Grid)

TypeScript

(Optional if using a framework: React.js / Vanilla TypeScript DOM manipulation)

📜 Mock Data Example
json

 📜 Mock Data Example

```json
[
  {
    "id": 1,
    "title": "Biased Recommendation Algorithm",
    "description": "Algorithm consistently favored certain demographics...",
    "severity": "Medium",
    "reported_at": "2025-03-15T10:00:00Z"
  },
  {
    "id": 2,
    "title": "LLM Hallucination in Critical Info",
    "description": "LLM provided incorrect safety procedure information...",
    "severity": "High",
    "reported_at": "2025-04-01T14:30:00Z"
  },
  {
    "id": 3,
    "title": "Minor Data Leak via Chatbot",
    "description": "Chatbot inadvertently exposed non-sensitive user metadata...",
    "severity": "Low",
    "reported_at": "2025-03-20T09:15:00Z"
  }
]
```
💡 Future Improvements
🛢️ Database Integration: Connect with a real database (MongoDB, Firebase) for persistent storage of incidents.

🔐 Authentication: Add login/signup functionality for authorized incident reporting.

🧠 Advanced AI Analysis: Use Natural Language Processing (NLP) models to better classify incident severity.

📱 Enhanced Mobile Support: Further optimize mobile responsiveness with advanced media queries and mobile-first design.
