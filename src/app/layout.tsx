import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CopilotMate",
  description:
    "Your AI-powered companion, seamlessly automating tasks and enhancing productivity with intuitive actions and smart assistance.",
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
