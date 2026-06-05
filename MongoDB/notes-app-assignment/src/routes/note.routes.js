const express = require("express");
const router = express.Router();
const { 
  createNote, 
  createBulkNotes, 
  getAllNotes, 
  getNoteById, 
  replaceNote, 
  updateNote, 
  deleteNote, 
  deleteBulkNotes,
  searchByTitle,
  searchByContent,
  searchAll,
  filterSort,
  filterPaginate,
  sortPaginate,
  searchFilter,
  searchSortPaginate,
  filterSortPaginate,
  masterQuery
} = require("../controllers/note.controller");

router.post("/bulk", createBulkNotes);
router.delete("/bulk", deleteBulkNotes);
router.post("/", createNote);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.put("/:id", replaceNote);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);

router.get("/search", searchByTitle);
router.get("/search/content", searchByContent);
router.get("/search/all", searchAll);

router.get("/filter-sort", filterSort);
router.get("/filter-paginate", filterPaginate);
router.get("/sort-paginate", sortPaginate);
router.get("/search-filter", searchFilter);

router.get("/search-sort-paginate", searchSortPaginate);
router.get("/filter-sort-paginate", filterSortPaginate);

router.get("/query", masterQuery);

module.exports = router;
