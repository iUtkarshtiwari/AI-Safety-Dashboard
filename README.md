# 🛡️ AI Safety Incident Dashboard
SparkleHood Project
A simple, responsive web application to view, filter, sort, and report AI safety incidents.
Built using HTML, CSS, and TypeScript with clean UI and smart interactions.


🔗 Live Demo
[ https://ai-safetydashboard.netlify.app/ ]
📋 Project Overview
This project is designed to help track and manage AI safety incidents.
It features dynamic filtering, sorting, state management, and user interaction handling — with an optional AI-based severity suggestion feature during reporting.

✨ Features
📄 Display a list of AI safety incidents (Title, Severity, Reported Date).
🔎 Filter incidents by Severity (All, Low, Medium, High).
📅 Sort incidents by Reported Date (Newest First, Oldest First).
👁️ View full Description by toggling incident details.
📝 Submit new incidents through an easy-to-use form.
🤖 (Bonus) AI-based severity suggestion based on description keywords.
📱 Responsive layout with Flexbox/Grid for smooth mobile and desktop experience.
🎨 Clean and user-friendly interface with subtle hover effects.
🧩 Tech Stack
    HTML5
    CSS3 (Flexbox, Grid)
    TypeScript

📜 Mock Data Example
json

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
💡 Future Improvements
Connect with a real database (e.g., MongoDB/Firebase) for persistent incident storage.
Add login/authentication for incident reporters.
Add AI text analysis (NLP) to classify severity levels more smartly.
Improve mobile responsiveness further with media queries.

