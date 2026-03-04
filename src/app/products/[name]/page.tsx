import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { SentimentBadge } from "@/components/sentiment-badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { slugify } from "@/lib/slugify";

async function getSlugMap() {
  const shoes = await prisma.footwearNote.findMany({
    select: { shoeName: true },
    distinct: ["shoeName"],
  });
  const map: Record<string, string> = {};
  for (const s of shoes) {
    map[slugify(s.shoeName)] = s.shoeName;
  }
  return map;
}

export async function generateStaticParams() {
  const shoes = await prisma.footwearNote.findMany({
    select: { shoeName: true },
    distinct: ["shoeName"],
  });
  return shoes.map((s) => ({ name: slugify(s.shoeName) }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const slugMap = await getSlugMap();
  const shoeName = slugMap[name];

  if (!shoeName) return notFound();

  const notes = await prisma.footwearNote.findMany({
    where: { shoeName },
    include: { athlete: true, visit: true },
    orderBy: { createdAt: "desc" },
  });

  if (notes.length === 0) return notFound();

  const relatedQuotes = await prisma.quote.findMany({
    where: {
      text: { contains: shoeName.split(" ")[0] },
      topic: "footwear",
    },
    include: { athlete: true },
  });

  const sentimentCounts: Record<string, number> = {};
  for (const note of notes) {
    sentimentCounts[note.sentiment] =
      (sentimentCounts[note.sentiment] || 0) + 1;
  }

  return (
    <div className="space-y-6">
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        All Products
      </Link>

      <div>
        <h1 className="text-3xl font-bold tracking-tight">{shoeName}</h1>
        <p className="text-muted-foreground mt-1">
          Feedback from {new Set(notes.map((n) => n.athleteId)).size} athlete
          {new Set(notes.map((n) => n.athleteId)).size !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="flex gap-3">
        {Object.entries(sentimentCounts).map(([sentiment, count]) => (
          <div
            key={sentiment}
            className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2"
          >
            <SentimentBadge sentiment={sentiment} />
            <span className="font-mono text-sm font-bold">{count}</span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Athlete Feedback</h2>
        {notes.map((note) => (
          <Card key={note.id}>
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <Link
                    href={`/athletes/${note.athleteId}`}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {note.athlete.name}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {note.useCase}
                  </p>
                </div>
                <SentimentBadge sentiment={note.sentiment} />
              </div>
              {note.frequency && (
                <p className="text-sm text-muted-foreground mt-2 font-mono">
                  {note.frequency}
                </p>
              )}
              {note.notes && (
                <p className="text-sm mt-3 leading-relaxed">{note.notes}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {relatedQuotes.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Related Quotes</h2>
          {relatedQuotes.map((quote) => (
            <Card key={quote.id}>
              <CardContent className="p-4">
                <p className="text-sm italic leading-relaxed">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  — {quote.athlete.name}
                  {quote.context && ` · ${quote.context}`}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
