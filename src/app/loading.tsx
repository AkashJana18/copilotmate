"use client"
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { loadingStates } from "@/data";

export default function Loading() {
    return(
        <Loader loadingStates={loadingStates} loading={true} duration={500} />
    )
  }