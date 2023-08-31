import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Leetcode() {
  return (
    <section id="leetcode">
      <div className="container px-0 py-10 mx-auto">
        <div className="text-center mb-10">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Problem Solving
          </h1>
          <p className="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto">
          I have honed my problem-solving skills over the past few months by regularly practicing on Leetcode using a variety of data structures and algorithms. I am confident in my ability to analyze and efficiently solve complex problems. My consistent practice on Leetcode demonstrates my dedication to continuously learning and improving. I am excited to apply my problem-solving skills to real-world challenges as a software developer. I am ready to bring my skills to your team and tackle any problem that comes my way.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <embed type="text/html" src="https://leetcode.com/msk_07/" height="500" width ="1200" ></embed>
        </div>
      </div>
    </section>
  );
}