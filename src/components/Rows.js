import React, { useState, useEffect } from 'react'
import axios from 'axios'

const base_url = 'https://image.tmdb.org/t/p/original/'

const Rows = ({ title, fetchUrl }) => {
      const [movies, setMovies] = useState([])
      useEffect(() => {
            async function fetchData() {
                  const request = await axios.get(fetchUrl)
                  setMovies(request.data.results)
                  return request
            }
            fetchData()
      }, [fetchUrl])


      return (
            <div className='space-y-3 p-5 '>
                  <h2 className=' font-mainfont font-semibold pl-5'>{title}</h2>
                  <div className='flex gap-x-4 scrollbar-hide overflow-x-scroll transition-all duration-500 px-5'>
                        {React.Children.toArray(movies.map(movie => (
                              <img src={`${base_url}${movie?.poster_path || movie?.backdrop_path}`} alt={movie.name} className="h-72 rounded-xl object-cover" />
                        )))}
                  </div>


            </div >

      )
}

export default Rows