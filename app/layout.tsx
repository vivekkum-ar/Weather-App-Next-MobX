"use client"
import type { Metadata } from "next";
import { Inter as Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main-nav";
import { Provider } from "mobx-react";
import { mainStore } from "@/components/mst/mainStore";
// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={mainStore}>
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} ${poppins.variable} dark:bg-slate-800 bg-slate-100 max-w-screen-xl`}>
      <Navbar></Navbar>

        {children}
      </body>
    </html>
    </Provider>
  );
}
