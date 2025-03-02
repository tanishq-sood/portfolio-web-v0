import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  technologies: {
    type: [String],
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  demo: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
    default: 0,
  },
})

const Project = mongoose.model("Project", projectSchema)

export default Project

