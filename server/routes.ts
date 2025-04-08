import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertNewsletterSubscriptionSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({
        success: true,
        message: "Contact message received successfully",
        data: message
      });
    } catch (error) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false,
          message: validationError.message
        });
      } else {
        res.status(500).json({ 
          success: false,
          message: "Failed to process contact request" 
        });
      }
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscription = await storage.getNewsletterSubscriptionByEmail(validatedData.email);
      
      if (existingSubscription) {
        return res.status(200).json({
          success: true,
          message: "Email is already subscribed to the newsletter"
        });
      }
      
      const subscription = await storage.createNewsletterSubscription(validatedData);
      res.status(201).json({
        success: true,
        message: "Successfully subscribed to the newsletter",
        data: subscription
      });
    } catch (error) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false,
          message: validationError.message
        });
      } else {
        res.status(500).json({ 
          success: false,
          message: "Failed to process newsletter subscription" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
