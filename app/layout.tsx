import type { Metadata } from "next";
import "./globals.css";
import { Mona_Sans } from "next/font/google";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MedCura",
  description: "Transforming Healthcare with Every Connection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased overflow-hidden ${monaSans.className}`}>
        {children}
      </body>
    </html>
  );
}
