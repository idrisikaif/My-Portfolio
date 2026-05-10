import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import Photo from '../assets/WhatsApp Image 2026-05-07 at 4.42.07 PM.jpeg'

const Home = () => {
  return (
    <>
        <div name='Home' className="max-w-screen-2xl flex-col md:flex-row-2xl container mx-auto px-4 md:px-20 my-20">
            <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 mt-12 md:my-24 space-y-2 order-2 md:order-1'>
                <span className='text-xl'>Welcome to my portfolio</span>
      <div className='flex items-center gap-x-2 min-h-[48px]'>
  <h1 className='text-xl lg:text-4xl whitespace-nowrap'>Hello, I'm</h1>
  <ReactTyped
    className='text-red-400 font-bold text-xl lg:text-4xl whitespace-nowrap'
    strings={["Frontend Dev", "React Dev", "UI Builder"]}
    typeSpeed={40}
    backSpeed={50}
    loop={true}
  />
</div>
                <br />
                <p className='text-sm md:text-md text-justify'>
                  Passionate Frontend Developer skilled in building responsive and user-friendly web applications using React.js, JavaScript, and modern CSS frameworks. Fresher eager to turn ideas into clean, functional interfaces.
                </p>
                <br />

                {/* Download Resume Button */}
                <div className='flex justify-center md:justify-start'>
  <a href="/resume.pdf" download="Idrisi_Kaif_Resume.pdf">
    <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-lg duration-300'>
      Download Resume
    </button>
  </a>
</div>

                <br /><br />

                {/* Social media icons */}
                <div className='flex flex-col items-center md:flex-row space-y-6 md:space-y-0 justify-between'>
                    <div className='space-y-1'>
                    <h1 className='font-bold'>Available on</h1>
                    <ul className='flex space-x-5'>
                        <li>
                        <a href="https://www.instagram.com/muhammad.kaif86" target='_blank' rel='noreferrer'>
                        <FaInstagramSquare className='text-2xl cursor-pointer' />
                        </a>
                        </li>
                        <li>
                        <a href="https://t.me/idrisikaif86" target='_blank' rel='noreferrer'>
                        <FaTelegram className='text-2xl cursor-pointer' />
                        </a>
                        </li>
                        <li>
                        <a href="https://www.linkedin.com/in/i-kaif-7bb9963a3" target='_blank' rel='noreferrer'>
                        <FaLinkedin className='text-2xl cursor-pointer' />
                        </a>
                        </li>
                    </ul>
                 </div>
                 <div className='space-y-2'>
                    <h1 className='font-bold text-center'>Currently working on</h1>
                    <div className='flex space-x-5 justify-center'>
                        <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[1px]' />
                        <RiTailwindCssFill className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[1px]' />
                        <FaJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[1px]' />
                    </div>
                 </div>
                </div>
                </div>

            <div className='w-full md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 flex justify-center'>
            <img src={Photo} className='rounded-full w-[280px] h-[280px] md:w-[450px] md:h-[450px] object-cover' alt="" />
            </div>
            </div>
        </div>
        <hr /> 
    </>
  )
}

export default Home