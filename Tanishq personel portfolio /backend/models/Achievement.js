import mongoose from "mongoose"

const achievementSchema = new mongoose.Schema({
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
  date: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    default: null,
  },
  category: {
    type: String,
    default: "General",
  },
})

const Achievement = mongoose.model("Achievement", achievementSchema)

export default Achievement

