# 🦅 The Ravens Roost

> A full-stack, Game of Thrones-themed Twitter clone with modern social features and a clean user experience.

🔗 **Live Demo**: [https://varys.vercel.app](https://varys.vercel.app)

---

## 📜 Overview

**The Ravens Roost** is a Next.js-powered social media platform where users can unleash their thoughts like ravens across the Seven Kingdoms. Inspired by the aesthetics of Game of Thrones, this platform replicates core Twitter functionalities and enhances them with a sleek UI and intuitive interactions.

Users can log in via Google Authentication, post updates, like and save content, and manage their profiles — all in a fully responsive, theme-rich environment.

---

## ⚙️ Tech Stack

- **Frontend**: Next.js, React.js, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Google OAuth
- **Testing/API**: Postman
- **Deployment**: Vercel

---

## 🚀 Features

- 🔐 Google Authentication (OAuth)
- 📝 Post creation and deletion
- ❤️ Like system
- 📥 Save posts and view them later
- 💬 Comment functionality
- 👤 View and edit user profiles
- 📣 Submit feedback about the app
- 🎨 Responsive and GOT-themed UI

---

## 🧑‍💻 Local Development

To run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/the-ravens-roost.git
cd the-ravens-roost

# 2. Install dependencies
npm install

# 3. Set up environment variables
# Create a `.env.local` file and add:
# MONGO_URI=your_mongodb_connection_string
# NEXTAUTH_SECRET=your_secret
# GOOGLE_CLIENT_ID=your_google_client_id
# GOOGLE_CLIENT_SECRET=your_google_client_secret

# 4. Run the development server
npm run dev
