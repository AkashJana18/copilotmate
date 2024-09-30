import { TasksList } from "@/components/Todo/TasksList";
import { TasksProvider } from "@/lib/hooks/use-tasks";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
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
          <CopilotPopup />
        </CopilotKit>
      </Suspense>
    </>
  );
};

export default Todo;
