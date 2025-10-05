import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Expense Tracking",
  description: "Expense Tracking",
};
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
       <main>{children}</main> 
      </body>
    </html>
  );
}
