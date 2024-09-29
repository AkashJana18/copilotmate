import React from "react";
import { CopilotChat, CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { CopilotKit } from "@copilotkit/react-core";

const page = () => {
  return (
    <CopilotKit runtimeUrl="/api/copilotkit">
      <div className="p-10 m-10">
        <CopilotChat
        labels={{
          title: "Your Assistant",
          initial: "Fuck you",
        }}
      />
        <CopilotSidebar>
          <p>helper playing with copilot</p>
        </CopilotSidebar>
      </div>
    </CopilotKit>
  );
};

export default page;
