import { Card, CardContent } from "@/components/ui/card";
import { Terminal } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin</h1>
        <p className="text-muted-foreground mt-1">
          Data management tools
        </p>
      </div>

      <Card>
        <CardContent className="p-8 text-center">
          <Terminal className="h-10 w-10 text-muted-foreground/50 mx-auto mb-4" />
          <h2 className="font-semibold text-lg mb-2">Local Development Only</h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Adding athletes and logging visits requires the full app running locally
            with the database. Run <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">npm run dev</code> to
            access admin forms.
          </p>
          <div className="mt-6 p-4 bg-muted rounded-lg text-left max-w-sm mx-auto">
            <p className="text-xs font-mono text-muted-foreground space-y-1">
              <span className="block">$ git clone &lt;repo&gt;</span>
              <span className="block">$ npm install</span>
              <span className="block">$ npx prisma db push</span>
              <span className="block">$ npx tsx prisma/seed.ts</span>
              <span className="block">$ npm run dev</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
