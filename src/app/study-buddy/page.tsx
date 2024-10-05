"use client";

import { ResearchWrapper } from "@/components/StudyBuddy/ResearchWrapper";
import { ResearchProvider } from "@/lib/research-provider";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
        <ResearchProvider>
          <ResearchWrapper />
        </ResearchProvider>
    </main>
  );
}
