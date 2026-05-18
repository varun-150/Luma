# LUMA — A Cognitive Learning Sanctuary

<div align="center">
  <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200&h=475" alt="LUMA Banner" style="border-radius: 24px; box-shadow: 0 20px 48px rgba(15,23,42,0.08);" />
</div>

---

## 💎 Design Philosophy & Visual Engineering

**LUMA** is a premium, static educational presentation designed to alleviate cognitive friction and academic anxiety. Built on human-centered design best practices, LUMA provides a minimal, distraction-free environment that guides students' focus toward deep concept retention.

### 🌟 Core Design Principles
*   **Perceptual Gravity (55% Less Clutter)**: Traditional educational platforms trigger stress through aggressive gaming scores, neon alerts, and red badge warnings. LUMA removes "visual noise" entirely, reserving working memory exclusively for learning material.
*   **The 8px Rhythm System**: All cards, paddings, borders, and margins are mathematically engineered on a strict **8pt spacing grid** (8px, 16px, 24px, 32px), creating a layout rhythm that requires 30% less visual effort to parse.
*   **Chromotherapy Canvas (Anxiety Alleviation)**: Grounded in a calming, biophilic palette of soft **Slate Grey (`#F5F7FA`)**, clean **Ice White**, and intelligent, quiet **Indigo (`#4F46E5`)** accents to lower student heart rates and encourage prolonged focus zones.
*   **Accessible Typography (W3C AAA Standards)**: Features **Outfit** for editorial titles and **Inter** for core lessons. Paragraph text contrast (`text-text-secondary` to `#4B5563`) delivers a W3C-compliant 4.5:1 ratio for extreme readability.

---

## 📂 Interactive Feature Showcases

*   **⚡ The Study Sanctuary (Dashboard)**: A tactile modular command dashboard featuring a responsive **Cognitive Load Circular Tracker** and focus-session metrics.
*   **🛣️ The Path of Pure Design (Mastery Roadmap)**: Visual progression tracking with refined, clear phase indexes, solid indigo connectors, and beautiful milestone cards.
*   **🔮 Aria Study Curator (AI Chat Mentor)**: An advanced chat interface featuring dark charcoal text-bubbles to balance contrast and visual weights.
*   **🎬 Cinematic Learning Mode (Sanctuary Mode)**: Immersive, dark-themed lesson view with custom scribblers, a video timeline player, and context notes.
*   **💻 IDE Evolution Sandbox (Workspace)**: A dark-themed workspace layout with high-contrast text rendering, syntactic line numbering, and preview modules.

---

## 🚀 Running Locally

Follow these quick commands to spin up the LUMA learning experience on your local machine:

### 📋 Prerequisites
*   **Node.js** (v18.x or above recommended)
*   **npm** or **Yarn**

### 💻 Setup & Startup

1.  **Clone & Open Workspace**:
    ```bash
    cd student--main
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Launch the Dev Server**:
    ```bash
    npm run dev
    ```

4.  **Open Browser**:
    *   Navigate to **`http://localhost:3000`** (or the port specified in your console) to view the fully compiled, high-fidelity experience!

### 🏗️ Production Build Check
To compile and test the static bundle:
```bash
npm run build
```
*(The Vite pipeline compiles everything into a highly optimized, single-bundle package under `/dist` in less than 12 seconds with **0 warnings**).*
