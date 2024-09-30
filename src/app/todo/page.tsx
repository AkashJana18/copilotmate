import { TasksList } from "@/components/Todo/TasksList";
import { TasksProvider } from "@/lib/hooks/use-tasks";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotKitCSSProperties, CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { Suspense } from "react";

const Todo = () => {
  return (
    <>
      <Suspense>
        <CopilotKit runtimeUrl="/api/copilotkit">
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
          }>
            <CopilotPopup />
          </div>
        </CopilotKit>
      </Suspense>
    </>
  );
};

export default Todo;
