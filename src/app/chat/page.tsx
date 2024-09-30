"use client";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import { CopilotChat, CopilotKitCSSProperties } from "@copilotkit/react-ui";

const Page = () => {
  return (
    <CopilotKit runtimeUrl="/api/copilotkit">
      <h1 className="text-center text-4xl font-extrabold">
        <span className="purple-pink-gradient py-4">CopilotMate</span>
      </h1>
      <div
        className="w-full px-20 h-auto my-10"
        style={
          {
            "--copilot-kit-primary-color": "#222222",
            "--copilot-kit-background-color": "#555555",
            "--copilot-kit-response-button-background-color": "#444444",
            "--copilot-kit-response-button-color": "#fff",
            "--copilot-kit-separator-color": "#666666",
            "--copilot-kit-muted-color": "#fff",
          } as CopilotKitCSSProperties
        }
      >
        <CopilotChat
          instructions="When users engage with CopilotMate, analyze their requests to identify the specific feature they’re interested in, whether it’s tracking expenses, scheduling events, or managing their to-do list. Provide clear, concise responses tailored to the user's query. For example, if a user mentions they want to log an expense, guide them through the process by asking for the amount and category. If they need assistance with scheduling, prompt them for the event details and offer to set reminders. Always ensure your responses are accurate, informative, and encourage further interaction, making the user experience smooth and efficient"
          labels={{
            title: "CopilotMate",
            initial:
              "Hello! 👋 I'm your CopilotMate AI Assistant, here to help you stay organized and on track. You can create tasks, set reminders, and manage your to-do list with ease. Let’s get started! What would you like to accomplish today?",
          }}
          className="rounded-full"
        />
      </div>
    </CopilotKit>
  );
};

export default Page;
