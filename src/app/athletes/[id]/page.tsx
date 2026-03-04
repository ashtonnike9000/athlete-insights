import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SentimentBadge } from "@/components/sentiment-badge";
import { TopicTag } from "@/components/topic-tag";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const athletes = await prisma.athlete.findMany({ select: { id: true } });
  return athletes.map((a) => ({ id: a.id }));
}

export default async function AthleteProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const athlete = await prisma.athlete.findUnique({
    where: { id },
    include: {
      visits: { orderBy: { visitDate: "desc" } },
      footwearNotes: { orderBy: { shoeName: "asc" } },
      quotes: { orderBy: { topic: "asc" } },
      protocols: { orderBy: { category: "asc" } },
    },
  });

  if (!athlete) return notFound();

  const protocolsByCategory = athlete.protocols.reduce(
    (acc, p) => {
      if (!acc[p.category]) acc[p.category] = [];
      acc[p.category].push(p);
      return acc;
    },
    {} as Record<string, typeof athlete.protocols>
  );

  return (
    <div className="space-y-6">
      <Link
        href="/athletes"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        All Athletes
      </Link>

      <div className="flex items-start gap-5">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
          <span className="text-2xl font-bold text-primary">
            {athlete.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{athlete.name}</h1>
          <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
            {athlete.eventFocus && <span>{athlete.eventFocus}</span>}
            {athlete.shoeSize && (
              <>
                <span className="text-border">·</span>
                <span className="font-mono">{athlete.shoeSize}</span>
              </>
            )}
            {athlete.weeklyVolume && (
              <>
                <span className="text-border">·</span>
                <span className="font-mono">{athlete.weeklyVolume}</span>
              </>
            )}
            {athlete.coach && (
              <>
                <span className="text-border">·</span>
                <span>Coach: {athlete.coach}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <Tabs defaultValue="footwear" className="mt-6">
        <TabsList>
          <TabsTrigger value="footwear">
            Footwear ({athlete.footwearNotes.length})
          </TabsTrigger>
          <TabsTrigger value="quotes">
            Quotes ({athlete.quotes.length})
          </TabsTrigger>
          <TabsTrigger value="protocols">
            Protocols ({athlete.protocols.length})
          </TabsTrigger>
          <TabsTrigger value="visits">
            Visits ({athlete.visits.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="footwear" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[180px]">Shoe</TableHead>
                    <TableHead>Use Case</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead className="w-[120px]">Sentiment</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {athlete.footwearNotes.map((note) => (
                    <TableRow key={note.id}>
                      <TableCell className="font-medium">
                        <Link
                          href={`/products/${encodeURIComponent(note.shoeName)}`}
                          className="hover:text-primary transition-colors"
                        >
                          {note.shoeName}
                        </Link>
                      </TableCell>
                      <TableCell className="text-sm">{note.useCase}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {note.frequency}
                      </TableCell>
                      <TableCell>
                        <SentimentBadge sentiment={note.sentiment} />
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground max-w-xs">
                        <p className="line-clamp-2">{note.notes}</p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quotes" className="mt-4">
          <div className="grid gap-3">
            {athlete.quotes.map((quote) => (
              <Card key={quote.id}>
                <CardContent className="p-4">
                  <p className="text-sm italic leading-relaxed">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <TopicTag topic={quote.topic} />
                    {quote.context && (
                      <p className="text-xs text-muted-foreground">
                        {quote.context}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="protocols" className="mt-4">
          <div className="grid gap-4">
            {Object.entries(protocolsByCategory).map(([category, items]) => (
              <Card key={category}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base capitalize">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {items.map((protocol) => (
                    <p
                      key={protocol.id}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {protocol.description}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="visits" className="mt-4">
          <div className="grid gap-4">
            {athlete.visits.map((visit) => (
              <Card key={visit.id}>
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="font-mono text-xs">
                      {visit.visitDate.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Badge>
                    {visit.location && (
                      <span className="text-sm text-muted-foreground">
                        {visit.location}
                      </span>
                    )}
                    {visit.interviewer && (
                      <span className="text-sm text-muted-foreground">
                        · Interviewer: {visit.interviewer}
                      </span>
                    )}
                  </div>
                  {visit.sessionNotes && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {visit.sessionNotes}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
