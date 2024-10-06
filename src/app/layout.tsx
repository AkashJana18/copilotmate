import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { FloatingDockDemo } from "@/components/Home/FloatingDock";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import { CopilotKit } from "@copilotkit/react-core";
import { Spotlight } from "@/components/ui/Spotlight";

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
        <div className="overflow-hidden">
          <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"fill="#8b5cf6"/>
          <Spotlight className="top-28 left-80 h-[80vh] " fill="#a855f7" />
          <Spotlight className="-top-20 left-1/2 h-screen" fill="purple" /> 
        </div>

        <CopilotKit runtimeUrl="/api/copilotkit">
          <Header />
          {children}
          <FloatingDockDemo />
          <Footer />
        </CopilotKit>
      </body>
    </html>
  );
}
