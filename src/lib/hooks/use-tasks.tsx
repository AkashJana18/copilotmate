"use client"
import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import { createContext, useContext, useState, ReactNode } from "react";
import { defaultTasks } from "../default-tasks";
import { Task, TaskStatus, TaskPriority } from "../tasks.types"; // Import TaskPriority

let nextId = defaultTasks.length + 1;

type TasksContextType = {
  tasks: Task[];
  addTask: (title: string, priority?: TaskPriority) => void; // Add priority parameter
  setTaskStatus: (id: number, status: TaskStatus) => void;
  setTaskPriority: (id: number, priority: TaskPriority) => void; // New function for setting priority
  deleteTask: (id: number) => void;
};

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);

  useCopilotReadable({
    description: "The state of the todo list",
    value: tasks,
  });

  useCopilotAction({
    name: "addTask",
    description: "Adds a task to the todo list",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "The title of the task",
        required: true,
      },
      {
        name: "priority", // Add priority parameter
        type: "string",
        description: "The priority of the task",
        enum: Object.values(TaskPriority), // Ensure it uses enum values
        required: false, // Optional parameter
      },
    ],
    handler: async ({ title, priority }) => {
      addTask(title, priority || TaskPriority.medium); // Default priority to medium if not provided
      return "Task added successfully";
    },
    render: "Processing..."
  });

  useCopilotAction({
    name: "deleteTask",
    description: "Deletes a task from the todo list",
    parameters: [
      {
        name: "id",
        type: "number",
        description: "The id of the task to delete",
        required: true,
      },
    ],
    handler: async ({ id }) => {
      deleteTask(id);
      return "Task deleted successfully";
    },
    render: "Processing..."
  });

  useCopilotAction({
    name: "setTaskStatus",
    description: "Sets the status of a task",
    parameters: [
      {
        name: "id",
        type: "number",
        description: "The id of the task",
        required: true,
      },
      {
        name: "status",
        type: "string",
        description: "The status of the task",
        enum: Object.values(TaskStatus),
        required: true,
      },
    ],
    handler: async ({ id, status }) => {
      setTaskStatus(id, status);
      return "Set status successful";
    },
    render: "Processing..."
  });

  // New Action to Update Task Priority
  useCopilotAction({
    name: "setTaskPriority",
    description: "Sets the priority of a task",
    parameters: [
      {
        name: "id",
        type: "number",
        description: "The id of the task",
        required: true,
      },
      {
        name: "priority",
        type: "string",
        description: "The priority of the task",
        enum: Object.values(TaskPriority), // Use the TaskPriority enum
        required: true,
      },
    ],
    handler: async ({ id, priority }) => {
      setTaskPriority(id, priority);
      return "Task priority updated successfully";
    },
    render: "Processing..."
  });

  const addTask = (title: string, priority: TaskPriority = TaskPriority.medium) => {
    setTasks([...tasks, { id: nextId++, title, status: TaskStatus.todo, priority }]);
  };

  const setTaskStatus = (id: number, status: TaskStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  const setTaskPriority = (id: number, priority: TaskPriority) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, priority } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, setTaskStatus, setTaskPriority, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};
