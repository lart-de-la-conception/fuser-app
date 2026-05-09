import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
