import type { Metadata } from "next";
import "./globals.css";
import { impactFont, pinarFont, romanFont } from "@/app/fonts/fontExport";

export const metadata: Metadata = {
  title: "NARGES GHAZAZANI",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${pinarFont.variable} ${romanFont.variable} ${impactFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
