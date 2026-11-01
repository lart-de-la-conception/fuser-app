import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dylan Fuser Application 2026",
  description: "A personal case for why I want to work at Fuser as a Junior Product Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-black antialiased">
        {children}
        {/* Vercel Web Analytics, same-origin; only in a build (next dev has no /_vercel route). */}
        {process.env.NODE_ENV === "production" && <Script src="/_vercel/insights/script.js" />}
      </body>
    </html>
  );
}
