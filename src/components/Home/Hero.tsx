import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FlipWords } from "@/components/ui/flip-words";
import { firstWords, thirdWords } from "@/data";
import Link from "next/link";

const Hero = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="h-[40rem] flex flex-col justify-center items-center px-4">
        <div className="leading-tight text-6xl mx-auto font-bold  dark:text-neutral-400 hover:text-white">
          <FlipWords words={firstWords} />
          Your <FlipWords words={thirdWords} /> <br />
          with <span className="purple-pink-gradient py-4">CopilotMate</span>
          <br />
          Your <span className="dark:text-neutral-100"> AI Assitant</span>
        </div>
        <div className="flex justify-center items-center">
          <Link href="https://quira.sh/repo/AkashJana18-copilotmate-863038853">
            <button className="p-[2px] relative m-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#66BB79] to-[#9FFF45] rounded-lg" />
              <div className="px-8 py-2 bg-background rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Vote on Quira
              </div>
            </button>
          </Link>
          <Link href="https://github.com/AkashJana18/copilotmate">
            <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8B5CF6_0%,#EC4899_50%,#8B5CF6_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                ⭐ on Github
              </span>
            </button>
          </Link>
          <Link href="https://www.youtube.com/watch?v=8wQuaflOyJw&t=24s&ab_channel=Akash">
            <button className="bg-neutral-200 dark:bg-neutral-800 dark:text-white text-black flex justify-center group relative overflow-hidden mx-10 px-3 py-2 border-2 border-solid border-red-500 rounded-lg">
              <span className="group-hover:translate-x-40 text-center transition duration-500">
                Watch <span className="text-red-500 font-semibold">Demo</span>
              </span>
              <div className="-translate-x-40 group-hover:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                <img src="/youtube.png" alt="youtube-logo" width={50}/>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;
