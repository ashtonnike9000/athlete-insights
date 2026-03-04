import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const topicColors: Record<string, string> = {
  footwear: "bg-orange-500/15 text-orange-700 dark:text-orange-400 border-orange-500/25",
  mental: "bg-purple-500/15 text-purple-700 dark:text-purple-400 border-purple-500/25",
  recovery: "bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/25",
  heat: "bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/25",
  altitude: "bg-sky-500/15 text-sky-700 dark:text-sky-400 border-sky-500/25",
  data: "bg-indigo-500/15 text-indigo-700 dark:text-indigo-400 border-indigo-500/25",
  form: "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/25",
  apparel: "bg-pink-500/15 text-pink-700 dark:text-pink-400 border-pink-500/25",
  nutrition: "bg-lime-500/15 text-lime-700 dark:text-lime-400 border-lime-500/25",
  training: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border-cyan-500/25",
  "product-gap": "bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/25",
  general: "bg-zinc-500/15 text-zinc-700 dark:text-zinc-400 border-zinc-500/25",
};

export function TopicTag({ topic }: { topic: string }) {
  const color = topicColors[topic] ?? topicColors.general;
  return (
    <Badge variant="outline" className={cn("text-xs font-medium capitalize", color)}>
      {topic.replace("-", " ")}
    </Badge>
  );
}
