"use client";

import { useState } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <html lang="en" className="h-screen w-screen">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="h-screen w-screen">{children}</body>
    </html>
  );
}
