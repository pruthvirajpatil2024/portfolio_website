## 🚀 Interactive 3D Portfolio Website

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 📂 [Project Structure](#project-structure)

---

## 🤖 Introduction

This is my **personal interactive 3D portfolio website** built to showcase my projects, skills, and experience in a visually engaging and modern way.
The portfolio leverages **3D graphics, smooth animations, and responsive design** to create an immersive user experience across devices.

The goal of this project is to stand out as a developer by combining **creative UI, performance-focused engineering, and clean code architecture**.

---

## ⚙️ Tech Stack

* **Three.js** – 3D rendering
* **React Three Fiber** – React renderer for Three.js
* **Drei** – Helpers for R3F
* **GSAP** – Animations & transitions
* **Tailwind CSS** – Styling
* **Vite** – Fast build tool
* **React** – Frontend framework

---

## 🔋 Features

* Animated 3D models and smooth transitions
* Realistic lighting, shadows, and camera movement
* GSAP-powered scroll-based animations
* Fully responsive layout (desktop & mobile)
* Modular and reusable component architecture
* Multi-section layout (About, Skills, Projects, Contact)
* Optimized performance for 3D content

---

## 🤸 Quick Start

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

* Git
* Node.js
* npm

### Clone the Repository

```bash
git clone https://github.com/pruthvirajpatil2024/your-repo-name.git
cd your-repo-name
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
```

### Run the Project

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📂 Project Structure

```
src/
 ├─ components/      # Reusable UI & 3D components
 ├─ sections/        # Page sections (About, Projects, Contact)
 ├─ assets/          # Models, textures, static assets
 ├─ styles/          # Global styles
 └─ main.jsx
```
