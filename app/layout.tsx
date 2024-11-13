import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Email SaaS",
  description: "SaaS project to automate custom email send outs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
