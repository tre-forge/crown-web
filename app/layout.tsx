import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Crown Contracting | Atlanta Roofing & Restoration',
  description:
    'Crown Contracting provides insurance claim representation, roofing, storm restoration, and home services across Metro Atlanta.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
