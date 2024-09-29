import { TasksList } from "@/components/Todo/TasksList";
import { TasksProvider } from "@/lib/hooks/use-tasks";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { Suspense } from "react";

const Todo = () => {
  return (
    <>
      <CopilotKit runtimeUrl="/api/copilotkit">
        <Suspense>
          <TasksProvider>
            <TasksList />
          </TasksProvider>
          <CopilotPopup />
        </Suspense>
      </CopilotKit>
    </>
  );
};

export default Todo;
