import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <hr />
      <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
          <div className='flex flex-col items-center justify-between'>
            <div className='flex space-x-4'>
              <a href="https://www.instagram.com/muhammad.kaif86" target='_blank' rel='noreferrer'>
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/i-kaif-7bb9963a3" target='_blank' rel='noreferrer'>
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/idrisikaif" target='_blank' rel='noreferrer'>
                <FaGithub size={24} />
              </a>
            </div>
            <div className='mt-8 border-t border-b-gray-700 pt-8 flex flex-col items-center'>
              <p className='text-sm'>
                &copy; {new Date().getFullYear()} Idrisi Kaif. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer