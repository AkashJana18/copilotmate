import { NextPage } from "next";
import StudyResources from "@/components/StudyBuddy/StudyResources";
import StudyTools from "@/components/StudyBuddy/StudyTools";
import { Spotlight } from "@/components/ui/Spotlight";

const StudyBuddy: NextPage = () => {
  return (
    <>
      <div className="min-h-screen text-white flex flex-col">
        <div className="flex flex-1 p-6 space-x-6">
          <StudyResources />
          <StudyTools />
        </div>
      </div>
    </>
  );
};

export default StudyBuddy;
