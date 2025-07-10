# 🧾 SHEYMONEY – Task Management & Expense Tracker Application

**SHEYMONEY** is a full-stack **Task and Expense Management Web Application** built using **React**, **Node.js**, **Express**, and **MongoDB**. It helps users track income/expenses and manage transactions with insightful visual analytics — all from a modern web interface.

---

## 🌐 Live Website

- **Frontend (Vercel)**: https://sheymoney-client.vercel.app  
- **Backend (Render)**: https://sheymoney-backend-pf89.onrender.com

---

## 📌 Project Description

The Task and Expense Management System is designed to help users track day-to-day financial transactions with ease. It allows users to add, edit, and delete transactions, filter by category and date, and gain insights into their spending behavior using interactive charts.

---

## 🎯 Objectives

1. Simplify expense tracking for individuals  
2. Provide insights into spending habits via analytics  
3. Allow users to manage personal transactions with categories and filters  
4. Offer a responsive, clean user experience across devices

---

## ✅ Features

- 🔐 User registration and login with secure localStorage authentication
- ➕ Add, edit, and delete income and expense transactions
- 🔍 Filter by date range, category, and type (income/expense)
- 📊 Analytics dashboard with category breakdown and percentages
- 🧭 Protected routes using a `ProtectedRoute` component
- 📱 Responsive user interface compatible with mobile, tablet, and desktop

---

## ⚙️ Tech Stack

### 🖥 Frontend

React.js, React Router DOM, Axios, Ant Design (antd), Moment.js, LocalStorage, CSS (custom), Deployed via **Vercel**

### ⚙️ Backend

Node.js, Express.js, MongoDB Atlas, Mongoose, CORS, Deployed via **Render**

### 🔌 API

RESTful JSON API using POST-based routes under `/api`, includes:

- `POST /users/register`
- `POST /users/login`
- `POST /transactions/add-transaction`
- `POST /transactions/edit-transaction`
- `POST /transactions/delete-transaction`
- `POST /transactions/get-all-transactions`

---

## 🔐 Authentication

- Uses `localStorage` to track user session
- Protected routes redirect unauthenticated users

---

## 🧾 Database

- MongoDB Atlas cloud-hosted
- Mongoose ORM used for defining models
- Collections: `users`, `transactions`

---

## 📁 Folder Structure

SHEYMONEY/
├── client/ # React frontend
│ ├── src/
│ ├── public/
│ └── .env
├── server/ # Express backend
│ ├── models/
│ ├── routes/
│ ├── dbConnect.js
│ └── server.js
└── README.md

---

## 🚀 Deployment

- Frontend deployed on **Vercel** with GitHub auto-deploys  
- Backend hosted on **Render** with MongoDB Atlas as database  
- `.env` used in frontend for production API access:

```env
REACT_APP_API_URL=https://sheymoney-backend-pf89.onrender.com/api

---