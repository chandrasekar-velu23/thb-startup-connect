import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import localFont from 'next/font/local';
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

const univia = localFont({
  src: [
    {
      path: '../public/fonts/UniviaPro-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/UniviaPro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/UniviaPro-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-univia',
});

export const metadata: Metadata = {
  title: "Startup Connect | Free Master Class on Building Self-Sustainable Businesses",
  description:
    "Join the closed-door masterclass on May 3rd, 2026. Learn how to build self-sustainable businesses. Limited seats available.",
  keywords:
    "startup, business, entrepreneur, masterclass, sustainable business",
  openGraph: {
    title: "Startup is the New Trap (Free MasterClass)",
    description:
      "Learn how to build a Self-Sustainable Business, Brick by Brick. on May 3rd, 2026.",
    url: "",
    images: [
      {
        url: "./images/hero-cover.png",
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
