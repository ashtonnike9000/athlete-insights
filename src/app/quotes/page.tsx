import { prisma } from "@/lib/db";
import { QuotesClient } from "./quotes-client";

export default async function QuotesPage() {
  const [quotes, athletes, allTopics] = await Promise.all([
    prisma.quote.findMany({
      include: { athlete: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.athlete.findMany({ orderBy: { name: "asc" } }),
    prisma.quote.findMany({ select: { topic: true }, distinct: ["topic"] }),
  ]);

  const topics = allTopics.map((t) => t.topic).sort();

  const serializedQuotes = quotes.map((q) => ({
    id: q.id,
    text: q.text,
    topic: q.topic,
    context: q.context,
    athleteId: q.athleteId,
    athleteName: q.athlete.name,
  }));

  const serializedAthletes = athletes.map((a) => ({
    id: a.id,
    name: a.name,
  }));

  return (
    <QuotesClient
      quotes={serializedQuotes}
      athletes={serializedAthletes}
      topics={topics}
    />
  );
}
