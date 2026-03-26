import React from 'react'
import { assets } from "../assets/assets.js"

export default function Hero() {
    return (
        // // Parent div for new section to consume all the contents....
        <div className='w-full py-40 ' >
            {/* Container section */}
            <div className='container  mx-auto '>
                {/* div element which will contain the images and information */}
                <div className='flex items-center justify-center gap-6 mx-auto w-full  rounded-full bg-amber-400 py-1 mb-10 md:w-[30%]'>
                    {/* Four overlapped images */}
                    <div className='flex items-center -space-x-3'>
                        <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile1Img} alt="" />
                        <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile2Img} alt="" />
                        <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile3Img} alt="" />
                        <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile4Img} alt="" />
                    </div>
                    <span>Trusted by 10k+ Clients</span>
                </div>

                {/* Parargraph content */}
                <h1 className='text-center text-4xl text-black/50 mb-6 sm:text-5xl md:text-6xl lg:text-7xl'>
                    We Grow brands with
                    <br />
                    <span className='text-amber-300'>Proffesional</span> Strategy
                </h1>

                {/* Large Statment paragraph */}
                <p className='text-center font-semibold text-xl mx-w-xl mx-auto px-2 mb-10'>At our agency, we take pride
                     that deliver the projects that have creativity, strategy, and technology. </p>

                {/* Two buttons -> contact us and feedback */}
                <div className='flex items-center justify-center gap-8'>
                    <button className='font-semibold bg-amber-500 px-4 py-3 rounded-full hover:scale-105 
                    duration-150 transition cursor-pointer'>Contact us</button>
                    <button className='font-semibold bg-cyan-950 text-white px-4 py-3 rounded-full
                     hover:scale-105 duration-150 transition cursor-pointer'>Feedback</button>
                </div>

                {/* Hero image */}
                <div className='mt-12 mx-auto mx-w-xl border-2'>
                    <img className='w-full h-full object-center' src={assets.heroImg} alt="" />
                </div>
            </div>
        </div>
)}