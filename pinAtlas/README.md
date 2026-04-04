<div align="center">

# 📍 PinAtlas

### India's PIN Code Intelligence Platform

**Search · Filter · Analyze · Export**
150,000+ postal records at your fingertips

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com/atlas)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## 📌 What is PinAtlas?

PinAtlas is a production-grade, full-stack web application built to explore, search, and analyze India's entire postal PIN code database. It handles 150,000+ records with fast indexed queries, real-time filtering, animated dashboards, and CSV export — all wrapped in a clean, responsive UI.

> Built as part of a college hackathon project. Designed to look and perform like a real product.

---

## 🖥️ Screenshots

| Dashboard | Explore | PIN Detail |
|-----------|---------|------------|
| Stats cards + Charts | Filter + Search + Table | Full pincode breakdown |

---

## ✨ Features

- **Dashboard** — Animated stat cards, state-wise bar chart, delivery donut chart, top 5 leaderboard
- **Explore** — Cascading filters (State → District → Taluk), debounced search, sortable table, side drawer
- **PIN Detail** — Full info card with delivery badge and breadcrumb trail
- **Export** — Stream CSV download for any active filter
- **Dark / Light Mode** — Persisted in localStorage
- **Fully Responsive** — Mobile, tablet, and desktop ready

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 + Vite | UI framework |
| Tailwind CSS v3 | Styling |
| Framer Motion | Page transitions + animations |
| Recharts | Bar chart + Donut chart |
| React Router v6 | Client-side routing |
| Axios | API calls |
| React Hot Toast | Notifications |
| Lucide React | Icons |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express.js | REST API server |
| MongoDB Atlas | Cloud database |
| Mongoose | ODM + schema + indexes |
| Helmet | Security headers |
| CORS | Cross-origin requests |
| Compression | Gzip responses |
| Morgan | Request logging |
| Express Rate Limit | API protection |

---

## 📁 Folder Structure

```
pinAtlas/
├── backend/
│   ├── src/
│   │   ├── config/         # MongoDB connection (db.js)
│   │   ├── models/         # Mongoose schema + indexes (Pincode.js)
│   │   ├── controllers/    # Request handling logic
│   │   ├── services/       # Business logic + DB queries
│   │   ├── routes/         # Express route definitions
│   │   └── middleware/     # asyncWrapper + global errorHandler
│   ├── scripts/
│   │   └── seed.js         # CSV → MongoDB bulk importer
│   ├── server.js           # App entry point
│   └── .env                # Environment variables
│
├── frontend/
│   ├── src/
│   │   ├── api/            # Centralized Axios functions
│   │   ├── components/     # Navbar, Table, Cards, Drawer, Skeletons
│   │   ├── context/        # ThemeContext (dark/light mode)
│   │   ├── hooks/          # useFetch custom hook
│   │   ├── pages/          # Dashboard, Explore, PincodeDetail, About
│   │   ├── App.jsx         # Routes
│   │   └── index.css       # Tailwind directives
│   └── .env                # Frontend environment variables
│
├── pincodes.csv            # Raw data file (place here before seeding)
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free tier works)
- `pincodes.csv` file in the root of the project

---

### Step 1 — Clone the Repository

```bash
git clone https://github.com/your-username/pinAtlas.git
cd pinAtlas
```

---

### Step 2 — Backend Setup

```bash
cd backend
npm install
```

Create `backend/.env` file:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/pinatlas
PORT=5000
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

> 💡 Get your MONGO_URI from [MongoDB Atlas](https://cloud.mongodb.com) → Connect → Drivers

---

### Step 3 — Frontend Setup

```bash
cd ../frontend
npm install
```

Create `frontend/.env` file:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

### Step 4 — Seed the Database

Place `pincodes.csv` in the root of the project, then run:

```bash
cd backend
node scripts/seed.js
```

The seed script will:
- Read the CSV in streaming mode
- Insert records in batches of 1,000
- Skip duplicate pincodes automatically
- Log progress: `Inserted batch 1/154...`

---

### Step 5 — Run the App

Open **two terminals**:

**Terminal 1 — Backend:**
```bash
cd backend
npm run dev
```
> Runs on: http://localhost:5000

**Terminal 2 — Frontend:**
```bash
cd frontend
npm run dev
```
> Runs on: http://localhost:5173

---

## 📡 API Reference

All responses follow this standard envelope:

```json
{
  "success": true,
  "data": [],
  "message": "Fetched successfully",
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 1240,
    "totalPages": 62
  }
}
```

| # | Method | Endpoint | Description |
|---|--------|----------|-------------|
| 1 | GET | `/api/states` | All unique state names (A-Z) |
| 2 | GET | `/api/states/:state/districts` | Districts for a state |
| 3 | GET | `/api/states/:state/districts/:district/taluks` | Taluks for a district |
| 4 | GET | `/api/pincodes?state=&district=&taluk=&page=1&limit=20` | Paginated + filtered pincode data |
| 5 | GET | `/api/search?q=` | Search by pincode or office name |
| 6 | GET | `/api/pincode/:pincode` | Full detail for a single pincode |
| 7 | GET | `/api/stats` | Platform-wide stats (totals) |
| 8 | GET | `/api/stats/state-distribution` | Pincode count grouped by state |
| 9 | GET | `/api/stats/delivery-distribution` | Delivery vs Non-Delivery counts |
| 10 | GET | `/api/export?state=&district=&taluk=` | Stream filtered data as CSV |

---

## 🗄️ Database Schema

**Collection:** `pincodes`

| Field | Type | Description |
|---|---|---|
| `pincode` | String | 6-digit PIN code (unique) |
| `officeName` | String | Post office name |
| `officeType` | String | Head / Sub / Branch Office |
| `deliveryStatus` | String | `Delivery` or `Non-Delivery` |
| `taluk` | String | Taluk / tehsil |
| `district` | String | District name |
| `state` | String | State name |
| `divisionName` | String | Postal division |
| `regionName` | String | Postal region |
| `circle` | String | Postal circle |

**Indexes:**
```js
{ state: 1, district: 1, taluk: 1 }   // Compound — fast filtering
{ pincode: 1 }                          // Unique — fast lookup
{ officeName: "text", pincode: "text" } // Full-text search
```

---

## 🗺️ Pages Overview

### `/dashboard`
- 4 animated stat cards (count-up animation)
- Horizontal bar chart — Top 10 states by pincode count
- Donut chart — Delivery vs Non-Delivery breakdown
- Top 5 states leaderboard with progress bars

### `/explore`
- Sticky cascading filter panel (State → District → Taluk)
- Debounced search bar (300ms)
- Sortable data table with zebra striping
- Click any row → side drawer with full details
- Pagination with per-page selector (10 / 20 / 50)
- Export CSV button (exports current filter only)

### `/pincode/:pincode`
- Hero section with large PIN number
- Breadcrumb: State > District > Taluk > Pincode
- Delivery badge (green / red)
- Full info grid with all fields

### `/about`
- Tech stack showcase
- Build timeline with scroll animations

---

## 👨‍💻 Built By

**HM Sakariya** — Full Stack Developer
CGxSU · Semester 2 · 2025

---

<div align="center">
Made with ❤️ in Gujarat, India
</div>