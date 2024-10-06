import { cn } from "@/lib/utils";
import { Check, CheckIcon, LoaderCircle, SearchCheck } from "lucide-react";

export function Progress({
  steps,
}: {
  steps: {
    description: string;
    status: "complete" | "done";
    updates: string[];
  }[];
}) {
  if (steps.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="border border-slate-500 bg-transparent shadow-md rounded-lg overflow-hidden text-sm py-2">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center justify-normal">
            <div className="w-8">
              <div className="w-5 h-5 bg-indigo-400 flex items-center justify-center rounded-full ml-4">
                {step.status === "complete" ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <LoaderCircle className="w-5 h-5 text-indigo-400 animate-spin" />
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn("h-full w-[1px] bg-transparent ml-[20px]")}
                ></div>
              )}
            </div>
            <div className="flex-1 flex justify-center py-2 pl-2 pr-4">
              <div className="flex-1 flex items-center">{step.description}</div>
              <div className="text-white bg-green-600 p-1 rounded-lg">
                {step.updates?.length > 0 && step.updates[step.updates.length - 1]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
