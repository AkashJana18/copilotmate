"use client";

import { AddTodo } from "@/components/Todo/AddTodo";
import { Task } from "@/components/Todo/Task";
import { useTasks } from "@/lib/hooks/use-tasks";
import { TaskStatus } from "@/lib/tasks.types";
import { AnimatePresence } from "framer-motion";

export function TasksList() {
  const { tasks } = useTasks();
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col gap-4 min-h-[305px] min-w-full w-auto px-40">
        <h1 className="text-4xl font-bold text-center my-5 flex justify-center items-center gap-5">
          <img src="/event-list.png" alt="" width={60} height={60} />
          <span className="purple-pink-gradient font-bold">To-Do</span> List
        </h1>
        <AddTodo />

        <AnimatePresence>
          {tasks
            .sort((a, b) => {
              if (a.status === b.status) {
                return a.id - b.id;
              }
              return a.status === TaskStatus.todo ? -1 : 1;
            })
            .map((task) => (
              <div className="hover:bg-neutral-800 rounded-lg">
                <Task key={task.id} task={task} />
              </div>
            ))}
        </AnimatePresence>
      </div>
    </main>
  );
}
