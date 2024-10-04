
import StudyResources from "@/components/StudyBuddy/StudyResources";
import StudyTools from "@/components/StudyBuddy/StudyTools";
import { CopilotKitCSSProperties, CopilotPopup, useCopilotChatSuggestions } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { INSTRUCTIONS } from "./instructions";

const page = () => {
  // useCopilotChatSuggestions(
  //   {
  //     instructions: "Suggest the most relevant next actions to given study tools",
  //   }
  // );
  return (
    <>
      <div className="min-h-screen text-white flex flex-col">
        <div className="flex flex-1 p-6 space-x-6">
          <StudyResources />
          <StudyTools />
          <div
            className=""
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
            <CopilotPopup
              instructions={INSTRUCTIONS}
              labels={{
                title: "CopilotMate: StudyBuddy",
                initial:
                  "How can I assist you with your study tools and resources?",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
