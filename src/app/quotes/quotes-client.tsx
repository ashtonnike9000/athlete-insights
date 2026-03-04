"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TopicTag } from "@/components/topic-tag";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

type QuoteData = {
  id: string;
  text: string;
  topic: string;
  context: string;
  athleteId: string;
  athleteName: string;
};

export function QuotesClient({
  quotes,
  athletes,
  topics,
}: {
  quotes: QuoteData[];
  athletes: { id: string; name: string }[];
  topics: string[];
}) {
  const [query, setQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedAthlete, setSelectedAthlete] = useState("");

  const filtered = useMemo(() => {
    return quotes.filter((q) => {
      if (selectedTopic && q.topic !== selectedTopic) return false;
      if (selectedAthlete && q.athleteId !== selectedAthlete) return false;
      if (
        query &&
        !q.text.toLowerCase().includes(query.toLowerCase()) &&
        !q.context.toLowerCase().includes(query.toLowerCase())
      )
        return false;
      return true;
    });
  }, [quotes, query, selectedTopic, selectedAthlete]);

  const hasFilters = query || selectedTopic || selectedAthlete;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Quotes</h1>
        <p className="text-muted-foreground mt-1">
          {filtered.length} quotes{hasFilters ? " (filtered)" : " total"}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Input
          placeholder="Search quotes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-9 flex-1 min-w-[200px] max-w-sm"
        />

        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          className="flex h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-[160px]"
        >
          <option value="">All topics</option>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t.replace("-", " ")}
            </option>
          ))}
        </select>

        <select
          value={selectedAthlete}
          onChange={(e) => setSelectedAthlete(e.target.value)}
          className="flex h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-[180px]"
        >
          <option value="">All athletes</option>
          {athletes.map((a) => (
            <option key={a.id} value={a.id}>
              {a.name}
            </option>
          ))}
        </select>

        {hasFilters && (
          <Button
            variant="ghost"
            size="sm"
            className="h-9 text-muted-foreground"
            onClick={() => {
              setQuery("");
              setSelectedTopic("");
              setSelectedAthlete("");
            }}
          >
            <X className="h-3 w-3 mr-1" />
            Clear
          </Button>
        )}
      </div>

      <div className="grid gap-3">
        {filtered.map((quote) => (
          <Card key={quote.id}>
            <CardContent className="p-5">
              <p className="text-base italic leading-relaxed">
                &ldquo;{quote.text}&rdquo;
              </p>
              <div className="flex items-center flex-wrap gap-3 mt-3">
                <Link
                  href={`/athletes/${quote.athleteId}`}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {quote.athleteName}
                </Link>
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
        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No quotes match your filters.
          </div>
        )}
      </div>
    </div>
  );
}
