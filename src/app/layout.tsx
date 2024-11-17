// app/layout.tsx

import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { AuthProvider } from '@/context/AuthContext'; // Import your context provider
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "CodeINBlogs",
  description: "Fastest-Growing Web Dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>


                      {children}


      </body>
    </html>
  );
}
