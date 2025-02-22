import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import PulsingBackground from "./components/PulsingBackground";

export const metadata: Metadata = {
  title: "MedCura",
  description: "Transforming Healthcare with Every Connection.",
};

const monaSans = localFont({
  src: "./fonts/Mona-Sans.woff2",
  variable: "--font-mona-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${monaSans.className}`}>
        <PulsingBackground />
        <main className="min-h-screen z-[2] relative">{children}</main>
      </body>
    </html>
  );
}
