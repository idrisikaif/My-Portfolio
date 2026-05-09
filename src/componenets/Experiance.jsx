import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.jpg"
import javascript from "../assets/javascript.png"
import react from "../assets/reactjs.png"
import tailwind from "../assets/tailwind.png"

const Experiance = () => {

  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: react, name: "React" },
    { id: 5, logo: tailwind, name: "Tailwind CSS" },
  ]

  return (
    <div name="Experiance" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className='text-3xl font-bold mb-5'>Technologies</h1>
<span>Tools & frameworks I work with</span>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div key={id} className='flex flex-col items-center border-[2px] border-gray-200 rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300'>
              <img src={logo} alt={name} className='w-[150px] rounded-full' />
              <div>{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experiance