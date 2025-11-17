import type { Metadata } from "next";
import { Zen_Old_Mincho } from "next/font/google";
import "./globals.css";

const fontDefautl = Zen_Old_Mincho({
  weight: ["400", "700"],
  variable: "--font-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gojūon",
  description: "Gojūon diagram | 五十音図",
  keywords: ["Gojūon", "Gojūon diagram", "五十音"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontDefautl.variable} antialiased`}>{children}</body>
    </html>
  );
}
