"use client";
import React from "react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { placeholders } from "@/data";

const Header = () => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="m-2 px-2 flex items-center justify-between" id="header">
      <span className="text-4xl font-extrabold relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
        CM
      </span>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <img
        alt="user img"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="inline w-10 h-10 rounded-full ring-2 ring-slate-200"
      />
    </div>
  );
};

export default Header;
