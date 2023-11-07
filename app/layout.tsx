// @react-server-components use client
import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/app/ui/dashboard/Navbar";
import Footer from "@/app/ui/dashboard/Footer";
import { crimsonPro } from "./ui/fonts";
import "react-toastify/dist/ReactToastify.css"

export const metadata: Metadata = {
  title: "Quinn Woodcrafting",
  description: "Custom Wood Craft",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${crimsonPro.className} antialiased`}>
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
