export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
};

export enum TaskStatus {
  todo = "todo",
  completed = "completed",
}
