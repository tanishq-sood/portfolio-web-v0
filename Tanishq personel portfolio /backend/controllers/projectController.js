import Project from "../models/Project.js"

// Get all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 })
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    })
  }
}

// Get featured projects
export const getFeaturedProjects = async (req, res) => {
  try {
    const projects = await Project.find({ featured: true }).sort({ order: 1 })
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch featured projects",
    })
  }
}

// Get single project
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      })
    }

    res.status(200).json({
      success: true,
      data: project,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch project",
    })
  }
}

// Create new project (protected route)
export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body)
    res.status(201).json({
      success: true,
      data: project,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create project",
    })
  }
}

// Update project (protected route)
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      })
    }

    res.status(200).json({
      success: true,
      data: project,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update project",
    })
  }
}

// Delete project (protected route)
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id)

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      })
    }

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete project",
    })
  }
}

