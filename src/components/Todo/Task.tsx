import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTasks } from "@/lib/hooks/use-tasks";
import { motion } from "framer-motion";
import { TaskStatus, TaskPriority, type Task } from "@/lib/tasks.types";

export function Task({
  task: { id, title, status, priority },
}: {
  task: Task;
}) {
  const { setTaskStatus, deleteTask, setTaskPriority } = useTasks(); // Assuming setTaskPriority is available

  // Priority options
  const priorityOptions = [
    { label: "Low", value: TaskPriority.low },
    { label: "Medium", value: TaskPriority.medium },
    { label: "High", value: TaskPriority.high },
  ];

  return (
    <motion.div
      key={`${id}_${status}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex items-center gap-4 p-2 rounded-md"
    >
      <Checkbox
        id={`task_${id}`}
        onClick={() =>
          setTaskStatus(
            id,
            status === TaskStatus.completed ? TaskStatus.todo : TaskStatus.completed
          )
        }
        checked={status === TaskStatus.completed}
        className="ml-4"
      />
      <div className="text-sm text-neutral-500 font-medium">TASK-{id}</div>
      <Label
        htmlFor={`task_${id}`}
        className={cn(
          "flex-1 text-sm text-muted-foreground",
          status === TaskStatus.completed && "line-through"
        )}
      >
        {title}
      </Label>

      {/* Priority Dropdown */}
      <select
        value={priority}
        onChange={(e) => setTaskPriority(id, e.target.value as TaskPriority)}
        className={cn(
          "text-sm p-1 rounded-md bg-black",
          priority === TaskPriority.low && "text-green-500",
          priority === TaskPriority.medium && "text-yellow-500",
          priority === TaskPriority.high && "text-red-500"
        )}
      >
        {priorityOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <Button variant="ghost" size="sm" onClick={() => deleteTask(id)}>
        <div className="text-red-500 hover:text-white hover:bg-red-500 m-1 p-1 rounded-lg">
          <TrashIcon className="w-5 h-5" />
        </div>
        <span className="sr-only">Delete</span>
      </Button>
    </motion.div>
  );
}
