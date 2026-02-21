# 📱 Challenge02DS - Contacts PWA

A Progressive Web App (PWA) built with React + TypeScript + Vite.

This application allows users to manage contacts and can be installed on mobile devices like a native app.

---

## 🚀 Live Demo

🔗 https://challenge02ds.netlify.app

---

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Service Worker (Hybrid Strategy)
- Web App Manifest
- Netlify (Deployment)

---

## 🖼️ Features

- Add new contacts
- Delete contacts
- Loading simulation
- Custom logo in parent component
- Custom app icon
- Offline support
- Installable PWA

---

## 📦 PWA Implementation

This app uses a **Hybrid Caching Strategy**:

- **Network First** → For navigation and dynamic requests  
- **Cache First** → For static assets (JS, CSS, images)  
- App shell precaching for faster load and offline support  

The Service Worker handles caching and offline fallback.

---

## 📲 How to Install on Mobile

### 🤖 Android (Chrome)

1. Open the app link in Chrome:
   https://challenge02ds.netlify.app
2. Tap the **⋮ (three dots) menu**
3. Select **Install App** or **Add to Home Screen**
4. Confirm installation
5. The app will appear like a native application

---

### 🍎 iPhone (Safari)

1. Open the app link in Safari:
   https://challenge02ds.netlify.app
2. Tap the **Share button**
3. Select **Add to Home Screen**
4. Confirm
5. The app icon will be added to your home screen

---

## ⚙️ Local Development

Clone the repository:

```bash
git clone https://github.com/D-Salamanca/Challenge-01.git
cd vite-project
```


Install dependencies:
```bash

npm install
```

Run development server:
```bash

npm run dev
```

Build for production:
```bash

npm run build
```

🌐 Deployment

The app is deployed on Netlify.

Configuration:
```bash

Base directory: vite-project

Build command: npm run build

Publish directory: dist

Branch: Challenge-02
```

👨‍💻 Author

Developed by Danna Salamanca
