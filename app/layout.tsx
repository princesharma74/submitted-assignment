import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INDmoney: Track, Plan & Invest in Stocks, SIP in Mutual Funds to Grow Money",
  description: "INDmoney is the super money app which enables you to manage all your money at one place. Get started your investment journey with INDmoney to earn more and save more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
