# React Blog Platform

This is a **lightweight AI-powered blogging platform** built using **React** and **Material UI**. The app allows users to **view, search, and create blog posts**, with a smooth UI/UX experience.

## 🚀 Features
- **Home Page**: Displays a list of blog posts.
- **View Blog**: Read a detailed blog post.
- **Create Blog**: Form to create a new blog post.
- **Search & Filter**: Users can search for blogs by title or topic.
- **Responsive UI**: Built with Material UI for a clean, responsive design.
- **React Router**: Navigation between pages.

---

## 🛠 Tech Stack
- **React** (Frontend Framework)
- **Material UI** (UI Components & Styling)
- **React Router** (Navigation & Routing)
- **Vercel** (Deployment Platform)

---

## 📂 Project Structure
```
📦 react-blog-platform
├── 📂 public              # Static assets
├── 📂 src                 # Source code
│   ├── 📂 components      # Reusable UI components (Navbar, etc.)
│   ├── 📂 pages           # Page components (Home, Blog View, Create Blog)
│   ├── 📂 service         # API calls & services
│   ├── 📜 App.js          # Main app component
│   ├── 📜 index.js        # React entry point
│   ├── 📜 App.css         # Global styles
├── 📜 package.json        # Dependencies & scripts
├── 📜 README.md           # Project documentation
```

---

## 🎯 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/mrrushikeshdaund/blog-generator-reader
cd blog-generator-reader
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm start
```
- The app will run on `http://localhost:3000/`

---

## 🔗 API Integration
- All blog data is fetched from a **mock API service**.
- API functions are located in `src/service/BlogApiService.js`.

---

## 🚀 Deployment to Vercel
### **1️⃣ Install Vercel CLI** (Optional but recommended)
```sh
npm install -g vercel
```

### **2️⃣ Build the App**
```sh
npm run build
```

### **3️⃣ Deploy to Vercel**
```sh
vercel
```


