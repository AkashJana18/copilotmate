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
      <div className="h-[40rem] flex justify-center items-center px-4">
        <div className="text-6xl mx-auto font-bold text-neutral-600 dark:text-neutral-400">
          <FlipWords words={firstWords} />Your <FlipWords words={thirdWords} /> <br />
          with <span className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">CopilotMate</span> 
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;
