import Achievement from "../models/Achievement.js"

// Get all achievements
export const getAllAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find().sort({ date: -1 })
    res.status(200).json({
      success: true,
      count: achievements.length,
      data: achievements,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch achievements",
    })
  }
}

// Get single achievement
export const getAchievementById = async (req, res) => {
  try {
    const achievement = await Achievement.findById(req.params.id)

    if (!achievement) {
      return res.status(404).json({
        success: false,
        message: "Achievement not found",
      })
    }

    res.status(200).json({
      success: true,
      data: achievement,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch achievement",
    })
  }
}

// Create new achievement (protected route)
export const createAchievement = async (req, res) => {
  try {
    const achievement = await Achievement.create(req.body)
    res.status(201).json({
      success: true,
      data: achievement,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create achievement",
    })
  }
}

// Update achievement (protected route)
export const updateAchievement = async (req, res) => {
  try {
    const achievement = await Achievement.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    if (!achievement) {
      return res.status(404).json({
        success: false,
        message: "Achievement not found",
      })
    }

    res.status(200).json({
      success: true,
      data: achievement,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update achievement",
    })
  }
}

// Delete achievement (protected route)
export const deleteAchievement = async (req, res) => {
  try {
    const achievement = await Achievement.findByIdAndDelete(req.params.id)

    if (!achievement) {
      return res.status(404).json({
        success: false,
        message: "Achievement not found",
      })
    }

    res.status(200).json({
      success: true,
      message: "Achievement deleted successfully",
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete achievement",
    })
  }
}

