# WorldAtlas 🌍

*WorldAtlas* is a responsive React web application that allows users to explore countries, view details, and contact the site administrators. It features is smooth navigation, and a clean, professional UI with Tailwind CSS.

---

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Demo](#demo)
- [Folder Structure](#folder-structure)
- [Author](#author)
- [License](#license)
- [Support](#support)


---

## Features
- Responsive design for mobile and desktop
- Navigation between pages: Home, About, Country, Contact
- Smooth scroll to top on navigation
- Mobile hamburger menu with animated slide
- Country search and filter functionality
- Country Asc and Desc Buttons
- Contact form with validation
- Footer with social media links and contact info

---

## Technologies
- *Frontend:* React, React Router DOM  
- *Styling:* Tailwind CSS  
- *Icons:* React Icons  
- *Build Tool:* Vite  
- *JavaScript:* ES6+  

---

## Demo
[🌐 Demo Link](http://worldatlas-umar.netlify.app)

---

## Folder Structure


| FILE NAME / FOLDER          | Description                       |
| --------------------------- | --------------------------------- |
| public/                     | Static files                      |
| src/                        | Main source folder                |
| ├─ api/                     | API data files and functions      |
| │  ├─ countryData.json      | JSON file containing country data |
| │  ├─ footerApi.json        | JSON file containing footer data  |
| │  └─ postApi.jsx           | API functions for posts           |
| ├─ components/              | All React components              |
| │  ├─ Layout/               | Layout related components         |
| │  │  ├─ AppLayout.jsx      | Main layout wrapper               |
| │  │  ├─ CountryCard.jsx    | Card component for each country   |
| │  │  └─ CountryDetails.jsx | Details page for a country        |
| │  ├─ UI/                   | Reusable UI components            |
| │  │  ├─ Header.jsx         | Header / navigation bar           |
| │  │  ├─ Footer.jsx         | Footer component                  |
| │  │  ├─ HeroSection.jsx    | Hero section component            |
| │  │  ├─ Loader.jsx         | Loader / spinner component        |
| │  │  └─ SearchFilter.jsx   | Search & filter component         |
| ├─ pages/                   | Page components                   |
| │  ├─ Home.jsx              | Home page                         |
| │  ├─ About.jsx             | About page                        |
| │  ├─ Contact.jsx           | Contact page                      |
| │  ├─ Country.jsx           | Country list page                 |
| │  └─ ErrorPage.jsx         | Error / 404 page                  |
| ├─ App.jsx                  | Main React App file               |
| └─ main.jsx                 | Entry point for React             |
| package.json                | Project metadata and dependencies |
| tailwind.config.js          | Tailwind CSS configuration        |
| vite.config.js              | Vite configuration                |


---

### Author
*Muhammad Umar Hassan*  
Frontend Developer | React Enthusiast | UI/UX Lover  

📸 Instagram: [@m_umar_hassan](https://www.instagram.com/m_umar_hassan)  
💼 LinkedIn: [M. Umarh](https://www.linkedin.com/in/m-umarh)  
📘 Facebook: [Muhammad Umar Hassan](https://www.facebook.com/muhammadumar.hassan.581)  

---

### License
This project is licensed under the *MIT License*.  
You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the project, under the following conditions:  
- Include the original copyright and license notice in all copies or substantial portions of the software.

---

### Support
For any issues, suggestions, or collaborations, you can reach out to *Muhammad Umar Hassan* via the social media links above.  
Feel free to open issues on GitHub or contact directly via email or social media.
