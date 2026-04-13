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
  metadataBase: new URL("https://events.thehalfbrick.com"),
  title: "Startup Connect | Free Master Class on Building Self-Sustainable Businesses",
  description:
    "Join the closed-door masterclass on May 3rd, 2026. Learn how to build self-sustainable businesses. Limited seats available.",
  keywords:
    "startup, business, entrepreneur, masterclass, sustainable business",
  openGraph: {
    title: "Startup is the New Trap (Free MasterClass)",
    description: "Learn how to build a Self-Sustainable Business, Brick by Brick. on May 3rd, 2026.",
    url: "/startup-connect/startup-is-the-new-trap-free-masterclass",
    siteName: "Startup Connect",
    images: [
      {
        // NOTE: bg-cover.png is currently ~3.3MB. 
        // For best results on WhatsApp/LinkedIn, this image SHOULD BE UNDER 300KB.
        url: "https://events.thehalfbrick.com/images/bg-cover.png", 
        width: 1200,
        height: 630,
        alt: "Startup Connect Masterclass Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup is the New Trap (Free MasterClass)",
    description: "Learn how to build a Self-Sustainable Business, Brick by Brick. on May 3rd, 2026.",
    images: ["https://events.thehalfbrick.com/images/bg-cover.png"],
    creator: "@TheHalfBrick",
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
