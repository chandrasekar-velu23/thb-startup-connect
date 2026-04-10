import type { Metadata } from "next";
import { Poppins, Montserrat, Urbanist } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const univia = Urbanist({
  variable: "--font-univia-pro",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Startup Connect | Master Class on Building Sustainable Businesses",
  description:
    "Join the closed-door masterclass on May 3rd, 2026. Learn how to build self-sustainable businesses. Limited seats available.",
  keywords:
    "startup, business, entrepreneur, masterclass, sustainable business",
  openGraph: {
    title: "Startup Connect - Master Class",
    description:
      "Learn to build sustainable businesses without chasing hype. May 3rd, 2026.",
    url: "",
    images: [
      {
        url: "./images/hero-bg.jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },
  themeColor: "#C92515",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${poppins.variable} ${montserrat.variable} ${univia.variable} antialiased bg-white text-black`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
