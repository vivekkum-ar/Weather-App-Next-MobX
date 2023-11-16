import type { Metadata } from "next";
import { Inter as Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import Navbar from "@/components/main-nav";
// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
})
export const metadata: Metadata = {
  title: "Weather forcast app",
  description: "Infinite scroll - Weather Forecast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} ${poppins.variable} dark:bg-slate-800 bg-slate-100 max-w-screen-xl`}>
      <Navbar></Navbar>

        {children}
      </body>
    </html>
  );
}
