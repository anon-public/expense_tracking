import type { Metadata } from "next";
import "./global.css";
import Providers from "./provider";

export const metadata: Metadata = {
  title: "Expent",
  description: "Expense Tracking",
  icons :{
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/favicon.ico"
  },
};
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
