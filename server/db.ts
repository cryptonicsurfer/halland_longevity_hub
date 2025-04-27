import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from '@shared/schema';
import { eq } from 'drizzle-orm';

// Ensure the DATABASE_URL environment variable is set in Vercel
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const sql = neon(process.env.DATABASE_URL);
// Note: schema includes users, contactMessages, newsletterSubscriptions
const db = drizzle(sql, { schema });

// Re-implement storage methods using Drizzle against the database
// Note: User methods are not currently used by API routes, but kept for potential future use.

async function getUser(id: number): Promise<schema.User | undefined> {
  const result = await db.select().from(schema.users).where(eq(schema.users.id, id)).limit(1);
  return result[0];
}

async function getUserByUsername(username: string): Promise<schema.User | undefined> {
  const result = await db.select().from(schema.users).where(eq(schema.users.username, username)).limit(1);
  return result[0];
}

async function createUser(insertUser: schema.InsertUser): Promise<schema.User> {
  const result = await db.insert(schema.users).values(insertUser).returning();
  return result[0];
}

// Contact message methods
async function getContactMessage(id: number): Promise<schema.ContactMessage | undefined> {
    const result = await db.select().from(schema.contactMessages).where(eq(schema.contactMessages.id, id)).limit(1);
    return result[0];
}

async function createContactMessage(message: schema.InsertContactMessage): Promise<schema.ContactMessage> {
    const result = await db.insert(schema.contactMessages).values(message).returning();
    return result[0];
}

async function getAllContactMessages(): Promise<schema.ContactMessage[]> {
    return db.select().from(schema.contactMessages);
}

// Newsletter subscription methods
async function getNewsletterSubscription(id: number): Promise<schema.NewsletterSubscription | undefined> {
    const result = await db.select().from(schema.newsletterSubscriptions).where(eq(schema.newsletterSubscriptions.id, id)).limit(1);
    return result[0];
}

async function getNewsletterSubscriptionByEmail(email: string): Promise<schema.NewsletterSubscription | undefined> {
    const result = await db.select().from(schema.newsletterSubscriptions).where(eq(schema.newsletterSubscriptions.email, email)).limit(1);
    return result[0];
}

async function createNewsletterSubscription(subscription: schema.InsertNewsletterSubscription): Promise<schema.NewsletterSubscription> {
    const result = await db.insert(schema.newsletterSubscriptions).values(subscription).returning();
    return result[0];
}

async function getAllNewsletterSubscriptions(): Promise<schema.NewsletterSubscription[]> {
    return db.select().from(schema.newsletterSubscriptions);
}

// Export the functions in an object similar to the previous 'storage' export
export const storage = {
    getUser,
    getUserByUsername,
    createUser,
    getContactMessage,
    createContactMessage,
    getAllContactMessages,
    getNewsletterSubscription,
    getNewsletterSubscriptionByEmail,
    createNewsletterSubscription,
    getAllNewsletterSubscriptions,
};

// Export the db instance itself if needed elsewhere
export { db };
