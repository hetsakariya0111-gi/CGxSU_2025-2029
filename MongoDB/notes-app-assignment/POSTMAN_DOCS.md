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
  "data": {
    "title": "Team Standup",
    "content": "Discuss sprint blockers and deployment plan",
    "category": "work",
    "isPinned": true,
    "_id": "6660f4c1b0a69a001f3a5c8d",
    "createdAt": "2026-06-05T10:30:25.123Z",
    "updatedAt": "2026-06-05T10:30:25.123Z",
    "__v": 0
  }
}
```
- **Response (400 - Missing fields)**:
```json
{
  "success": false,
  "message": "Title and content are required",
  "data": null
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
    { "title": "Note 2", "content": "Content 2", "category": "study" },
    { "title": "Note 3", "content": "Content 3", "category": "personal" }
  ]
}
```
- **Response (201)**:
```json
{
  "success": true,
  "message": "3 notes created successfully",
  "data": [...]
}
```
- **Response (400)**:
```json
{
  "success": false,
  "message": "notes array is required and cannot be empty",
  "data": null
}
```

---

### 1.3 Get All Notes
- **Method**: GET
- **URL**: `/api/notes`
- **Response (200)**:
```json
{
  "success": true,
  "message": "Notes fetched successfully",
  "count": 2,
  "data": [
    {
      "_id": "6660f4c1b0a69a001f3a5c8d",
      "title": "Team Standup",
      "content": "Discuss sprint blockers and deployment plan",
      "category": "work",
      "isPinned": true,
      "createdAt": "2026-06-05T10:30:25.123Z",
      "updatedAt": "2026-06-05T10:30:25.123Z",
      "__v": 0
    }
  ]
}
```

---

### 1.4 Get Note by ID
- **Method**: GET
- **URL**: `/api/notes/:id`
- **Example URL**: `/api/notes/6660f4c1b0a69a001f3a5c8d`
- **Response (200)**:
```json
{
  "success": true,
  "message": "Note fetched successfully",
  "data": {...}
}
```
- **Response (400 - Invalid ID)**:
```json
{
  "success": false,
  "message": "Invalid note ID",
  "data": null
}
```
- **Response (404 - Not found)**:
```json
{
  "success": false,
  "message": "Note not found",
  "data": null
}
```

---

### 1.5 Replace Note (Full Update)
- **Method**: PUT
- **URL**: `/api/notes/:id`
- **Headers**: `Content-Type: application/json`
- **Body**:
```json
{
  "title": "New Title",
  "content": "New Content",
  "category": "study",
  "isPinned": false
}
```
- **Response (200)**:
```json
{
  "success": true,
  "message": "Note replaced successfully",
  "data": {...}
}
```

---

### 1.6 Update Note (Partial)
- **Method**: PATCH
- **URL**: `/api/notes/:id`
- **Headers**: `Content-Type: application/json`
- **Body**:
```json
{
  "isPinned": true
}
```
- **Response (200)**:
```json
{
  "success": true,
  "message": "Note updated successfully",
  "data": {...}
}
```
- **Response (400)**:
```json
{
  "success": false,
  "message": "No fields provided to update",
  "data": null
}
```

---

### 1.7 Delete Single Note
- **Method**: DELETE
- **URL**: `/api/notes/:id`
- **Response (200)**:
```json
{
  "success": true,
  "message": "Note deleted successfully",
  "data": null
}
```

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
- **Response (200)**:
```json
{
  "success": true,
  "message": "2 notes deleted successfully",
  "data": null
}
```
- **Response (400)**:
```json
{
  "success": false,
  "message": "ids array is required and cannot be empty",
  "data": null
}
```

---

## 2. Search Operations

### 2.1 Search by Title
- **Method**: GET
- **URL**: `/api/notes/search?q=<keyword>`
- **Example**: `/api/notes/search?q=meeting`
- **Response (200)**:
```json
{
  "success": true,
  "message": "Search results for: meeting",
  "count": 2,
  "data": [...]
}
```
- **Response (400)**:
```json
{
  "success": false,
  "message": "Search query 'q' is required",
  "data": null
}
```

---

### 2.2 Search by Content
- **Method**: GET
- **URL**: `/api/notes/search/content?q=<keyword>`
- **Example**: `/api/notes/search/content?q=deployment`
- **Response (200)**:
```json
{
  "success": true,
  "message": "Content search results for: deployment",
  "count": 1,
  "data": [...]
}
```

---

### 2.3 Search All Fields (Title + Content)
- **Method**: GET
- **URL**: `/api/notes/search/all?q=<keyword>`
- **Example**: `/api/notes/search/all?q=react`
- **Response (200)**:
```json
{
  "success": true,
  "message": "Search results for: react",
  "count": 4,
  "data": [...]
}
```

---

## 3. Two Concepts Combined

### 3.1 Filter + Sort
- **Method**: GET
- **URL**: `/api/notes/filter-sort`
- **Query Params**:
  - `category`: Filter by category (work/personal/study)
  - `isPinned`: Filter by pinned status (true/false)
  - `sortBy`: Field to sort by (default: createdAt)
  - `order`: Sort order (asc/desc, default: desc)
- **Example**: `/api/notes/filter-sort?category=work&sortBy=title&order=asc`
- **Response (200)**:
```json
{
  "success": true,
  "message": "Notes fetched successfully",
  "count": 3,
  "data": [...]
}
```

---

### 3.2 Filter + Pagination
- **Method**: GET
- **URL**: `/api/notes/filter-paginate`
- **Query Params**:
  - `category`: Filter by category
  - `isPinned`: Filter by pinned status
  - `page`: Page number (default: 1)
  - `limit`: Notes per page (default: 10)
- **Example**: `/api/notes/filter-paginate?category=work&page=1&limit=3`
- **Response (200)**:
```json
{
  "success": true,
  "message": "Notes fetched successfully",
  "data": [...],
  "pagination": {
    "total": 8,
    "page": 1,
    "limit": 3,
    "totalPages": 3,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

---

### 3.3 Sort + Pagination
- **Method**: GET
- **URL**: `/api/notes/sort-paginate`
- **Query Params**:
  - `sortBy`: Field to sort by (default: createdAt)
  - `order`: Sort order (asc/desc, default: desc)
  - `page`: Page number (default: 1)
  - `limit`: Notes per page (default: 10)
- **Example**: `/api/notes/sort-paginate?sortBy=title&order=asc&page=1&limit=5`
- **Response (200)**:
```json
{
  "success": true,
  "message": "Notes fetched successfully",
  "data": [...],
  "pagination": {...}
}
```

---

### 3.4 Search + Filter
- **Method**: GET
- **URL**: `/api/notes/search-filter`
- **Query Params**:
  - `q`: Search keyword (required)
  - `category`: Filter by category
  - `isPinned`: Filter by pinned status
- **Example**: `/api/notes/search-filter?q=meeting&category=work`
- **Response (200)**:
```json
{
  "success": true,
  "message": "Search results for: meeting",
  "count": 2,
  "data": [...]
}
```
- **Response (400)**:
```json
{
  "success": false,
  "message": "Search query 'q' is required",
  "data": null
}
```

---

## 4. Three Concepts Combined

### 4.1 Search + Sort + Pagination
- **Method**: GET
- **URL**: `/api/notes/search-sort-paginate`
- **Query Params**:
  - `q`: Search keyword (required)
  - `sortBy`: Field to sort by (default: createdAt)
  - `order`: Sort order (asc/desc, default: desc)
  - `page`: Page number (default: 1)
  - `limit`: Notes per page (default: 10)
- **Example**: `/api/notes/search-sort-paginate?q=node&sortBy=title&order=asc&page=1&limit=5`
- **Response (200)**:
```json
{
  "success": true,
  "message": "Search results for: node",
  "data": [...],
  "pagination": {...}
}
```

---

### 4.2 Filter + Sort + Pagination
- **Method**: GET
- **URL**: `/api/notes/filter-sort-paginate`
- **Query Params**:
  - `category`: Filter by category
  - `isPinned`: Filter by pinned status
  - `sortBy`: Field to sort by (default: createdAt)
  - `order`: Sort order (asc/desc, default: desc)
  - `page`: Page number (default: 1)
  - `limit`: Notes per page (default: 10)
- **Example**: `/api/notes/filter-sort-paginate?category=work&isPinned=true&sortBy=title&order=asc&page=1&limit=3`
- **Response (200)**:
```json
{
  "success": true,
  "message": "Notes fetched successfully",
  "data": [...],
  "pagination": {...}
}
```

---

## 5. Master Query (All-in-One)
- **Method**: GET
- **URL**: `/api/notes/query`
- **Query Params**:
  - `q`: Search keyword (optional)
  - `category`: Filter by category (optional)
  - `isPinned`: Filter by pinned status (optional)
  - `sortBy`: Field to sort by (default: createdAt)
  - `order`: Sort order (asc/desc, default: desc)
  - `page`: Page number (default: 1)
  - `limit`: Notes per page (default: 10)
- **Example**: `/api/notes/query?q=meeting&category=work&isPinned=true&sortBy=title&order=asc&page=1&limit=3`
- **Response (200)**:
```json
{
  "success": true,
  "message": "Notes fetched successfully",
  "data": [...],
  "pagination": {...}
}
```
