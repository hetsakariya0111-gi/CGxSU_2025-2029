# Notes App API - Postman Documentation

## Base URL
Local: `http://localhost:10000`
Render: `https://<your-render-app-name>.onrender.com`

---

## 1. CRUD Operations

### 1.1 Create a Note
- **Method**: POST
- **URL**: `/api/notes`
- **Headers**: `Content-Type: application/json`
- **Body**:
```json
{
  "title": "Team Standup",
  "content": "Discuss sprint blockers and deployment plan",
  "category": "work",
  "isPinned": true
}
```
- **Response (201)**:
```json
{
  "success": true,
  "message": "Note created successfully",
  "data": {...}
}
```

---

### 1.2 Create Bulk Notes
- **Method**: POST
- **URL**: `/api/notes/bulk`
- **Headers**: `Content-Type: application/json`
- **Body**:
```json
{
  "notes": [
    { "title": "Note 1", "content": "Content 1", "category": "work" },
    { "title": "Note 2", "content": "Content 2", "category": "study" }
  ]
}
```

---

### 1.3 Get All Notes
- **Method**: GET
- **URL**: `/api/notes`

---

### 1.4 Get Note by ID
- **Method**: GET
- **URL**: `/api/notes/:id`

---

### 1.5 Replace Note (PUT)
- **Method**: PUT
- **URL**: `/api/notes/:id`
- **Headers**: `Content-Type: application/json`

---

### 1.6 Update Note (PATCH)
- **Method**: PATCH
- **URL**: `/api/notes/:id`
- **Headers**: `Content-Type: application/json`

---

### 1.7 Delete Single Note
- **Method**: DELETE
- **URL**: `/api/notes/:id`

---

### 1.8 Delete Bulk Notes
- **Method**: DELETE
- **URL**: `/api/notes/bulk`
- **Headers**: `Content-Type: application/json`
- **Body**:
```json
{
  "ids": ["6660f4c1b0a69a001f3a5c8d", "6660f4c1b0a69a001f3a5c8e"]
}
```

---

## 2. Filter & Pagination

### 2.1 Get Notes by Category
- **Method**: GET
- **URL**: `/api/notes/category/:category`
- **Allowed Categories**: `work`, `personal`, `study`

---

### 2.2 Get Notes by Status (Pinned/Unpinned)
- **Method**: GET
- **URL**: `/api/notes/status/:isPinned`
- **Allowed Values**: `true`, `false`

---

### 2.3 Get Note Summary
- **Method**: GET
- **URL**: `/api/notes/:id/summary`

---
