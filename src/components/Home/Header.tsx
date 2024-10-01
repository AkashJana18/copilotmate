"use client";
import React from "react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { placeholders } from "@/data";
import Link from "next/link";

const Header = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div
      className="m-2 px-2 flex items-center justify-between gap-4"
      id="header"
    >
      <Link
        href="/"
        className="text-4xl font-extrabold relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4"
      >
        CopilotMate
      </Link>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <div className="flex justify-center items-center gap-4">
        <Link className="hover:scale-105" href="#features">Features</Link>
        <Link className="hover:scale-105" href="#faq">FAQ</Link>
        <Link className="hover:scale-105" href="#feedback">Feedback</Link>
      </div>

      <img
        alt="user img"
        src="/dp.jpg"
        className="inline w-10 h-10 rounded-full ring-2 ring-slate-200"
      />
    </div>
  );
};

export default Header;
