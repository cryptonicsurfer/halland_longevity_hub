import { type VercelRequest, type VercelResponse } from '@vercel/node';
import { insertContactMessageSchema } from '../../shared/schema'; // Adjusted path
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
    // const validatedData = insertContactMessageSchema.parse(req.body); // Skip validation for demo
    // Use the new storage implementation
    // const message = await storage.createContactMessage(validatedData); // Skip DB interaction for demo
    console.log("Contact form submitted (Demo Mode):", req.body); // Log received data
    return res.status(200).json({ // Return 200 OK instead of 201 Created
      success: true,
      message: "Contact message received successfully (Demo Mode)", // Indicate demo mode
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
      console.error("Error processing contact request:", error); // Add server-side logging
      return res.status(500).json({
        success: false,
        message: "Failed to process contact request"
      });
    }
  }
}
