'use server';

import {z} from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message is too short'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export async function sendEmail(formData: ContactFormData) {
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Invalid form data.',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const {
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    EMAILJS_USER_ID,
    EMAILJS_PRIVATE_KEY,
  } = process.env;

  if (
    !EMAILJS_SERVICE_ID ||
    !EMAILJS_TEMPLATE_ID ||
    !EMAILJS_USER_ID ||
    !EMAILJS_PRIVATE_KEY
  ) {
    console.error('EmailJS environment variables are not configured.');
    return {
      success: false,
      message: 'Server is not configured to send emails.',
    };
  }

  const {name, email, message} = parsed.data;

  const emailData = {
    service_id: EMAILJS_SERVICE_ID,
    template_id: EMAILJS_TEMPLATE_ID,
    user_id: EMAILJS_USER_ID,
    accessToken: EMAILJS_PRIVATE_KEY,
    template_params: {
      from_name: name,
      from_email: email,
      message: message,
    },
  };

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (response.ok) {
      return {success: true, message: 'Email sent successfully!'};
    } else {
      const errorText = await response.text();
      console.error('EmailJS API Error:', errorText);
      return {
        success: false,
        message: `An unexpected error occurred: ${errorText}`,
      };
    }
  } catch (error) {
    console.error('Error in sendEmail function:', error);
    return {success: false, message: 'An unexpected error occurred.'};
  }
}
