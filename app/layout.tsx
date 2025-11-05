import type { Metadata } from "next";
import "./globals.css";
import Providers from "./provider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Expent",
  description: "Expense Tracking",
  icons :{
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/favicon.ico"
  },
  viewport : "width=device-width, initial-scale=1.0, maximum-scale=1.0"
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
