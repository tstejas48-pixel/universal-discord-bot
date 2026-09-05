import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { feedbackTable } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  try {
    const feedback = await db
      .select()
      .from(feedbackTable)
      .orderBy(desc(feedbackTable.createdAt))
      .limit(10);
    return NextResponse.json({ feedback });
  } catch (error) {
    console.error("Error fetching feedback:", error);
    return NextResponse.json({ error: "Failed to fetch feedback" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, rating } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Rating must be between 1 and 5" }, { status: 400 });
    }

    const [inserted] = await db
      .insert(feedbackTable)
      .values({ name, email, message, rating: rating ?? 5 })
      .returning();

    return NextResponse.json({ success: true, feedback: inserted }, { status: 201 });
  } catch (error) {
    console.error("Error saving feedback:", error);
    return NextResponse.json({ error: "Failed to save feedback" }, { status: 500 });
  }
}
