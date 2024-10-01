"use client";
import React from "react";
import { faq } from "@/data";
import { BackgroundGradient } from "../ui/background-gradient";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { faqTitle } from "@/data";

const FAQ = () => {
  
  return (
    <section className="bg-transparent text-white p-8 my-10" id="faq">
      <div className="flex justify-center items-center mb-10">
        <TypewriterEffectSmooth words={faqTitle} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faq.map((item) => (
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full" key={item.id}>
 
              <h3 className="text-xl font-semibold">
                {item.id}
                {". "}
                {item.question}
              </h3>
              <p className="mt-2 text-gray-300">{item.answer}</p>
  
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
