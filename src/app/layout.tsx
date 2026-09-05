import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "TejasBot — Multi-Purpose Discord Bot",
  description:
    "A feature-rich Discord server management bot built with Python, discord.py 2.x, SQLite, and slash commands. Open source GitHub portfolio project with XP levels, moderation, welcome system, and more.",
  keywords: ["Discord bot", "Python", "discord.py", "TejasBot", "SQLite", "slash commands"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0a1a] text-white antialiased">{children}</body>
    </html>
  );
}
