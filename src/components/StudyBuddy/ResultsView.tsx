"use client";

import { useResearchContext } from "@/lib/research-provider";
import { motion } from "framer-motion";
import { BookOpenIcon, LoaderCircleIcon, SparkleIcon } from "lucide-react";
import { SkeletonLoader } from "./SkeletonLoader";
import { useCoAgent } from "@copilotkit/react-core";
import { Progress } from "./Progress";
import { AnswerMarkdown } from "./AnswerMarkdown";
import Link from "next/link";

export function ResultsView() {
  const { researchQuery } = useResearchContext();
  const { state: agentState } = useCoAgent({
    name: "studybuddy_agent",
  });

  console.log("AGENT_STATE", agentState);

  const steps =
    agentState?.steps?.map((step: any) => {
      return {
        description: step.description || "",
        status: step.status || "pending",
        updates: step.updates || [],
      };
    }) || [];

  const isLoading = !agentState?.answer?.markdown;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-[1000px] p-8 lg:p-4 flex flex-col gap-y-8 mt-4 lg:mt-6 text-sm lg:text-base">
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-4xl font-extralight">
            {researchQuery}
          </h1>
        </div>

        <Progress steps={steps} />

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 flex flex-col">
            <h2 className="flex items-center gap-x-2">
              {isLoading ? (
                <LoaderCircleIcon className="animate-spin w-4 h-4 text-pink-400" />
              ) : (
                <SparkleIcon className="w-4 h-4 text-purple-400" />
              )}
              Search Result
            </h2>
            <div className="text-neutral-500">
              {isLoading ? (
                <SkeletonLoader />
              ) : (
                <AnswerMarkdown markdown={agentState?.answer?.markdown} />
              )}
            </div>
          </div>

          {agentState?.answer?.references?.length && (
            <div className="flex col-span-12 lg:col-span-4 flex-col gap-y-4 w-[200px]">
              <h2 className="flex items-center gap-x-2">
                <BookOpenIcon className="w-4 h-4 text-indigo-300" />
                References
              </h2>
              <ul className=" font-light text-sm flex flex-col gap-y-2">
                {agentState?.answer?.references?.map(
                  (ref: any, idx: number) => (
                    <li key={idx}>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {idx + 1}. {ref.title}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <Link href="http://localhost:3000/">
            <button className="relative w-fit inline-flex h-12 overflow-hidden rounded-lg p-[2px]  ">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8B5CF6_0%,#EC4899_50%,#8B5CF6_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-neutral-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Return
              </span>
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
