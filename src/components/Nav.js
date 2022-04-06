import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom'


const links = [
      {
            name: 'Movies',
            to: '/'
      },
      {
            name: 'TV Show',
            to: '/'
      },
      {
            name: 'People',
            to: '/'
      },
      {
            name: 'More',
            to: '/'
      }
]
function Nav() {

      let [open, setOpen] = useState(false)

      return (
            <div className='inline-block sm:flex items-center justify-between gap-x-5 bg-[#05445E] p-3 text-white w-full'>
                  <div className='flex items-center justify-between'>
                        <p className='uppercase text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#189AB4] to-[#75E6DA] cursor-pointer whitespace-nowrap'>KD MOVIE HUB</p>
                        <HiMenuAlt3 className='text-2xl cursor-pointer sm:hidden' onClick={() => setOpen(!open)} />
                  </div>
                  <nav className={`block sm:flex items-center justify-center gap-x-5  font-mono w-full z-[-1]  sm:z-auto left-0  absolute sm:static bg-[#05445E] py-4 sm:py-0 opacity-100 sm:opacity-100 transition ease-in duration-500 ${open ? 'top-[40px]' : 'top-[-150px]'}`}>

                        {React.Children.toArray(links.map((links) => {
                              return (
                                    <Link to={links.to} className='pt-5 sm:pt-0 block'>{links.name}</Link>
                              )
                        }))}

                  </nav>

                  <div className='flex items-center justify-center whitespace-nowrap gap-x-5'>
                        <Link to='#'>Sign Up</Link>
                        <Link to='#'> Sign In</Link>
                  </div>

            </div>
      )
}

export default Nav