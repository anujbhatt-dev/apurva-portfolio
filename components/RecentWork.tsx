import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { anton, geistMono } from '@/utils/fonts';
import Project from './Project';
import Naachogao from "@/public/naachogaao-landing.png"
import NG1 from "@/public/ng-1.png"
import NG2 from "@/public/ng-2.png"
import NG3 from "@/public/ng-3.png"
import AN1 from "@/public/an-1.png"
import AN2 from "@/public/an-2.png"
import AN3 from "@/public/an-3.png"
import AN4 from "@/public/an-4.png"
import AN5 from "@/public/an-5.png"
import AN6 from "@/public/an-6.png"
import AN7 from "@/public/an-7.png"
import EE1 from "@/public/ee-1.png"
import EE2 from "@/public/ee-2.png"
import EE3 from "@/public/ee-3.png"
import EE4 from "@/public/ee-4.png"
import EE5 from "@/public/ee-5.png"
import EE6 from "@/public/ee-6.png"
import EE7 from "@/public/ee-7.png"
import EE8 from "@/public/ee-8.png"
import EE9 from "@/public/ee-9.png"
import EE10 from "@/public/ee-10.png"
import EE11 from "@/public/ee-11.png"
import EE12 from "@/public/ee-12.png"
import EE13 from "@/public/ee-13.png"

import NaachogaoMob from "@/public/naachogaao-landing-mobile.png"
import Anaira from "@/public/anaira.png"
import AnairaMob from "@/public/anaira-mobile.png"
import TopicHeading from './TopicHeading';
import SmallHeading from './ui/SmallHeading';

export default function RecentWork() {
  const ref = useRef(null);


  return (
    <motion.div
      ref={ref}
      className={`${geistMono.className}  min-h-screen `}
    >
      <TopicHeading text="Recent work" pad={true}/>
      <SmallHeading text="I DID" cn="text-green-500 pb-10 lg:pb-20"/>
      <div className='text-sm'>
      <Project
          title={"Vizismart – Multimodal GenAI Assistant"}
          description='Vizismart is a real-time, multimodal GenAI assistant that combines computer vision and natural language understanding. It leverages YOLOv8 and GPT-4o to interpret both visual and voice inputs, delivering intelligent, contextual responses for dynamic interactions.'
          features={[
            "YOLOv8-Based Vision: Trained on 1000+ annotated images, achieving 92% accuracy in real-time object detection tasks.",
            "Multimodal Input Handling: Processes voice and visual inputs using Deepgram for speech-to-text and LangChain for GPT-4o routing.",
            "Scalable Deployment: Dockerized with persistent logging and monitoring via AWS S3 for reliable, production-grade performance.",
            "Fast & Context-Aware Responses: Integrated Groq for ultra-low-latency inference, enhancing user experience."
          ]}
          techstack={[
            "YOLOv8",
            "GPT-4o",
            "Deepgram",
            "LangChain",
            "FastAPI",
            "Docker",
            "AWS S3"
          ]}
          id={1}
          images={[/* Add image imports like Vizismart1, Vizismart2, etc. */]}
          links={{
            code: "https://github.com/anujbhatt-dev/vizismart", // Update if different
            site: "https://vizismart.anujbhatt.com/" // Update if different
          }}
        />
        <Project
          title={"Azure MLOps Pipeline"}
          description='A robust, production-grade MLOps pipeline deployed on Azure, featuring automated training, CI/CD, and advanced model governance. Designed for continuous improvement and seamless integration into enterprise workflows.'
          features={[
            "Automated Model Retraining: Integrated Random Forest model (87% F1-score) with CI/CD pipelines using Azure DevOps.",
            "Dataset Versioning & Reproducibility: Ensured traceable experiments and consistent model outputs with Azure ML tracking.",
            "Drift Detection & Rollbacks: Implemented automatic data drift monitoring and rollback mechanisms for reliability.",
            "Enterprise-Ready CI/CD: Enabled continuous integration and delivery with modular pipeline components and version control."
          ]}
          techstack={[
            "Azure ML",
            "Azure DevOps",
            "Python",
            "scikit-learn",
            "Random Forest",
            "CI/CD"
          ]}
          id={2}
          images={[/* Add image imports like AzureML1, AzureML2, etc. */]}
          links={{
            code: "https://github.com/anujbhatt-dev/azure-mlops-pipeline", // Update if different
            site: "https://azuremlops.anujbhatt.com/" // Update if applicable
          }}
        />
        <Project
          title={"Job-Hunting Automation System"}
          description='An end-to-end job search automation tool that scrapes listings, matches jobs to resumes using AI, and auto-applies with personalized cover letters—all while keeping logs and alerts updated in real-time.'
          features={[
            "Automated Job Scraping: Extracted 500+ job listings per week using Apify for continuous opportunity discovery.",
            "AI-Powered Job Matching: Used OpenAI’s resume-job match API to score job relevance and prioritize top listings.",
            "Auto Application via Telegram Bot: Seamless application submission with interactive Telegram-based UI.",
            "Personalized Cover Letters: Dynamically generated emails and cover letters using prompt templates for 100% tailored outreach."
          ]}
          techstack={[
            "Apify",
            "OpenAI API",
            "Telegram Bot",
            "Google Sheets API",
            "Node.js",
            "Prompt Engineering"
          ]}
          id={3}
          images={[/* Add image imports like JobAuto1, JobAuto2, etc. */]}
          links={{
            code: "https://github.com/anujbhatt-dev/job-hunting-automation", // Update if different
            site: "https://jobhunter.anujbhatt.com/" // Update if applicable
          }}
        />
        <Project
          title={"Yumbot – Food Delivery Chatbot"}
          description='Yumbot is an AI-powered chatbot for food delivery services, designed to streamline order placement and reduce customer support workload. It uses natural language understanding to handle diverse user intents with high accuracy.'
          features={[
            "Conversational AI with Dialogflow: Handled 30+ food ordering intents with 95% accuracy using advanced NLU and NER.",
            "Backend Integration: FastAPI server connected with MySQL database for real-time menu, order, and user data handling.",
            "Customer Support Automation: Reduced manual service efforts by 60% through smart query handling and response generation.",
            "Scalable Architecture: Modular backend ready for integration with POS and delivery APIs."
          ]}
          techstack={[
            "Dialogflow",
            "FastAPI",
            "MySQL",
            "Python",
            "Natural Language Processing"
          ]}
          id={4}
          images={[/* Add image imports like Yumbot1, Yumbot2, etc. */]}
          links={{
            code: "https://github.com/anujbhatt-dev/yumbot", // Update if different
            site: "https://yumbot.anujbhatt.com/" // Update if applicable
          }}
        />

      </div>

    </motion.div>
  );
}
