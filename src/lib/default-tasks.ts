import { Task, TaskStatus } from "./tasks.types";

export const defaultTasks: Task[] = [
  {
    id: 1,
    title: "Study for upcoming test.",
    status: TaskStatus.todo,
  },
  {
    id: 2,
    title: "Solve DSA questions",
    status: TaskStatus.done,
  },
  {
    id: 3,
    title: "Vote this project on Quira",
    status: TaskStatus.todo,
  },
  {
    id: 4,
    title: "Prepare youtube video for quira submission.",
    status: TaskStatus.todo,
  },
  {
    id: 5,
    title: "Submit repo on quira.",
    status: TaskStatus.todo,
  },
];