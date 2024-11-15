import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <head>
        <meta name="description" content={metadata.description || ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
            <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
