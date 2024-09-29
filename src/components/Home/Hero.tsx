import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FlipWords } from "@/components/ui/flip-words";
import { firstWords, thirdWords } from "@/data";

const Hero = () => {


  return (
    <BackgroundBeamsWithCollision>
      <div className="h-[40rem] flex flex-col justify-center items-center px-4">
        <div className="leading-tight text-6xl mx-auto font-bold  dark:text-neutral-400 hover:text-white">
          <FlipWords words={firstWords} />
          Your <FlipWords words={thirdWords} /> <br />
          with{" "}
          <span className="purple-pink-gradient py-4">
            CopilotMate
          </span>
          <br />Your Personal{" "}
          <span className="dark:text-neutral-100" > AI Assitant</span>
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
