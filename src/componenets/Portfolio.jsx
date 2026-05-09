import React from 'react'

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      name: "PhoneWorld",
      description: "A frontend e-commerce app for mobiles, accessories, and chargers. Built with React.js, Bootstrap, and Tailwind CSS with a clean and responsive UI.",
      tech: ["React", "JavaScript", "Bootstrap", "Tailwind CSS"],
      github: "https://github.com/idrisikaif/PhoneWorld",
      live: "https://phone-world-weld.vercel.app"
    },
    {
      id: 2,
      name: "Media Search",
      description: "Search anything and get real-time photos, videos, and GIFs — all powered by live APIs. Clean and fast UI.",
      tech: ["React", "JavaScript", "REST API", "Tailwind CSS"],
      github: "https://github.com/idrisikaif/Media-search",
      live: "https://media-search-beige.vercel.app/"
    },
    {
      id: 3,
      name: "Coming Soon",
      description: "New project in progress... stay tuned!",
      tech: [],
      github: null,
      live: null
    }
  ]

  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
     <h1 className='text-3xl font-bold mb-2'>Projects</h1>
<span className='underline font-semibold'>Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5">
          {projects.map(({ id, name, description, tech, github, live }) => (
            <div key={id} className='border-[2px] border-gray-200 rounded-lg shadow-lg p-5 cursor-pointer hover:scale-105 duration-200 flex flex-col justify-between'>
              <div>
                <h2 className='font-bold text-xl mb-2'>{name}</h2>
                <p className='text-gray-600 text-sm mb-4'>{description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {tech.map((t, i) => (
                    <span key={i} className='bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full'>{t}</span>
                  ))}
                </div>
              </div>
              <div className='flex space-x-3'>
                {github && (
                  <a href={github} target='_blank' rel='noreferrer'>
                    <button className='bg-gray-800 hover:bg-gray-600 text-white font-bold px-4 py-2 rounded text-sm'>GitHub</button>
                  </a>
                )}
                {live && (
                  <a href={live} target='_blank' rel='noreferrer'>
                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded text-sm'>Live Demo</button>
                  </a>
                )}
                {!github && !live && (
                  <button disabled className='bg-gray-300 text-gray-500 font-bold px-4 py-2 rounded text-sm cursor-not-allowed'>In Progress</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio