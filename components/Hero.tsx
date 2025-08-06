"use client"
import React from 'react'
import TextPressure from './ui/TextPressure/TextPressure'
import { geistMono, inter, poppins } from '@/utils/fonts'
import ShinyText from './ui/ShinyText/ShinyText'
import KeyboardButton from './KeyboardButton'
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconMail } from '@tabler/icons-react'


export default function Hero() {
  return (
    <div className={`${geistMono.className} lg:h-[70vh] flex justify-center items-center max-w-7xl mx-auto text-center`}>
        {/* large screen */}
        <div className='hidden lg:block '>
            <div className='text-7xl' style={{position: 'relative'}}>
            <TextPressure
                text="Hello! I am Apurva Thakur"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={12}
                />
            </div>
            <div className='mt-8 text-left text-7xl'>
              AI/ML Engineer
            </div>
            <div className='text-sm leading-snug text-justify  mt-8 max-w-xl'>
            <ShinyText text="AI/ML Engineer with experience in designing GenAI-powered assistants, building ML pipelines, and deploying scalable AI applications. Proficient in LangChain Azure ML, MLOps, and NLP/vision-based solutions and performance tuning. Passionate about solving real-world problems through intelligent automation and data science." disabled={false} speed={6} className='custom-class' />            
            </div>
            <div className='flex mt-16 perspective-distant gap-x-2'>
              <KeyboardButton Icon={IconBrandLinkedin} href={process.env.NEXT_PUBLIC_LINKEDIN || ''}/>
              <KeyboardButton Icon={IconMail} href={process.env.NEXT_PUBLIC_EMAIL || ''}/>
              <KeyboardButton Icon={IconBrandInstagram} href={process.env.NEXT_PUBLIC_INSTAGRAM || ''}/>
              <KeyboardButton Icon={IconBrandX} href={process.env.NEXT_PUBLIC_X || ''}/>
            </div>
        </div>

        {/* Small screen */}
        <div className='mt-24 lg:hidden'>
            <div className={`text-5xl font-bold`} style={{position: 'relative'}}>
                Hello! I am <br /> 
                Apurva Thakur
            </div>
            <div className=' mt-4 text-center text-sm'>
                AI/ML Engineer
            </div>
            <div className='text-sm leading-snug text-justify mx-auto mt-4 max-w-xl'>
            <ShinyText text="AI/ML Engineer with experience in designing GenAI-powered assistants, building ML pipelines, and deploying scalable AI applications. Proficient in LangChain Azure ML, MLOps, and NLP/vision-based solutions and performance tuning. Passionate about solving real-world problems through intelligent automation and data science." disabled={false} speed={6} className='custom-class ' />            
            </div>
            <div className='flex mt-16 perspective-distant gap-x-2 justify-center'>
              <KeyboardButton Icon={IconBrandLinkedin} href=""/>
              <KeyboardButton Icon={IconMail} href=""/>
              <KeyboardButton Icon={IconBrandInstagram} href=""/>
              <KeyboardButton Icon={IconBrandX} href=""/>
            </div>
        </div>
    </div>
  )
}
