import React from 'react'

const Hero = () => {
      return (
            <div className='space-y-7 px-10 py-5  bg-gradient-to-r from-[#75E6DA] to-[#1ca093] h-64'>
                  <div className='flex flex-col items-center justify-start gap-y-5'>
                        <p className='text-6xl font-mainfont font-bold'>Welcome</p>
                        <p className='text-xl sm:text-2xl font-mainfont font-semibold whitespace-nowrap text-slate-700'>Here you get all the movies you want</p>
                  </div>
                  <div>
                        <input type="text" className='relative w-full h-10 rounded-full focus:outline-none border-0 pl-5' placeholder='Search for movies, TV shows and your favourite people here' />
                        <button className='absolute right-10 rounded-full h-10 px-5 bg-gradient-to-r from-[#75E6DA] to-[#1eb1a2]'>Search</button>
                  </div>
            </div>
      )
}

export default Hero