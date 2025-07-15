// Global layout wrapper: applies fonts, nav, footer, and shared components across all pages


import type { Metadata } from "next";
import { Inter, Manrope, League_Gothic } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import BreadCrumb from "@/components/common/breadcrumb";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const leagueGothic = League_Gothic({
  variable: "--font-league-gothic",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "ACM-W",
  description: "ACM-W at UMN aims to celebrate and support communities of women in computing at our school. We provide a wide range of resources and opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} ${leagueGothic.variable} antialiased`}>
        <NavBar />
        {children}
        <BreadCrumb />
        <Footer />
      </body>
    </html>
  );
}
