


import React from 'react'
import Navbar from './Navbar'
function Hero() {
  return (
    <div id='hero' className='min-h-screen min-w-screen bg-no-repeat bg-[url(/my_pics_talha.jpg)] bg-left lg:bg-[15%] bg-cover'
     style={{backgroundSize :"15%"}}>
    <Navbar/>
    <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font:bold leading-tight flex justify-center items-center'>
            <div className='pt-10'>
                <p data-aos="zoom-in-up">I'm</p>
                <p data-aos="zoom-in-up">Talha Haroon</p>
                <p data-aos="zoom-in-up">Khan</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
