import React from 'react'

const About = () => {
  return (
    <>
     <div name="About" className="max-w-screen flex-col md:flex-row-2xl container mx-auto px-4 md:px-20 my-20">
        <h1 className='text-3xl font-bold mb-5'>About</h1>
        <p>
            Hey, I'm Kaif! I'm a Frontend Developer who loves building websites that look good and work smoothly. I started learning web development out of curiosity and now it's become my passion. I enjoy turning ideas into real working projects using React, JavaScript, and Tailwind CSS. Outside of coding, I love going to the gym, watching cricket, and trying out new tech stuff.
        </p>
        <br />
        <div>
            <h1 className='text-green-600 font-semibold text-xl'>Education</h1>
            <span>B.Sc. in Information Technology — Shri Mahadev Baburao Chaugule Mahavidyalaya, Bhiwandi (University of Mumbai), 2023 – 2026</span>
            <br />
            <br />
            <h1 className='text-green-600 font-semibold text-xl'>Skills & Expertise</h1>
            <span>
                HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Redux, Git & GitHub — I'm comfortable building responsive UIs, working with components, and managing state in React apps.
            </span>
            <br />
            <br />
            <h1 className='text-green-600 font-semibold text-xl'>Certifications</h1>
            <span>
                Frontend Development – React (Offline Course), 2024 
                <br />
                IBM SkillsBuild – Focus Your Direction with Workplace Research, August 2025 
            </span>
            <br />
            <br />
            <h1 className='text-green-600 font-semibold text-xl'>Mission Statement</h1>
            <p>
                I just want to keep building cool things, keep learning, and one day work on projects that actually make a difference. Right now I'm focused on getting better every day — one project at a time.
            </p>
        </div>
     </div> 
    </>
  )
}

export default About