import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const sentimentConfig: Record<string, { label: string; className: string }> = {
  "very-positive": {
    label: "Very Positive",
    className: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/25",
  },
  positive: {
    label: "Positive",
    className: "bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/25",
  },
  neutral: {
    label: "Neutral",
    className: "bg-zinc-500/15 text-zinc-700 dark:text-zinc-400 border-zinc-500/25",
  },
  negative: {
    label: "Negative",
    className: "bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/25",
  },
};

export function SentimentBadge({ sentiment }: { sentiment: string }) {
  const config = sentimentConfig[sentiment] ?? sentimentConfig.neutral;
  return (
    <Badge variant="outline" className={cn("text-xs font-medium", config.className)}>
      {config.label}
    </Badge>
  );
}
