
# 📱 Phone Catalog

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS_Modules-CC6699?style=flat&logo=sass&logoColor=white)

An Apple-style online store for phones, tablets and accessories, built with **React** and **TypeScript**.
All products, prices and details are fetched asynchronously from JSON data, the same way a real app talks to a backend API.

---

## 🔗 Live Preview

👉 **[Open the store](https://shtoikoihor.github.io/React-project/)**

---

## 🎨 Design Reference

[Figma — Phone Catalog (V2), Rounded Style](https://www.figma.com/design/7JTa0q8n3dTSAyMNaA0u8o/Phone-catalog--V2--Rounded-Style-3?node-id=0-1&p=f) — design provided by Mate Academy.

---

## 🛠 Technologies Used

| Category     | Tools                                                             |
| ------------ | ----------------------------------------------------------------- |
| UI           | React 18, TypeScript                                              |
| Routing      | React Router v6                                                   |
| State        | Redux Toolkit, Context API                                        |
| Data         | Fetching local JSON API (products, prices, details), LocalStorage |
| Styles       | SCSS Modules, responsive layout                                   |
| Build        | Vite                                                              |
| Code quality | ESLint, Prettier, Stylelint                                       |
| Testing      | Cypress                                                           |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm

### Installation

```bash
git clone https://github.com/shtoikoihor/React-project.git
cd React-project
npm install
```

### Run locally

```bash
npm start
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Other scripts

```bash
npm run build   # production build
npm run lint    # check code style
npm run deploy  # publish to GitHub Pages
```

---

## ✨ Features

- **Home page** — banner slider, "Hot prices" and "Brand new models" carousels, shop-by-category section
- **Catalog pages** for phones, tablets and accessories with sorting and pagination
- **Product page** — photo gallery, color and capacity selection, full specifications, "You may also like" block
- **Data from API** — products, prices and details for every item are fetched from JSON files with loading and error states
- **Favorites** — add or remove products with one click
- **Shopping cart** — change quantity, see the total price, remove items
- **Checkout** — order confirmation that clears the cart
- Favorites and cart are saved in **LocalStorage**, so they survive a page reload
- Fully responsive layout for mobile, tablet and desktop

---
