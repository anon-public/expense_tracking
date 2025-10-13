import type { Metadata } from "next";
import "./globals.css";
import Providers from "./provider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Expense Tracking",
  description: "Expense Tracking",
};
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
       <Providers>{children}</Providers> 
      </body>
    </html>
  );
}
