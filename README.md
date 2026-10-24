# 🚀 Interview Prep Hub

A modern, comprehensive web platform for mastering technical interviews. Packed with **500+ curated questions and detailed answers** spanning backend, frontend, full-stack development, computer science fundamentals, and behavioral rounds.

Built with pure vanilla HTML, modern CSS, and JavaScript with **zero build step**, instant loading, local offline persistence, and seamless mobile responsiveness.

---

## 🌟 Key Features

- **📚 500+ Curated Questions across 9 Domains**:
  - **Node.js Core** (85 questions)
  - **Node.js Advanced** (120 questions)
  - **PHP Fundamentals** (100 questions)
  - **Laravel Framework** (68 questions)
  - **Vue.js & Frontend** (35 questions)
  - **Python Core** (25 questions)
  - **Technical & CS Concepts** (25 questions)
  - **HR & Behavioral** (12 questions)
  - **Resume & Project Experience** (48 questions)

- **⏱️ Timed Mock Interview Simulator (`Alt+Q`)**:
  - Simulate real technical phone screens with 5, 10, or 20 questions.
  - Live elapsed stopwatch timer.
  - 3-tier self-scoring: *Mastered (+1 pt)*, *Partially (+0.5 pt)*, *Need Practice (0 pts)*.
  - Performance summary card with accuracy and duration.

- **🎯 Interactive Flashcard Mode (`Alt+P`)**:
  - Active recall test mode for rapid self-study.
  - Hide/reveal answers with the <kbd>Space</kbd> key.
  - Practice across all domains, a specific category, or only your starred questions.

- **📈 Mastery & Readiness Tracking**:
  - Toggle **`✓ Mastered`** on any question to record your preparation progress.
  - Real-time **Readiness Meter** in the header (`0% - 100%`).
  - Category-level progress bars showing mastered counts and percentages.

- **📝 Personal Talking Points & Notes**:
  - Add inline notes to any question (e.g., real-world project examples, edge cases, talking points).
  - Notes auto-save to `localStorage` and persist across sessions.
  - Dedicated **`📝 Notes`** filter to review all your customized talking points.

- **🔍 Global & Tabbed Live Search**:
  - Instant search across 500+ questions, answers, and code snippets with live match badges.
  - HTML-safe keyword highlighting via DOM tree traversal.
  - Search scope switcher: *All Topics* or *Current Tab*.

- **⭐ Bookmarks / Starred Shortlist**:
  - One-click bookmarking to curate your priority revision list before interview day.
  - Dedicated **★ Starred** tab displaying bookmarked questions across all categories.

- **💻 Developer Code Blocks with Syntax Highlighting**:
  - Terminal-themed code cards with token syntax coloring.
  - One-click **Copy Code** and **Copy Q&A** buttons with visual feedback.

- **🌓 Dark / Light Themes & 📱 Wide / Compact Layouts**:
  - Standards-compliant theme switcher (`Alt+T`) with zero flash of unstyled content (FOUC).
  - **Wide View** (980px) for desktop reading or **Compact View** (540px, `Alt+W`) to dock alongside a video interview window.

- **💾 Data Export, Backup & Markdown Cheatsheet**:
  - **Download Markdown Cheatsheet (`.md`)**: One-click download of all Starred questions, Mastered answers, and personal notes formatted for Notion, Obsidian, or printing.
  - **Full JSON Backup & Restore**: Export your progress and import it seamlessly on another device.
  - **Print Ready**: Dedicated `@media print` stylesheet for clean PDF generation.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| --- | --- |
| <kbd>/</kbd> or <kbd>⌘K</kbd> / <kbd>Ctrl+K</kbd> | Focus search bar |
| <kbd>Esc</kbd> | Clear search / close modal |
| <kbd>Alt + E</kbd> | Expand all questions in active tab |
| <kbd>Alt + C</kbd> | Collapse all questions in active tab |
| <kbd>Alt + P</kbd> | Launch Flashcard Practice Mode |
| <kbd>Alt + Q</kbd> | Start Timed Mock Interview Simulator |
| <kbd>Alt + S</kbd> | Open Readiness Stats Dashboard |
| <kbd>Alt + R</kbd> | Jump to a random question |
| <kbd>Alt + W</kbd> | Toggle Wide / Compact Layout |
| <kbd>Alt + T</kbd> | Toggle Dark / Light Theme |
| <kbd>?</kbd> | Open Keyboard Shortcuts Help |

---

## 🚀 Getting Started

No build steps or dependencies required. Simply clone the repository and open `interview.html` or `index.html` in any modern web browser:

```bash
# 1. Clone the repository
git clone git@github.com:vishalwayachal/interview_hub.git

# 2. Navigate to the project directory
cd interview_hub

# 3. Open in browser (macOS)
open interview.html

# Or serve locally with Python
python3 -m http.server 8000
```

---

## 🌐 Deploying to GitHub Pages

1. In your GitHub repository, navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
3. Select branch `main` and folder `/ (root)`.
4. Click **Save**. Your site will be live at `https://vishalwayachal.github.io/interview_hub/`.

---

## 📄 License

MIT License. Open source and free for all developers preparing for technical interviews.
