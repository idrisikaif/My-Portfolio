import React from 'react'
import Photo from '../assets/premium_photo-1669077046759-9b3734f7a1f9.avif'
import { IoIosMenu, IoIosCloseCircle } from "react-icons/io";
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const navItem = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Portfolio" },
        { id: 4, text: "Experiance" },
        { id: 5, text: "Contact" }
    ]

    const getDisplayText = (text) => {
        if (text === "Experiance") return "Technologies"
        if (text === "Portfolio") return "Projects"
        return text
    }

  return (
    <>
        
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-lg h-20 fixed top-0 left-0 right-0 bg-slate-900 text-white z-50 border-b border-slate-800">
        <div className='flex justify-between h-20 items-center'>
            <div className='flex space-x-2'>  
                <img src={Photo} className='h-12 w-12 rounded-full border-2 border-green-500' alt="profile" />
                <h1 className='font-semibold cursor-pointer text-xl'>Idrisi <span className='text-green-500 text-2xl'>Kaif</span>
                <p className='text-sm font-normal text-slate-400'>Frontend Developer</p>
                </h1>
            </div>
            <div>
                <ul className='hidden md:flex space-x-8'>
                    {navItem.map(({id, text}) => (
                        <li className='hover:scale-105 duration-200 cursor-pointer hover:text-green-500 transition-all font-medium' key={id}>
                        <Link 
                            to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'
                        >
                        {getDisplayText(text)}
                        </Link>
                        </li>
                    ))}
                </ul>
                <div onClick={() => setMenu(!menu)} className='md:hidden cursor-pointer'>
                    {menu ? <IoIosCloseCircle size={30} className="text-white"/> : <IoIosMenu size={30} className="text-white"/>}
                </div>
            </div>
        </div>
        
        
        {menu && (
            <div className='bg-slate-900 fixed inset-x-0 top-20 border-t border-slate-800'>
                <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-6 text-xl bg-slate-900'>
                    {navItem.map(({id, text}) => (
                        <li className='hover:scale-105 duration-200 cursor-pointer font-semibold hover:text-green-500 transition-all' key={id}>
                        <Link 
                            to={text}
                            onClick={() => setMenu(!menu)}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'
                        >
                        {getDisplayText(text)}
                        </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )}
        </div>
    </>
  )
}

export default Navbar