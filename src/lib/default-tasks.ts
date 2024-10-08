import { Task, TaskStatus } from "./tasks.types";

export const defaultTasks: Task[] = [
  {
    id: 1,
    title: "Vote this project on Quira.",
    status: TaskStatus.todo,
  },
  {
    id: 2,
    title: "Solve 3 DSA questions",
    status: TaskStatus.completed,
  },
  {
    id: 3,
    title: "Study for upcoming test.",
    status: TaskStatus.todo,
  },
  {
    id: 4,
    title: "Prepare youtube video for quira submission.",
    status: TaskStatus.todo,
  },
  {
    id: 5,
    title: "Give a star on this repo.",
    status: TaskStatus.todo,
  },
];