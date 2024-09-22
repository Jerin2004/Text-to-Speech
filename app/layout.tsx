import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TS - Generate Iamges for Free",

  description:
    "Generate high-quality images from text descriptions using our free AI-powered tool. Transform your ideas into visuals instantly.",
  keywords:
    "text to image, AI image generation, free image generator, AI art, text-based image creation",
  openGraph: {
    title: "TextToImage AI - Free Image Generation from Text",
    description:
      "Transform your text into stunning images with our free AI-powered tool. No cost, no limits - just pure creativity.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TextToImage AI - Free Image Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TextToImage AI - Free Image Generation from Text",
    description:
      "Create amazing images from text descriptions using our free AI tool. Turn your words into art effortlessly.",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
