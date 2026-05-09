import React from 'react'
import Navbar from './componenets/Navbar'
import Home from './componenets/Home'
import About from './componenets/About'
import Portfolio from './componenets/Portfolio'
import Experiance from './componenets/Experiance'
import Footer from './componenets/Footer'
import Contact from './componenets/Contact'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
    {/* bg-slate-50 ek dam halka greyish tint hai jo aankhon ko sukoon dega */}
    <div className='bg-slate-50 min-h-screen text-slate-900'>
      <Navbar />
      <div className='pt-20'> {/* Navbar fixed hai isliye thoda padding top */}
        <Home />
        <About />
        <Portfolio />
        <Experiance />
        <Contact />
        <Footer />
      </div>
    </div>
    <Toaster />
    </>
  )
}

export default App