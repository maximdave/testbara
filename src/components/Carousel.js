import React, {useEffect, useState} from 'react'
import Hero from './Hero'

const Carousel = () => {
  const [width, setWidth] = useState()
  useEffect(() => {
    window.addEventListener('resize', () => {
      const myWidth = window.innerWidth;
      setWidth(myWidth)
     
      
    })
  }, [window])

  
  return  <Hero />
}

export default Carousel
