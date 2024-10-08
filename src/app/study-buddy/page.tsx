"use client";

import { ResearchWrapper } from "@/components/StudyBuddy/ResearchWrapper";
import { ResearchProvider } from "@/lib/research-provider";
import { CopilotKit } from "@copilotkit/react-core";

export default function Home() {
  return (
    <CopilotKit runtimeUrl="api/copilotkit" agent="studybuddy_agent">
      <main className="flex flex-col items-center justify-between">
        <ResearchProvider>
          <ResearchWrapper />
        </ResearchProvider>
      </main>
    </CopilotKit>
  );
}
