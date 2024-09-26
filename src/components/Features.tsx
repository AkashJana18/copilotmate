"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";

const Features = () => {
  const copilotMateFeatures = [
    {
      title: "Expenses Tracker",
      description: "Easily monitor and manage your expenses with real-time tracking and detailed reports.",
      thumbnail: "/accounting.png"

    },
    {
      title: "Calendars",
      description: "Create, manage, and sync calendars for effortless scheduling and time management.",
      thumbnail: "/product-release.png"
    },
    {
      title: "To-Do List",
      description: "Organize tasks, set priorities, and get reminders with CopilotMate's to-do list feature.",
      thumbnail: "/event-list.png"
    },
    {
      title: "Study Assistant",
      description: "Use tools like flashcards, notes, and study reminders to stay on track academically.",
      thumbnail: "/reading.png"
    },
    {
      title: "Interactive Resume",
      description: "Tailor your resume with AI suggestions, making it job-ready and customized for each role.",
      thumbnail: "/cv.png"
    },
    {
      title: "AI ChatBot",
      description: "Get real-time assistance through a smart AI chatbot that helps with tasks, queries, and more.",
      thumbnail: "/chat-app.png"
    },
    {
      title: "Goals Tracker",
      description: "Set goals and track your progress, staying motivated in fitness, work, or personal life.",
      thumbnail: "/leadership.png"
    },
    {
      title: "Customizable Workflows",
      description: "Create workflows that suit your day-to-day needs, tailored to your lifestyle or profession.",
      thumbnail: "/workflow.png"
    }
  ];
  

  return (
    <div className="p-10" id="features">
      <div className="text-4xl mx-auto font-bold text-neutral-600 dark:text-neutral-200">
        Unlock Productivity with{" "}
        <span className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
          CopilotMate's
        </span>{" "}
        Features
      </div>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
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
                <p className="text-start text-white-100 mt-3 font-semibold">
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
