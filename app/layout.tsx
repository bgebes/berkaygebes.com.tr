import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Berkay Gebeş | Academic Portfolio',
  description: 'Engineering Academic Portfolio & Research Lab Hub',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
