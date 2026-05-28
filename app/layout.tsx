import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAT 2026 Planner",
  description: "Excel-style CAT 2026 daywise planner"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
