import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function ThemesPage() {
  const themes = await prisma.theme.findMany({
    orderBy: { createdAt: "asc" },
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Themes & Synthesis
        </h1>
        <p className="text-muted-foreground mt-1">
          Cross-athlete insights and emerging patterns
        </p>
      </div>

      <div className="grid gap-6">
        {themes.map((theme, index) => (
          <Card key={theme.id}>
            <CardHeader className="pb-3">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold font-mono text-primary">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <CardTitle className="text-lg">{theme.title}</CardTitle>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {theme.athleteNames.split(", ").map((name) => (
                      <Badge
                        key={name}
                        variant="secondary"
                        className="text-xs"
                      >
                        {name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pl-16">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {theme.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
