"use client";
import React, { useState } from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { initialFeedbacks } from "@/data";

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
  const words = [
    {
      text: "User",
    },
    {
      text: "Feedback",
    },
  ];
  return (
    <section className="text-white px-20 my-10 " id="feedback">
      <div className="bg-transparent bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950 ">
        <div className="flex justify-center items-center p-5">
          <TypewriterEffectSmooth words={words} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-gradient-to-tr from-slate-800 via-transparent to-transparent backdrop-blur-lg border border-gray-600 rounded-lg p-4 transition-transform transform hover:scale-105 hover:border-slate-500"
            >
              <p className="text-lg italic">"{feedback.text}"</p>
              <p className="mt-2 text-gray-300 text-right">
                - {feedback.author}
              </p>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-tr from-slate-800 via-transparent to-transparent backdrop-blur-md p-6 rounded-lg border border-gray-600 hover:border-slate-500"
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
              className="w-full p-2 rounded border border-gray-600 bg-transparent text-white hover:border-slate-500"
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
              className="w-full p-2 rounded border border-gray-600 bg-transparent text-white hover:border-slate-500"
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
      </div>
    </section>
  );
};

export default FeedbackSection;
