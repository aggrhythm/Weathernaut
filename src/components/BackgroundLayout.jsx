import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context'
import Clear from '../assets/images/clear.jpg'
import Cloudy from '../assets/images/cloudy.jpg'
import Foggy from '../assets/images/foggy.jpg'
import Rainy from '../assets/images/rainy.jpg'
import Snowy from '../assets/images/snowy.jpg'
import Stormy from '../assets/images/stormy.png'
import Sunny from '../assets/images/sunny.jpg'

const BackgroundLayout = () => {
  const{weather}=useStateContext()
  const[image,setImage]=useState(Clear)

  useEffect(()=>{
    if(weather.conditions){
      let imageString=weather.conditions
      if(imageString.toLowerCase().includes('clear')){
        setImage(Clear)
      }
      else if(imageString.toLowerCase().includes('cloud')){
        setImage(Cloudy)
      }
      else if(imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')){
        setImage(Rainy)
      }
      else if(imageString.toLowerCase().includes('snow')){
        setImage(Snowy)
      }
      if(imageString.toLowerCase().includes('fog')){
        setImage(Foggy)
      }
      if(imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')){
        setImage(Stormy)
      }
    }
  },[weather])
  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]'/>
  )
}

export default BackgroundLayout
