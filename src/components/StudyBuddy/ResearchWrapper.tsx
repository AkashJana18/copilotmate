import { HomeView } from "./HomeView";
import { ResultsView } from "./ResultsView";
import { AnimatePresence } from "framer-motion";
import { useResearchContext } from "@/lib/research-provider";

export function ResearchWrapper() {
  const { researchQuery, setResearchInput } = useResearchContext();

  return (
    <>
      <div className="flex flex-col items-center justify-center relative z-10">
        <div className="flex-1">
          {researchQuery ? (
            <AnimatePresence
              key="results"
              onExitComplete={() => {
                setResearchInput("");
              }}
              mode="wait"
            >
              <ResultsView key="results" />
            </AnimatePresence>
          ) : (
            <AnimatePresence key="home" mode="wait">
              <HomeView key="home" />
            </AnimatePresence>
          )}
        </div>
      </div>
    </>
  );
}
