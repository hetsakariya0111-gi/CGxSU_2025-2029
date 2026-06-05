# Notes App Advanced API - Postman Documentation

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

## 2. Filter Operations

### 2.1 Get Notes by Category
- **Method**: GET
- **URL**: `/api/notes/category/:category`
- **Example**: `/api/notes/category/work`
- **Allowed Categories**: `work`, `personal`, `study`

---

### 2.2 Get Notes by Status (Pinned/Unpinned)
- **Method**: GET
- **URL**: `/api/notes/status/:isPinned`
- **Example**: `/api/notes/status/true`
- **Allowed Values**: `true`, `false`

---

### 2.3 Get Note Summary
- **Method**: GET
- **URL**: `/api/notes/:id/summary`

---

### 2.4 Filter Notes
- **Method**: GET
- **URL**: `/api/notes/filter`
- **Query Params**:
  - `category`: Filter by category
  - `isPinned`: Filter by pinned status (true/false)

---

### 2.5 Get Pinned Notes
- **Method**: GET
- **URL**: `/api/notes/filter/pinned`
- **Query Params (optional)**: `category`

---

### 2.6 Filter by Category (Query Param)
- **Method**: GET
- **URL**: `/api/notes/filter/category`
- **Query Params**:
  - `name`: Category name (required)

---

### 2.7 Filter by Date Range
- **Method**: GET
- **URL**: `/api/notes/filter/date-range`
- **Query Params**:
  - `from`: Start date (ISO format)
  - `to`: End date (ISO format)
- **Example**: `/api/notes/filter/date-range?from=2026-06-01&to=2026-06-10`

---

## 3. Pagination Operations

### 3.1 Paginate Notes
- **Method**: GET
- **URL**: `/api/notes/paginate`
- **Query Params**:
  - `page`: Page number (default: 1)
  - `limit`: Notes per page (default: 10)
- **Example**: `/api/notes/paginate?page=1&limit=5`

---

### 3.2 Paginate Notes by Category
- **Method**: GET
- **URL**: `/api/notes/paginate/category/:category`
- **Query Params**:
  - `page`: Page number (default: 1)
  - `limit`: Notes per page (default: 10)
- **Example**: `/api/notes/paginate/category/work?page=1&limit=3`

---

## 4. Sort Operations

### 4.1 Sort Notes
- **Method**: GET
- **URL**: `/api/notes/sort`
- **Query Params**:
  - `sortBy`: Field to sort by (title, createdAt, updatedAt, category)
  - `order`: Sort order (asc/desc)
- **Example**: `/api/notes/sort?sortBy=title&order=asc`

---

### 4.2 Sort Pinned Notes
- **Method**: GET
- **URL**: `/api/notes/sort/pinned`
- **Query Params**:
  - `sortBy`: Field to sort by (title, createdAt, updatedAt, category)
  - `order`: Sort order (asc/desc)

---
