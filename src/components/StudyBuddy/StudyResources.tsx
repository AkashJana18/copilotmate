import React from 'react';

const StudyResources: React.FC = () => {
  return (
    <div className="flex-1 p-6 backdrop-blur-lg bg-white/10 border border-white/30 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Study Resources</h2>
      <ul className="space-y-4">
        <li className="glass-card">Math Notes</li>
        <li className="glass-card">Science Links</li>
        <li className="glass-card">Uploaded Assignments</li>
      </ul>
    </div>
  );
};

export default StudyResources;
