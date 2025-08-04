"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message is too short"),
});

export async function submitContactForm(formData: { name: string; email: string; message: string }) {
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid form data.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // In a real application, you would send an email, save to a database, etc.
  console.log("New contact form submission:", parsed.data);

  return {
    success: true,
    message: "Thank you for your message! I'll get back to you soon.",
  };
}
