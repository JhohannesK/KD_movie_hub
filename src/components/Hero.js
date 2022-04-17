import React from 'react'
import Banner from './Banner'

const Hero = () => {
      return (
            <div>
                  <Banner className='relative' />
                  <div className='absolute top-20 w-full space-y-7 px-10 py-5 bg-opacity-10'>
                        <div className='flex flex-col items-center justify-center gap-y-5'>
                              <p className='text-6xl font-mainfont font-bold tracking-wider text-white'>Welcome</p>
                              <p className='text-xl sm:text-2xl font-mainfont font-semibold whitespace-nowrap text-gray-100'>Here you get all the movies you want.</p>
                        </div>
                        <div>
                              <input type="text" className='relative w-full h-10 rounded-full focus:outline-none border-0 pl-5' placeholder='Search for movies, TV shows and ...' />
                              <button className='absolute right-10 rounded-full h-10 px-5 bg-gradient-to-r from-[#75E6DA] to-[#1eb1a2] text-white font-bold font-mainfont'>Search</button>
                        </div>
                  </div>
            </div>
      )
}

export default Hero