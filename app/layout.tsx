import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans =Plus_Jakarta_Sans ({
  variable: "--font-sans",
  subsets: ["latin"],
  weight:["200","400","600","800"]
});

export const metadata: Metadata = {
  title: "HealthCare",
  description: "A health care management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen bg-dark-300 font-sans antialiased", fontSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
