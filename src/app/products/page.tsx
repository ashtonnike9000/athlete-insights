import { prisma } from "@/lib/db";
import { Card, CardContent } from "@/components/ui/card";
import { SentimentBadge } from "@/components/sentiment-badge";
import Link from "next/link";
import { slugify } from "@/lib/slugify";

export default async function ProductsPage() {
  const footwearNotes = await prisma.footwearNote.findMany({
    include: { athlete: true },
    orderBy: { shoeName: "asc" },
  });

  const productMap = new Map<
    string,
    {
      shoeName: string;
      athletes: Set<string>;
      sentiments: string[];
      notes: typeof footwearNotes;
    }
  >();

  for (const note of footwearNotes) {
    if (!productMap.has(note.shoeName)) {
      productMap.set(note.shoeName, {
        shoeName: note.shoeName,
        athletes: new Set(),
        sentiments: [],
        notes: [],
      });
    }
    const entry = productMap.get(note.shoeName)!;
    entry.athletes.add(note.athlete.name);
    entry.sentiments.push(note.sentiment);
    entry.notes.push(note);
  }

  const products = Array.from(productMap.values()).sort(
    (a, b) => b.athletes.size - a.athletes.size
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Products</h1>
        <p className="text-muted-foreground mt-1">
          {products.length} products mentioned across all athlete sessions
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => {
          const avgSentiment = getMostCommonSentiment(product.sentiments);
          return (
            <Link
              key={product.shoeName}
              href={`/products/${slugify(product.shoeName)}`}
            >
              <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold">{product.shoeName}</h3>
                    <SentimentBadge sentiment={avgSentiment} />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {Array.from(product.athletes).join(", ")}
                  </p>
                  <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border">
                    <div>
                      <span className="text-lg font-bold font-mono">
                        {product.athletes.size}
                      </span>
                      <span className="text-xs text-muted-foreground ml-1">
                        {product.athletes.size === 1 ? "athlete" : "athletes"}
                      </span>
                    </div>
                    <div>
                      <span className="text-lg font-bold font-mono">
                        {product.notes.length}
                      </span>
                      <span className="text-xs text-muted-foreground ml-1">
                        {product.notes.length === 1 ? "note" : "notes"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function getMostCommonSentiment(sentiments: string[]): string {
  const counts: Record<string, number> = {};
  for (const s of sentiments) {
    counts[s] = (counts[s] || 0) + 1;
  }
  return Object.entries(counts).sort(([, a], [, b]) => b - a)[0]?.[0] ?? "neutral";
}
