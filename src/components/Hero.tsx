import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FlipWords } from "@/components/ui/flip-words";

const Hero = () => {
  const firstWords = [
    "Streamline",
    "Optimize",
    "Elevate",
    "Automate",
    "Facilitate",
    "Boost",
    "Simplify",
    "Revolutionize",
    "Maximize",
    "Personalize",
  ];
  const thirdWords = [
    "Processes",
    "Efficiency",
    "Projects",
    "Routine",
    "Collaboration",
    "Performance",
    "Work",
    "Approach",
    "Potential",
    "Experience",
  ];

  return (
    <BackgroundBeamsWithCollision>
      <div className="h-[40rem] flex flex-col justify-center items-center px-4">
        <div className="text-6xl mx-auto font-bold text-neutral-600 dark:text-neutral-400">
          <FlipWords words={firstWords} />
          Your <FlipWords words={thirdWords} /> <br />
          with{" "}
          <span className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            CopilotMate
          </span>
        </div>
        <button className="p-[3px] relative m-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 rounded-lg" />
          <div className="px-8 py-2 text-xl font-bold bg-background rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Get Started
          </div>
        </button>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;
