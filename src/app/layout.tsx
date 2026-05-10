import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Nuha Keyboard",
  description: "A playful keyboard game that shows and speaks each key press for a child."
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
