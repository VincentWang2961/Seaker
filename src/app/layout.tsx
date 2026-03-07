import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Seaker - Job Application Tracker',
  description: 'Track and analyze your job applications with Seaker',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
