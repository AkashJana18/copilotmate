"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";
import { copilotMateFeatures } from "@/data";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { featureTitle } from "@/data";

const Features = () => {
  

  return (
    <div className="p-10 my-10 px-[150px]" id="features">
      <div className="flex justify-center items-center mt-10">
        <TypewriterEffectSmooth words={featureTitle} />
      </div>
      <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
        {copilotMateFeatures.map((feature, index) => (
          <Button
            key={index}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000 + 10000)}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={feature.thumbnail}
                alt={feature.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {feature.title}
                </h1>
                <p className="text-start text-slate-300 mt-3 font-semibold">
                  {feature.description}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Features;
