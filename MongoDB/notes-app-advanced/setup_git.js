const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const controllerPath = path.join(__dirname, 'src', 'controllers', 'note.controller.js');
const routesPath = path.join(__dirname, 'src', 'routes', 'note.routes.js');

const runGit = (msg) => {
  try {
    execSync('git add .', { stdio: 'ignore' });
    execSync(`git commit -m "${msg}"`, { stdio: 'ignore' });
    console.log(`Committed: ${msg}`);
  } catch (err) {
    console.log(`Skipped or error on: ${msg}`);
  }
};

execSync('git init', { stdio: 'ignore' });
runGit('Initial setup');

const steps = [
  {
    msg: 'feat: add create note endpoint (POST /api/notes)',
    controller: `
exports.createNote = async (req, res) => {
  try {
    const { title, content, category, isPinned } = req.body;
    if (!title || !content) {
      return res.status(400).json({ success: false, message: "Title and content are required", data: null });
    }
    const note = await Note.create({ title, content, category, isPinned });
    res.status(201).json({ success: true, message: "Note created successfully", data: note });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.post("/", noteController.createNote);\n`
  },
  {
    msg: 'feat: add create bulk notes endpoint (POST /api/notes/bulk)',
    controller: `
exports.createBulkNotes = async (req, res) => {
  try {
    const { notes } = req.body;
    if (!notes || !Array.isArray(notes) || notes.length === 0) {
      return res.status(400).json({ success: false, message: "notes array is required and cannot be empty", data: null });
    }
    const createdNotes = await Note.insertMany(notes);
    res.status(201).json({ success: true, message: \`\${createdNotes.length} notes created successfully\`, data: createdNotes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.post("/bulk", noteController.createBulkNotes);\n`
  },
  {
    msg: 'feat: add get all notes endpoint (GET /api/notes)',
    controller: `
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json({ success: true, message: "Notes fetched successfully", count: notes.length, data: notes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.get("/", noteController.getAllNotes);\n`
  },
  {
    msg: 'feat: add get note by ID endpoint (GET /api/notes/:id)',
    controller: `
exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ success: false, message: "Note not found", data: null });
    res.status(200).json({ success: true, message: "Note fetched successfully", data: note });
  } catch (err) {
    if (err.name === 'CastError') return res.status(400).json({ success: false, message: "Invalid note ID", data: null });
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.get("/:id", noteController.getNoteById);\n`
  },
  {
    msg: 'feat: add full replace note endpoint (PUT /api/notes/:id)',
    controller: `
exports.replaceNote = async (req, res) => {
  try {
    const note = await Note.findOneAndReplace({ _id: req.params.id }, req.body, { new: true, overwrite: true, runValidators: true });
    if (!note) return res.status(404).json({ success: false, message: "Note not found", data: null });
    res.status(200).json({ success: true, message: "Note replaced successfully", data: note });
  } catch (err) {
    if (err.name === 'CastError') return res.status(400).json({ success: false, message: "Invalid note ID", data: null });
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.put("/:id", noteController.replaceNote);\n`
  },
  {
    msg: 'feat: add partial update note endpoint (PATCH /api/notes/:id)',
    controller: `
exports.updateNote = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ success: false, message: "No fields provided to update", data: null });
    }
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!note) return res.status(404).json({ success: false, message: "Note not found", data: null });
    res.status(200).json({ success: true, message: "Note updated successfully", data: note });
  } catch (err) {
    if (err.name === 'CastError') return res.status(400).json({ success: false, message: "Invalid note ID", data: null });
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.patch("/:id", noteController.updateNote);\n`
  },
  {
    msg: 'feat: add delete note endpoint (DELETE /api/notes/:id)',
    controller: `
exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ success: false, message: "Note not found", data: null });
    res.status(200).json({ success: true, message: "Note deleted successfully", data: null });
  } catch (err) {
    if (err.name === 'CastError') return res.status(400).json({ success: false, message: "Invalid note ID", data: null });
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.delete("/:id", noteController.deleteNote);\n`
  },
  {
    msg: 'feat: add delete bulk notes endpoint (DELETE /api/notes/bulk)',
    controller: `
exports.deleteBulkNotes = async (req, res) => {
  try {
    const { ids } = req.body;
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ success: false, message: "ids array is required and cannot be empty", data: null });
    }
    const result = await Note.deleteMany({ _id: { $in: ids } });
    res.status(200).json({ success: true, message: \`\${result.deletedCount} notes deleted successfully\`, data: null });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.delete("/bulk", noteController.deleteBulkNotes);\n`
  },
  {
    msg: 'feat: add get notes by category endpoint (GET /api/notes/category/:category)',
    controller: `
exports.getNotesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const allowed = ["work", "personal", "study"];
    if (!allowed.includes(category)) return res.status(400).json({ success: false, message: "Invalid category. Allowed: work, personal, study", data: null });
    
    const notes = await Note.find({ category });
    if (notes.length === 0) return res.status(404).json({ success: false, message: \`No notes found for category: \${category}\`, data: null });
    
    res.status(200).json({ success: true, message: \`Notes fetched for category: \${category}\`, count: notes.length, data: notes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.get("/category/:category", noteController.getNotesByCategory);\n`
  },
  {
    msg: 'feat: add get notes by status endpoint (GET /api/notes/status/:isPinned)',
    controller: `
exports.getNotesByStatus = async (req, res) => {
  try {
    if (req.params.isPinned !== "true" && req.params.isPinned !== "false") {
      return res.status(400).json({ success: false, message: "isPinned must be true or false", data: null });
    }
    const pinned = req.params.isPinned === "true";
    const notes = await Note.find({ isPinned: pinned });
    res.status(200).json({ success: true, message: \`Fetched all \${pinned ? 'pinned' : 'unpinned'} notes\`, count: notes.length, data: notes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.get("/status/:isPinned", noteController.getNotesByStatus);\n`
  },
  {
    msg: 'feat: add get note summary endpoint (GET /api/notes/:id/summary)',
    controller: `
exports.getNoteSummary = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id).select("title category isPinned createdAt");
    if (!note) return res.status(404).json({ success: false, message: "Note not found", data: null });
    res.status(200).json({ success: true, message: "Note summary fetched successfully", data: note });
  } catch (err) {
    if (err.name === 'CastError') return res.status(400).json({ success: false, message: "Invalid note ID", data: null });
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.get("/:id/summary", noteController.getNoteSummary);\n`
  },
  {
    msg: 'feat: add general filter endpoint (GET /api/notes/filter)',
    controller: `
exports.filterNotes = async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) filter.category = req.query.category;
    if (req.query.isPinned !== undefined) filter.isPinned = req.query.isPinned === "true";
    
    const notes = await Note.find(filter);
    res.status(200).json({ success: true, message: "Notes fetched successfully", count: notes.length, data: notes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.get("/filter", noteController.filterNotes);\n`
  },
  {
    msg: 'feat: add get pinned notes filter endpoint (GET /api/notes/filter/pinned)',
    controller: `
exports.getPinnedNotes = async (req, res) => {
  try {
    const filter = { isPinned: true };
    if (req.query.category) filter.category = req.query.category;
    
    const notes = await Note.find(filter);
    res.status(200).json({ success: true, message: "Pinned notes fetched successfully", count: notes.length, data: notes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.get("/filter/pinned", noteController.getPinnedNotes);\n`
  },
  {
    msg: 'feat: add filter by category endpoint (GET /api/notes/filter/category)',
    controller: `
exports.filterByCategory = async (req, res) => {
  try {
    if (!req.query.name) {
      return res.status(400).json({ success: false, message: "Query param 'name' is required", data: null });
    }
    const notes = await Note.find({ category: req.query.name });
    res.status(200).json({ success: true, message: \`Notes filtered by category: \${req.query.name}\`, count: notes.length, data: notes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.get("/filter/category", noteController.filterByCategory);\n`
  },
  {
    msg: 'feat: add filter by date range endpoint (GET /api/notes/filter/date-range)',
    controller: `
exports.filterByDateRange = async (req, res) => {
  try {
    if (!req.query.from || !req.query.to) {
      return res.status(400).json({ success: false, message: "Both 'from' and 'to' query params are required", data: null });
    }
    const filter = {
      createdAt: {
        $gte: new Date(req.query.from),
        $lte: new Date(req.query.to)
      }
    };
    const notes = await Note.find(filter);
    res.status(200).json({ success: true, message: \`Notes fetched between \${req.query.from} and \${req.query.to}\`, count: notes.length, data: notes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.get("/filter/date-range", noteController.filterByDateRange);\n`
  },
  {
    msg: 'feat: add paginate all notes endpoint (GET /api/notes/paginate)',
    controller: `
exports.paginateNotes = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const total = await Note.countDocuments();
    const totalPages = Math.ceil(total / limit);
    const notes = await Note.find().skip(skip).limit(limit);
    
    res.status(200).json({
      success: true,
      message: "Notes fetched successfully",
      data: notes,
      pagination: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.get("/paginate", noteController.paginateNotes);\n`
  },
  {
    msg: 'feat: add paginate notes by category endpoint (GET /api/notes/paginate/category/:category)',
    controller: `
exports.paginateNotesByCategory = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const filter = { category: req.params.category };
    
    const total = await Note.countDocuments(filter);
    const totalPages = Math.ceil(total / limit);
    const notes = await Note.find(filter).skip(skip).limit(limit);
    
    res.status(200).json({
      success: true,
      message: \`Notes fetched for category: \${req.params.category}\`,
      data: notes,
      pagination: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.get("/paginate/category/:category", noteController.paginateNotesByCategory);\n`
  },
  {
    msg: 'feat: add sort all notes endpoint (GET /api/notes/sort)',
    controller: `
exports.sortNotes = async (req, res) => {
  try {
    const allowed = ["title", "createdAt", "updatedAt", "category"];
    const sortBy = req.query.sortBy || "createdAt";
    const order = req.query.order === "asc" ? 1 : -1;
    
    if (!allowed.includes(sortBy)) {
      return res.status(400).json({ success: false, message: "Invalid sortBy. Allowed: title, createdAt, updatedAt, category", data: null });
    }
    
    const notes = await Note.find().sort({ [sortBy]: order });
    res.status(200).json({
      success: true,
      message: \`Notes sorted by \${sortBy} in \${req.query.order === 'asc' ? 'ascending' : 'descending'} order\`,
      count: notes.length,
      data: notes
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.get("/sort", noteController.sortNotes);\n`
  },
  {
    msg: 'feat: add sort pinned notes endpoint (GET /api/notes/sort/pinned)',
    controller: `
exports.sortPinnedNotes = async (req, res) => {
  try {
    const allowed = ["title", "createdAt", "updatedAt", "category"];
    const sortBy = req.query.sortBy || "createdAt";
    const order = req.query.order === "asc" ? 1 : -1;
    
    if (!allowed.includes(sortBy)) {
      return res.status(400).json({ success: false, message: "Invalid sortBy. Allowed: title, createdAt, updatedAt, category", data: null });
    }
    
    const notes = await Note.find({ isPinned: true }).sort({ [sortBy]: order });
    res.status(200).json({
      success: true,
      message: \`Pinned notes sorted by \${sortBy} in \${req.query.order === 'asc' ? 'ascending' : 'descending'} order\`,
      count: notes.length,
      data: notes
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message, data: null });
  }
};
`,
    route: `router.get("/sort/pinned", noteController.sortPinnedNotes);\n`
  }
];

let currentController = `const Note = require("../models/note.model");\n\n`;
let currentRoutes = `const express = require("express");\nconst router = express.Router();\nconst noteController = require("../controllers/note.controller");\n\n`;

// We must order routes correctly!
// Specific routes first, then /:id
const specificRoutes = [];
const idRoutes = [];

steps.forEach((step, index) => {
  currentController += step.controller + "\\n";
  fs.writeFileSync(controllerPath, currentController);
  
  if (step.route.includes("/:id")) {
    idRoutes.push(step.route);
  } else {
    specificRoutes.push(step.route);
  }
  
  let finalRoutes = currentRoutes + specificRoutes.join("") + "\\n" + idRoutes.join("") + "\\nmodule.exports = router;";
  fs.writeFileSync(routesPath, finalRoutes);
  
  runGit(step.msg);
});

console.log("All done!");
