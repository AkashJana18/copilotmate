import React from 'react';

const StudyTools: React.FC = () => {
  return (
    <div className="flex-1 p-6 backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Study Tools</h2>
      <div className="space-y-6">
        <div className="glass-card p-4 text-center">
          <h3 className="text-lg font-semibold mb-2">Pomodoro Timer</h3>
          <button className="glow-btn">Start Session</button>
        </div>
        <div className="glass-card p-4 text-center">
          <h3 className="text-lg font-semibold mb-2">Flashcards</h3>
          <button className="glow-btn">Start Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default StudyTools;
