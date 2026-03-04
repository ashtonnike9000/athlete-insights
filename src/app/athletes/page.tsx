import { prisma } from "@/lib/db";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default async function AthletesPage() {
  const athletes = await prisma.athlete.findMany({
    include: {
      _count: { select: { visits: true, quotes: true, footwearNotes: true } },
    },
    orderBy: { name: "asc" },
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Athletes</h1>
        <p className="text-muted-foreground mt-1">
          {athletes.length} athletes in the database
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {athletes.map((athlete) => (
          <Link key={athlete.id} href={`/athletes/${athlete.id}`}>
            <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-lg font-bold text-primary">
                      {athlete.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-semibold text-lg">{athlete.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      {athlete.eventFocus}
                    </p>
                    {athlete.weeklyVolume && (
                      <p className="text-xs text-muted-foreground/70 font-mono mt-1">
                        {athlete.weeklyVolume}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t border-border">
                  <div className="text-center">
                    <p className="text-xl font-bold font-mono">
                      {athlete._count.visits}
                    </p>
                    <p className="text-xs text-muted-foreground">Visits</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold font-mono">
                      {athlete._count.quotes}
                    </p>
                    <p className="text-xs text-muted-foreground">Quotes</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold font-mono">
                      {athlete._count.footwearNotes}
                    </p>
                    <p className="text-xs text-muted-foreground">FW Notes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
