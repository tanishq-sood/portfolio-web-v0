import express from "express"
import { submitContact, getAllContacts, markAsRead } from "../controllers/contactController.js"
import { protect } from "../middleware/auth.js"

const router = express.Router()

// Public routes
router.post("/", submitContact)

// Protected routes
router.get("/", protect, getAllContacts)
router.put("/:id/read", protect, markAsRead)

export default router

