import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { FloatingDockDemo } from "@/components/FloatingDock";
import Footer from "@/components/Footer";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import Header from "@/components/Header";

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
        <CopilotKit runtimeUrl="/api/copilotkit">
          <Header />
          {children}
          <FloatingDockDemo />
          <Footer />
          <CopilotPopup />
        </CopilotKit>
      </body>
    </html>
  );
}
