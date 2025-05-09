#🟩 Dynamic Multi-State Progress Bar — React
This is a solution to a machine coding interview question that requires creating a dynamic progress bar system in React. The key challenge is to show multiple independently progressing bars with a random speed between 100–900ms per increment, and display the percentage inside each bar.

#✅ Problem Statement
Design a UI with the following requirements:

A button that, when clicked, creates a new progress bar.

Each progress bar should have its own state and run independently.

The bar should fill up from 0% to 100%, with:

Completed portion in green.

Incomplete portion in grey.

The percentage text should be shown in the center of the progress bar and update dynamically.

The speed of each progress bar’s progression should be random between 100ms and 900ms.

DOM reflow should be optimized by using transform: translateX instead of changing width.

#🧠 Steps Followed to Solve the Problem
Set up React App with a base App component and a ProgressBarWithFill component.

Created a button with an onClick handler to add a new progress bar using a timestamp (Date.now()) as a unique key.

Each ProgressBarWithFill:

Initializes bar state to 0.

On mount, sets up an interval that increases the bar by 1% every random (100–900ms).

Clears the interval when it reaches 100%.

Used CSS transform: translateX to animate the filler to optimize performance and avoid constant DOM repaint from width changes.

Positioned the percentage text absolutely in the center using transform: translate(-50%, -50%).

Styled the bar with green fill, grey background, and centered bold percentage text.

#📁 Project Structure
scss
Copy
Edit

#📦progress-bar-app
 ┣ 📂src
 ┃ ┣ 📜App.js
 ┃ ┣ 📜App.css
 ┃ ┣ 📂Components
 ┃ ┃ ┗ 📜ProgressBarWithFill.js
 ┗ 📜README.md
🧪 Demo
Clicking the "Show Progress Bar" button creates a new progress bar, each progressing independently at random speed with real-time percentage display.

#💻 Installation & Run
bash
Copy
Edit
git clone https://github.com/your-username/progress-bar-app.git
cd progress-bar-app
npm install
npm start

#📸 Preview

<img width="1470" alt="ProgressBar" src="https://github.com/user-attachments/assets/7c868e38-3f74-4392-9c3c-47d28c95abd1" />


#🛠️ Tech Stack
React

JavaScript (ES6+)

CSS Flexbox

#📌 Notes
transform: translateX() is used for smooth, GPU-accelerated animations.

The speed of the progress bar is randomized once at mount per bar.

This setup mimics a typical machine coding round to assess component design, animation, and state management.

