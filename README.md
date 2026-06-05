🚀 My Portfolio Website

A modern, responsive, and visually appealing **developer portfolio website** built using **React, Vite, Tailwind CSS, and TanStack Router**. This project showcases my skills, projects, achievements, and provides a way for users to contact me directly via email.

---

🌐 Live Features

* ✨ Smooth animations with modern UI
* 🎨 Custom purple-themed aesthetic design
* 📱 Fully responsive (mobile + desktop)
* 📂 Projects showcase with images
* 🏆 Achievements & certifications section
* 📬 Contact form with **EmailJS integration (no backend required)**

---

🛠️ Tech Stack

* **Frontend:** React 19, Vite
* **Styling:** Tailwind CSS, Radix UI
* **Routing:** TanStack Router
* **Forms:** React Hook Form
* **Email Service:** EmailJS
* **Animations:** Framer Motion

---

📁 Project Structure

```
src/
 ├── components/
 │   ├── portfolio/
 │   │   ├── About.tsx
 │   │   ├── Projects.tsx
 │   │   ├── Contact.tsx
 │   │   ├── Skills.tsx
 │   │   ├── Experience.tsx
 │   │   └── ...
 │   └── ui/ (Reusable UI components)
 ├── assets/ (Images & certificates)
 ├── styles.css
 ├── router.tsx
 └── main setup files
```

---

## 🚀 Projects Included

### 🔹 Ecosystem Navigator

A system designed to manage **Engineering Change Orders (ECOs)** including products, BOM, components, and operations.

### 🔹 SkyPastel (Flight Booking System)

A modern UI-based flight booking platform with a clean and futuristic design.

### 🔹 GearGuard (Maintenance Management System)

A comprehensive system for managing maintenance tasks, tracking requests, and handling technician workflows.

---

## 📬 Contact Feature

This project uses **EmailJS** to send emails directly from the frontend.

### 🔧 Setup

1. Create account on EmailJS
2. Add Email Service (Gmail)
3. Create Template with:

```
{{user_name}}
{{user_email}}
{{subject}}
{{message}}
```

4. Add your:

* Service ID
* Template ID
* Public Key

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo.git

# Navigate to project
cd your-repo

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 📦 Build

```bash
npm run build
```

---

## ❗ Important Notes

* `.env` file is not included for security reasons
* `node_modules` and build files are ignored
* EmailJS is used instead of backend SMTP

---

## 👨‍💻 Author

**Fenil Patel**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
