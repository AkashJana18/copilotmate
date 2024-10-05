import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { FloatingDockDemo } from "@/components/Home/FloatingDock";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import { CopilotKit } from "@copilotkit/react-core";

export const metadata: Metadata = {
  title: "CopilotMate",
  description:
    "Your AI-powered companion, seamlessly automating tasks and enhancing productivity with intuitive actions and smart assistance.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <CopilotKit runtimeUrl="/api/copilotkit" agent="search_agent">
          <Header />
          {children}
          <FloatingDockDemo />
          <Footer />
          </CopilotKit>
      </body>
    </html>
  );
}
