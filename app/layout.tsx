import type { Metadata } from "next";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'

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
      <ClerkProvider>
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}
