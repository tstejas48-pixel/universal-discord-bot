import { pgTable, serial, text, integer, timestamp, boolean } from "drizzle-orm/pg-core";

// Table to track page visitors / feedback submissions
export const feedbackTable = pgTable("feedback", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  rating: integer("rating").notNull().default(5),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Table to track feature vote counts
export const featureVotes = pgTable("feature_votes", {
  id: serial("id").primaryKey(),
  featureKey: text("feature_key").notNull().unique(),
  votes: integer("votes").notNull().default(0),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Table to log page analytics
export const pageViews = pgTable("page_views", {
  id: serial("id").primaryKey(),
  path: text("path").notNull(),
  userAgent: text("user_agent"),
  viewedAt: timestamp("viewed_at").defaultNow().notNull(),
});
