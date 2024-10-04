import { TasksList } from "@/components/Todo/TasksList";
import { TasksProvider } from "@/lib/hooks/use-tasks";
import { CopilotKitCSSProperties, CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { Suspense } from "react";

const Todo = () => {
  return (
    <>
      <Suspense>
        <TasksProvider>
          <TasksList />
        </TasksProvider>
        <div
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
            instructions="You are a helpful assistant to manage to-do list. Provide concise and accurate answers to task-related questions. Akash Jana is my creator"
            labels={{
              title: "CopilotMate: To-do Assistant",
              initial: "How can I help you with your to-do list?",
            }}
          />
        </div>
      </Suspense>
    </>
  );
};

export default Todo;
