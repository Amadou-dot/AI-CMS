import { repositoryName } from "@/prismicio";
import Footer from "@components/Footer";
import Header from "@components/Header";
import { PrismicPreview } from "@prismicio/next";
import clsx from "clsx";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.variable, "bg-[#070815] text-white")}>
        <Header />
        <main>{children}</main>
        <Analytics />
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
