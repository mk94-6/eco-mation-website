"use server"

import { z } from "zod"

// Email validation schema
const EmailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(5, "Message must be at least 5 characters long"),
})

export async function sendEmail(data: { email: string; message: string }) {
  // Validate the input data
  const result = EmailSchema.safeParse(data)

  if (!result.success) {
    throw new Error("Invalid input data")
  }

  try {
    // In a real application, you would send an email here
    // For example, using a service like SendGrid, Mailgun, or AWS SES

    // This is a simulated delay to mimic sending an email
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Log the email data (for demonstration purposes)
    console.log("Email sent:", data)

    return { success: true }
  } catch (error) {
    console.error("Failed to send email:", error)
    throw new Error("Failed to send email")
  }
}
