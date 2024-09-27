import React from "react";
import { CopilotChat } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

const page = () => {
  return (
    <div className="p-10 m-10">
      <CopilotChat
        labels={{
          title: "Your Assistant",
          initial: "Hi! 👋 How can I assist you today?",
        }}
      />
    </div>
  );
};

export default page;
