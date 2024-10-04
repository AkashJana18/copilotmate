"use client";
import React, { useState, useEffect } from "react";
import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";

const StudyTools: React.FC = () => {
  // Pomodoro Timer state
  const [time, setTime] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  // Flashcards state
  const flashcards = [
    { question: "What is React?", answer: "A JavaScript library for building user interfaces." },
    { question: "What is JSX?", answer: "JSX stands for JavaScript XML, a syntax extension for React." },
    { question: "What is a component?", answer: "A reusable piece of UI in a React app." },
  ];
  const [currentCard, setCurrentCard] = useState(0);
  const [expandedCard, setExpandedCard] = useState(false); // Toggle for card expansion

  // Pomodoro Timer Logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      alert("Time is up!");
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time]);

  const togglePomodoro = () => {
    setIsActive(!isActive);
  };

  const resetPomodoro = () => {
    setTime(1500); // Reset to 25 minutes
    setIsActive(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Flashcards Logic
  const nextCard = () => {
    setExpandedCard(false); // Reset expansion when moving to the next card
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
  };

  const toggleCardExpansion = () => {
    setExpandedCard(!expandedCard);
  };

  // CopilotKit Readable for Flashcards and Pomodoro Timer
  useCopilotReadable({
    description: "Pomodoro timer",
    value: { time, isActive },
  });

  useCopilotReadable({
    description: "Flashcards",
    value: { flashcards, currentCard, expandedCard },
  });

  // CopilotKit Actions for Pomodoro Timer
  useCopilotAction({
    name: "startPomodoro",
    description: "Start the Pomodoro timer.",
    handler: () => {
      if (!isActive) togglePomodoro();
    },
  });

  useCopilotAction({
    name: "pausePomodoro",
    description: "Pause the Pomodoro timer.",
    handler: () => {
      if (isActive) togglePomodoro();
    },
  });

  useCopilotAction({
    name: "resetPomodoro",
    description: "Reset the Pomodoro timer to 25 minutes.",
    handler: () => resetPomodoro(),
  });

  // CopilotKit Actions for Flashcards
  useCopilotAction({
    name: "nextFlashcard",
    description: "Move to the next flashcard.",
    handler: () => nextCard(),
  });

  return (
    <div className="flex-1 p-6 backdrop-blur-lg bg-gradient-to-tr from-white/15 to-transparent border hover:border-white/50 border-white/30 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Study Tools</h2>

      <div className="space-y-6">
        {/* Pomodoro Timer */}
        <div className="glass-card p-4 text-center">
          <h3 className="text-lg font-semibold mb-2">Pomodoro Timer</h3>
          <div className="text-4xl mb-4">{formatTime(time)}</div>
          <button onClick={togglePomodoro} className="glow-btn mr-4">
            {isActive ? "Pause" : "Start"}
          </button>
          <button onClick={resetPomodoro} className="glow-btn">
            Reset
          </button>
        </div>

        {/* Flashcards */}
        <div className="glass-card p-4 text-center">
          <h3 className="text-lg font-semibold mb-2">Flashcards</h3>
          <div className={`mb-4 transition-all duration-300 ease-in-out transform ${expandedCard ? "scale-105" : "scale-100"} ${expandedCard ? "h-auto" : "h-32"}`}>
            <div
              onClick={toggleCardExpansion}
              className={`cursor-pointer p-4 rounded-lg shadow-md bg-gray-800 text-white transition-all duration-300 ease-in-out transform ${expandedCard ? "h-auto" : "overflow-hidden"}`}
            >
              {expandedCard
                ? flashcards[currentCard].answer // Show answer when expanded
                : flashcards[currentCard].question} {/* Show question when not expanded */}
            </div>
          </div>
          <button onClick={nextCard} className="glow-btn">
            Next Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyTools;
