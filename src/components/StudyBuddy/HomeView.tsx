"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CornerDownLeftIcon } from "lucide-react";
import { useResearchContext } from "@/lib/research-provider";
import { motion } from "framer-motion";
import { useCopilotChat } from "@copilotkit/react-core";
import { Role, TextMessage } from "@copilotkit/runtime-client-gql";
import { useCoAgent } from "@copilotkit/react-core";

const MAX_INPUT_LENGTH = 250;

export function HomeView() {
  const { setResearchQuery, researchInput, setResearchInput } =
    useResearchContext();
  const [isInputFocused, setIsInputFocused] = useState(false);
  const { run: runResearchAgent } = useCoAgent({
    name: "studybuddy_agent",
  });

  const handleResearch = (query: string) => {
    setResearchQuery(query);
    runResearchAgent(query);
  };

  const suggestions = [
    { label: "Effective study techniques for group learning", icon: "📚" },
    { label: "Best apps for collaborative note-taking", icon: "📝" },
    { label: "Top resources for mastering difficult subjects", icon: "🎓" },
    { label: "Creating a study schedule that works for everyone", icon: "📅" },
];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="m-10 w-full flex flex-col  justify-center items-center p-4 lg:p-0"
    >
      <h1 className="text-4xl mb-6 font-semibold" id="study-buddy">
         Your AI study Companion - <span className="purple-pink-gradient hover:font-bold">StudyBuddy</span> 
      </h1>

      <div
        className={cn(
          "w-full bg-transparent border shadow-sm rounded-md transition-all",
          {
            "ring-1 ring-indigo-700": isInputFocused,
          }
        )}
      >
        <Textarea
          placeholder="Ask anything..."
          className="bg-transparent p-4 resize-none focus-visible:ring-0 focus-visible:ring-offset-0 border-0 w-full"
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          value={researchInput}
          onChange={(e) => setResearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleResearch(researchInput);
            }
          }}
          maxLength={MAX_INPUT_LENGTH}
        />
        <div className="text-xs p-4 flex items-center justify-between">
          <div
            className={cn("transition-all duration-300 mt-4 text-slate-500", {
              "opacity-0": !researchInput,
              "opacity-100": researchInput,
            })}
          >
            {researchInput.length} / {MAX_INPUT_LENGTH}
          </div>
          <Button
            size="sm"
            className={cn("rounded-full transition-all duration-300", {
              "opacity-0 pointer-events-none": !researchInput,
              "opacity-100": researchInput,
            })}
            onClick={() => handleResearch(researchInput)}
          >
            Search
            <CornerDownLeftIcon className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 w-full gap-6 my-5 px-20 text-sm">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.label}
            onClick={() => handleResearch(suggestion.label)}
            className="p-2 text-xl bg-transparent rounded-md border-2 border-indigo-300 col-span-2 lg:col-span-1 flex cursor-pointer items-center space-x-2 hover:border-purple-500 hover:border-2 hover:shadow-lg hover:shadow-purple-500 transition-all hover:scale-105 duration-300"

          >
            <span className="text-base">{suggestion.icon}</span>
            <span className="flex-1">{suggestion.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
