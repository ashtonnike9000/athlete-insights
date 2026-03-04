import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Athlete Insights",
  description: "Insights from athlete visits — Nike Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main className="pl-56">
            <div className="max-w-7xl mx-auto p-6 lg:p-8">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
