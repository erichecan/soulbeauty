import type { Metadata } from "next";
import { Dancing_Script, Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "800"],
});

export const metadata: Metadata = {
  title: "Soul Beauty Healing Center",
  description:
    "Personalized care that blends therapeutic treatment and beauty wellness — RMT, acupuncture and facial wellness in Thornhill, Ontario.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${dancingScript.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="bg-white">{children}</body>
    </html>
  );
}
