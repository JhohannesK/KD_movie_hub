import React, { useState, useEffect } from 'react'
import axios from 'axios'
import requests from './Requests'

const Banner = () => {
      const [movie, setMovie] = useState([])

      useEffect(() => {
            async function fetchBannerData() {
                  const request = await axios.get(requests.getTrending)
                  setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
                  return request
            }
            fetchBannerData()
      }, [])

      return (
            <div
                  style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path})`,
                  }}
                  className='bg-[#75E6] h-72 relative'>
                  <div className='absolute w-full h-full  bg-gradient-to-r from-[#189AB4] to-[#75E6DA]  opacity-50'>

                  </div>
            </div>
      )
}

export default Banner;