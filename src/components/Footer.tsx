import React from "react";
import { socialMedia } from "@/data";

const Footer = () => {

  return (
    <div className="w-full p-10 bg-gradient-to-t from-indigo-500" id="footer">
      <hr className="text-slate-500" />
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex flex-col justify-start">
          <span className="text-3xl font-bold relative text-white py-4">
            CopilotMate
          </span>
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024
          </p>
        </div>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.href} target="_blank">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
