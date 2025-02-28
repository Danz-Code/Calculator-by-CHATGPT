# Glassmorphism Calculator

A modern and stylish calculator built using **HTML, Tailwind CSS, and JavaScript**, featuring a **Glassmorphism effect**. This project showcases how AI can generate high-quality code when given well-structured prompts.

## 📌 Features
- **Glassmorphism UI** with a smooth blur effect.
- **Responsive design**, adapting to different screen sizes.
- **Circular buttons** for a modern look.
- **Basic arithmetic operations** (+, -, ×, ÷, %).
- **Keyboard support** (Desktop only).
- **Animated buttons** for better user experience.

## 🚀 How AI Built This Calculator

### 1️⃣ The Power of a Good Prompt
The quality of AI-generated code depends highly on how clear and structured the prompt is. A vague prompt can lead to undesired results, while a well-detailed prompt ensures precision.

#### ❌ **Poor Prompt Example:**
> "Create a cool calculator using Tailwind CSS."

This lacks key details, leaving AI to interpret what "cool" means, leading to potential mismatches with expectations.

#### ✅ **Well-Structured Prompt Example:**
> "Build a vertical calculator using Tailwind CSS with a Glassmorphism effect. The calculator should have rounded buttons, be fully responsive, support keyboard input for desktops, and all files (HTML, CSS, JS) should be separated and packaged into a ZIP file."

This provides clear guidance on:
- **Technology to use** (Tailwind CSS)
- **Layout** (Vertical, mobile-like)
- **UI styling** (Glassmorphism, rounded buttons)
- **Responsiveness**
- **File structure** (Separated files, ZIP format)

### 2️⃣ Iterative Improvements Through Revisions
Despite a strong initial prompt, some refinements were needed:
1. **Improving the Glassmorphism effect** – Ensuring proper background blur without blending into the background.
2. **Adjusting button radius** – Changing to `border-radius: 20%` for a more appealing look.
3. **Fixing multiplication symbol ('X')** – Displaying 'X' in the input field instead of `*`, but keeping `*` functional for keyboard input.
4. **Handling the Enter key behavior** – Restricting `Enter` to only trigger `=` instead of repeating the last input.
5. **Disabling tab selection on buttons** – Preventing unwanted focus shifts when using the `Tab` key.
6. **Adding button animations** – Enhancing the UI experience with click animations.

## 📂 File Structure
```
/ calculator-by-chatgpt
  ├──  README.md
  └──  / CalculatorByGPT
        ├──  index.html        # Main HTML structure
        ├──  styles.css        # Tailwind-based CSS styles
        └──  script.js         # JavaScript functions and event handling

       # Project documentation
```

## 💻 Installation & Usage
1. **Clone the repository**
   ```sh
   git clone https://github.com/Danz-Code/calculator-by-chatgpt.git
   cd calculator-by-chatgpt
   ```
2. **Open `index.html` in a browser**
   - Alternatively, use Live Server for real-time preview.

## 📜 License
This project is open-source and available under the **MIT License**.

## 📣 Credits
Developed using **AI assistance** with iterative refinements to match expectations.

---

🚀 **Try experimenting with your own prompts and see what AI can create!**

