import express from "express"
import {
  getAllProjects,
  getFeaturedProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js"
import { protect } from "../middleware/auth.js"

const router = express.Router()

// Public routes
router.get("/", getAllProjects)
router.get("/featured", getFeaturedProjects)
router.get("/:id", getProjectById)

// Protected routes
router.post("/", protect, createProject)
router.put("/:id", protect, updateProject)
router.delete("/:id", protect, deleteProject)

export default router

