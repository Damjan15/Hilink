import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hilink | Travel Camping",
  description: "Hilink is a dynamic travel website offering personalized travel experiences and comprehensive destination guides",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
