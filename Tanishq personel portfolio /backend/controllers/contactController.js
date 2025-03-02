import Contact from "../models/Contact.js"
import { sendEmail } from "../utils/email.js"

// Submit a new contact message
export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Create new contact entry
    const newContact = new Contact({
      name,
      email,
      message,
    })

    // Save to database
    await newContact.save()

    // Send notification email
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    })

    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully!",
    })
  } catch (error) {
    console.error("Contact submission error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    })
  }
}

// Get all contact messages (protected route)
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch contact messages",
    })
  }
}

// Mark contact as read
export const markAsRead = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, { isRead: true }, { new: true })

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found",
      })
    }

    res.status(200).json({
      success: true,
      data: contact,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update contact message",
    })
  }
}

