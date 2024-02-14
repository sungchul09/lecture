import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Avatar from "@/components/Avatar";
import Footer from "@/components/Footer";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "blog app",
  description: "my blog application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
