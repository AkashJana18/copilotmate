"use client";
import "@copilotkit/react-ui/styles.css";
import {
  CopilotChat,
  CopilotKitCSSProperties,
  useCopilotChatSuggestions,
} from "@copilotkit/react-ui";
import { INSTRUCTION } from "./instructions";

const Page = () => {
  useCopilotChatSuggestions({
    instructions: `Suggest good chatting topics related to LLM.`,
  });

  return (
    <>
      <div className="px-10">
        <h1 className="text-center text-4xl font-extrabold">
          <span className="purple-pink-gradient py-4">Chatbox</span>
        </h1>
        <div
          className="w-full px-20 h-auto my-10"
          style={
            {
              "--copilot-kit-primary-color": "#222222",
              "--copilot-kit-background-color": "rgba(34, 34, 34, 0.5)", // semi-transparent dark background
              "--copilot-kit-response-button-background-color":
                "rgba(68, 68, 68, 0.7)", // slightly transparent button background
              "--copilot-kit-response-button-color": "#fff",
              "--copilot-kit-separator-color": "rgba(102, 102, 102, 0.8)", // transparent separator
              "--copilot-kit-muted-color": "#fff",
              backdropFilter: "blur(10px)", // applies the blur effect for glass
              WebkitBackdropFilter: "blur(10px)", // support for WebKit browsers
              borderRadius: "10px", // rounded corners for the glass effect
            } as CopilotKitCSSProperties
          }
        >
          <CopilotChat
            instructions={INSTRUCTION}
            labels={{
              title: "CopilotMate",
              initial:
                "Hello! 👋 I'm your CopilotMate AI Assistant, here to help you stay organized and on track. You can create spreadsheets, track expense, and manage your to-do list with ease. Let’s get started! What would you like to accomplish today?",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
