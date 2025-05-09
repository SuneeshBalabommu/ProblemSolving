# 🟩 Dynamic Multi-State Progress Bar — React

This project is a solution to a machine coding interview problem. The goal is to create a **dynamic progress bar system** in React where each bar runs independently with its own state and progresses at a random speed (between **100ms and 900ms per step**). Each bar also displays its percentage in the center as it progresses.

---

## ✅ Problem Statement

Design a UI with the following features:

- A **button** that creates a new progress bar each time it's clicked.
- Each progress bar should:
  - Progress **independently** from others.
  - Fill from **0% to 100%**.
  - Show **green** for the completed portion and **grey** for the remaining.
  - Display a **dynamically updating percentage text** centered inside the bar.
  - Progress at a **random interval between 100ms and 900ms** per step.
  - Use `transform: translateX` for performance instead of modifying `width`.

---

## 🧠 Steps Followed to Solve the Problem

1. **Set up the React app** with `App.js` and a `ProgressBarWithFill` component.
2. Added a **"Show Progress Bar"** button to `App.js` that triggers a new progress bar on each click.
3. On button click:
   - A unique ID (using `Date.now()`) is added to the `bars` array.
4. In `ProgressBarWithFill`:
   - Initialized a `bar` state at `0`.
   - Used `useEffect` to set up an interval with random speed between `100-900ms`.
   - Updated the `bar` state until it reaches `100`, then cleared the interval.
5. **CSS animation**:
   - Used `transform: translateX` to move the fill for better performance.
   - Positioned percentage text at the **center** using `position: absolute` and `transform: translate(-50%, -50%)`.
6. Styled using plain **CSS** with proper classNames.

---

## 📁 Project Structure

scss
Copy
Edit

# 📦progress-bar-app
 ┣ 📂src
 ┃ ┣ 📜App.js
 ┃ ┣ 📜App.css
 ┃ ┣ 📂Components
 ┃ ┃ ┗ 📜ProgressBarWithFill.js
 ┗ 📜README.md
 
# 🧪 Demo
Clicking the "Show Progress Bar" button creates a new progress bar, each progressing independently at random speed with real-time percentage display.

# 💻 Installation & Run
bash
Copy
Edit
git clone https://github.com/your-username/progress-bar-app.git
cd progress-bar-app
npm install
npm start

# 📸 Preview

<img width="1470" alt="ProgressBar" src="https://github.com/user-attachments/assets/7c868e38-3f74-4392-9c3c-47d28c95abd1" />


# 🛠️ Tech Stack
React

JavaScript (ES6+)

CSS Flexbox

# 📌 Notes
transform: translateX() is used for smooth, GPU-accelerated animations.

The speed of the progress bar is randomized once at mount per bar.

This setup mimics a typical machine coding round to assess component design, animation, and state management.

