import type { Metadata } from "next";
import { Zen_Old_Mincho } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const fontDefautl = Zen_Old_Mincho({
  weight: ["400", "700"],
  variable: "--font-default",
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
    <html
      lang="ja"
      suppressHydrationWarning
    >
      <body className={`${fontDefautl.variable} antialiased overflow-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
