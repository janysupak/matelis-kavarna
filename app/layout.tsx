import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MatEliS Kavárna Krnov | Výběrová káva a dezerty",
  description:
    "MatEliS Kavárna v Krnově nabízí výběrovou kávu, domácí dezerty, snídaně a prostor pro rodinné i firemní akce. Příjemná atmosféra v centru Krnova.",
  keywords: [
    "kavárna Krnov",
    "MatEliS",
    "káva Krnov",
    "dezerty Krnov",
    "kavárna",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}