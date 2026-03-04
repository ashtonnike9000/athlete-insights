import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, MessageSquareQuote, Footprints } from "lucide-react";
import Link from "next/link";
import { TopicTag } from "@/components/topic-tag";

export default async function DashboardPage() {
  const [athletes, visits, quotes, footwearNotes, themes, recentQuotes] =
    await Promise.all([
      prisma.athlete.findMany({ orderBy: { name: "asc" } }),
      prisma.visit.findMany({
        include: { athlete: true },
        orderBy: { visitDate: "desc" },
      }),
      prisma.quote.count(),
      prisma.footwearNote.count(),
      prisma.theme.findMany({ orderBy: { createdAt: "asc" } }),
      prisma.quote.findMany({
        include: { athlete: true },
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ]);

  const stats = [
    { label: "Athletes", value: athletes.length, icon: Users },
    { label: "Visits", value: visits.length, icon: Calendar },
    { label: "Quotes", value: quotes, icon: MessageSquareQuote },
    { label: "Footwear Notes", value: footwearNotes, icon: Footprints },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Insights from athlete visits at Nike Campus
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold font-mono mt-1">
                    {stat.value}
                  </p>
                </div>
                <stat.icon className="h-8 w-8 text-muted-foreground/50" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Athletes</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {athletes.map((athlete) => (
                <Link key={athlete.id} href={`/athletes/${athlete.id}`}>
                  <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">
                            {athlete.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-sm">{athlete.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {athlete.eventFocus}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Key Themes</h2>
            <div className="space-y-3">
              {themes.slice(0, 4).map((theme) => (
                <Link key={theme.id} href="/themes">
                  <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                    <CardContent className="p-4">
                      <h3 className="font-medium text-sm">{theme.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {theme.description}
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-2 font-mono">
                        {theme.athleteNames}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Recent Quotes</h2>
          <div className="space-y-3">
            {recentQuotes.map((quote) => (
              <Card key={quote.id}>
                <CardContent className="p-4">
                  <p className="text-sm italic text-muted-foreground leading-relaxed">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs font-medium">
                      {quote.athlete.name}
                    </span>
                    <TopicTag topic={quote.topic} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
