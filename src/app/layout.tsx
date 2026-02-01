import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "about justin",
  description: "High-performance trading terminal portfolio for Justin Cheong.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0A0A0A]">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-[#0A0A0A] font-sans text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
