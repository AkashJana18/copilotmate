export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
  priority: TaskPriority; // Add priority field
};

export enum TaskStatus {
  todo = "todo",
  completed = "completed",
}

export enum TaskPriority {
  low = "low",
  medium = "medium",
  high = "high",
}

