"use client";
import React, { useState } from "react";

const initialFeedbacks = [
  {
    id: 1,
    text: "CopilotMate has significantly improved my productivity!",
    author: "John Doe",
  },
  {
    id: 2,
    text: "The features are intuitive and easy to use. Highly recommended!",
    author: "Jane Smith",
  },
  {
    id: 3,
    text: "A great tool for managing tasks efficiently.",
    author: "Alice Johnson",
  },
  {
    id: 4,
    text: "Love the AI capabilities in CopilotMate. It helps me stay organized!",
    author: "Bob Brown",
  },
];

const FeedbackSection = () => {
  const [feedbacks, setFeedbacks] = useState(initialFeedbacks);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text && author) {
      const newFeedback = {
        id: feedbacks.length + 1, // Simple id assignment
        text,
        author,
      };
      setFeedbacks([...feedbacks, newFeedback]);
      setAuthor("");
      setText("");
    }
  };

  return (
    <section className="bg-transparent text-white p-8 my-10">
      <h2 className="text-3xl font-bold mb-6 text-center">User Feedback</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="bg-white bg-opacity-10 backdrop-blur-md border border-gray-600 rounded-lg p-4 transition-transform transform hover:scale-105 hover:border-white"
          >
            <p className="text-lg italic">"{feedback.text}"</p>
            <p className="mt-2 text-gray-300 text-right">- {feedback.author}</p>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg border border-gray-600"
      >
        <h3 className="text-xl font-semibold mb-4">Leave Your Feedback</h3>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="author">
            Name
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="w-full p-2 rounded border border-gray-600 bg-transparent text-white"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="feedback">
            Feedback
          </label>
          <textarea
            id="feedback"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            className="w-full p-2 rounded border border-gray-600 bg-transparent text-white"
            rows={4}
            placeholder="Your feedback"
          />
        </div>
        <button type="submit" className="p-[2px] relative m-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-lg" />
          <div className="px-8 py-2 bg-neutral-800 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Submit
          </div>
        </button>
      </form>
    </section>
  );
};

export default FeedbackSection;
