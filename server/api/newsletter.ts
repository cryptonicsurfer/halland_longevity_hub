import { type VercelRequest, type VercelResponse } from '@vercel/node';
import { insertNewsletterSubscriptionSchema } from '../../shared/schema'; // Adjusted path
import { fromZodError } from 'zod-validation-error';
// import { storage } from '../db'; // Use the new storage from db.ts -- Not needed in demo mode

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Allow CORS for frontend requests (adjust origin in production)
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Or specific origin
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // const validatedData = insertNewsletterSubscriptionSchema.parse(req.body); // Skip validation for demo

    // Check if email already exists using the new storage
    // const existingSubscription = await storage.getNewsletterSubscriptionByEmail(validatedData.email); // Skip DB check for demo

    // if (existingSubscription) { // Skip DB check for demo
    //   // Return 200 OK if already subscribed, as it's not an error state for the user
    //   return res.status(200).json({
    //     success: true,
    //     message: "Email is already subscribed to the newsletter"
    //   });
    // }

    // Create subscription using the new storage
    // const subscription = await storage.createNewsletterSubscription(validatedData); // Skip DB interaction for demo
    console.log("Newsletter subscription submitted (Demo Mode):", req.body); // Log received data
    return res.status(200).json({ // Return 200 OK instead of 201 Created
      success: true,
      message: "Successfully subscribed to the newsletter (Demo Mode)", // Indicate demo mode
      // data: {} // No real data to return
    });
  } catch (error: any) { // Added type annotation for error
    if (error.name === "ZodError") {
      const validationError = fromZodError(error);
      return res.status(400).json({
        success: false,
        message: validationError.message
      });
    } else {
      console.error("Error processing newsletter subscription:", error); // Add server-side logging
      return res.status(500).json({
        success: false,
        message: "Failed to process newsletter subscription"
      });
    }
  }
}
