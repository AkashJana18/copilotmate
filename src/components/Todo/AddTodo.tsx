import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTasks } from "@/lib/hooks/use-tasks";

export function AddTodo() {
  const [title, setTitle] = useState("");
  const { addTask } = useTasks();

  const handleAddTask = () => {
    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex items-center mb-4">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Add a new task..."
          className="flex-1 mr-2 bg-muted text-white-300 rounded-md px-4 py-2 bg-slate-800"
        />
        <Button
          type="submit"
          disabled={!title}
          onClick={handleAddTask}
          className="p-[3px] relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-300 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Add
          </div>
        </Button>
      </div>
    </form>
  );
}
