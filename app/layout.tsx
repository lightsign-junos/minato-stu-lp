import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "講師募集 | みなと個別指導塾",
  description:
    "みなと個別指導塾では、生徒一人ひとりに寄り添える熱意ある講師を募集しています。未経験・大学生歓迎。週1コマから可能。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJP.variable}`}>{children}</body>
    </html>
  );
}
