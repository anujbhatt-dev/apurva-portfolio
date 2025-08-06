import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { anton, geistMono, inter, poppins } from "@/utils/fonts";
import { Poppins } from "next/font/google";

export default function Experience() {
  const data = [
    {
      title: "AI/ML Engineer",
      content: (
        <div className="">
          <div className="font-normal md:text-sm text-neutral-200 flex justify-between text-lg mb-12">
               <div className="text-lg uppercase text-neutral-400">
                    64-squares LLP, Pune
               </div>
               <div className="text-sm uppercase text-neutral-400">
                    Sept 2024 - Present
               </div>
          </div>
          <ul className="list-disc pl-8 mb-12 text-neutral-500">
            <li  className="text-[16px] mb-4 leading-[24px]">
            Developed and deployed ML pipelines on Azure with CI/CD integration using Azure DevOps and GitHub Actions for streamlined model lifecycle management.
            </li>
            <li  className="text-[16px] mb-4 leading-[24px]">
            Built multimodal GenAI workflows using GPT models, LangChain, FastAPI, and Deepgram to automate tasks involving both text and audio inputs.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Data Engineering Apprenticeship",
      content: (
        <div>
          <div className="font-normal md:text-sm text-neutral-200 flex justify-between text-lg mb-12">
               <div className="text-lg uppercase text-neutral-400">
                    64-squares LLP, Pune
               </div>
               <div className="text-sm uppercase text-neutral-400">
                    March 2024 - August 2024
               </div>
          </div>
          <ul className="list-disc pl-8 mb-12 text-neutral-500">
            <li  className="text-[16px] mb-4 leading-[24px]">
            Led a 20+ member team in prompt engineering and annotation tasks for over 3 LLM-based projects, ensuring high-quality data pipelines for GenAI systems.
            </li>
            <li  className="text-[16px] mb-4 leading-[24px]">
            Designed and prototyped frontend UI using React.js and Figma for the company’s in-house VZsmart GenAI platform.
            </li>
          </ul>          
        </div>
      ),
    },    
  ];
  return (
    <div className={`${geistMono.className} relative w-full overflow-clip`}>
      <Timeline data={data} />
    </div>
  );
}
