import React from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'

function Nav() {
      return (
            <div className='inline-block sm:flex items-center justify-evenly gap-x-5 bg-[#05445E] p-3 text-white w-full'>
                  <div className='flex items-center justify-between'>
                        <p className='uppercase text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#189AB4] to-[#75E6DA] cursor-pointer '>KD MOVIE HUB</p>
                        <HiMenuAlt3 className='text-2xl cursor-pointer sm:hidden' />
                  </div>
                  <nav className='flex items-center'>
                        <ul className='block sm:flex items-center justify-center gap-x-5  font-mono w-full z-[-1]  sm:z-auto left-0 top-[-150px] absolute sm:static bg-[#05445E] py-4 sm:py-0 opacity- sm:opacity-100 transition ease-in duration-500'>
                              <li className='pt-5 sm:pt-0'>Movies</li>
                              <li className='pt-5 sm:pt-0'>TV Shows</li>
                              <li className='pt-5 sm:pt-0'>People</li>
                              <li className='pt-5 sm:pt-0'>More</li>
                        </ul>
                  </nav>

            </div>
      )
}

export default Nav