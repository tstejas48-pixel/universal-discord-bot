import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { featureVotes } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

export async function GET() {
  try {
    const votes = await db.select().from(featureVotes);
    // Convert to a map { featureKey: votes }
    const votesMap: Record<string, number> = {};
    for (const row of votes) {
      votesMap[row.featureKey] = row.votes;
    }
    return NextResponse.json({ votes: votesMap });
  } catch (error) {
    console.error("Error fetching votes:", error);
    return NextResponse.json({ error: "Failed to fetch votes" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { featureKey } = body;

    if (!featureKey) {
      return NextResponse.json({ error: "featureKey is required" }, { status: 400 });
    }

    // Upsert: increment vote count
    const existing = await db
      .select()
      .from(featureVotes)
      .where(eq(featureVotes.featureKey, featureKey))
      .limit(1);

    if (existing.length === 0) {
      await db.insert(featureVotes).values({ featureKey, votes: 1 });
    } else {
      await db
        .update(featureVotes)
        .set({
          votes: sql`${featureVotes.votes} + 1`,
          updatedAt: new Date(),
        })
        .where(eq(featureVotes.featureKey, featureKey));
    }

    const [updated] = await db
      .select()
      .from(featureVotes)
      .where(eq(featureVotes.featureKey, featureKey));

    return NextResponse.json({ success: true, votes: updated.votes });
  } catch (error) {
    console.error("Error recording vote:", error);
    return NextResponse.json({ error: "Failed to record vote" }, { status: 500 });
  }
}
