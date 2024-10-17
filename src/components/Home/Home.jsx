import React from 'react'
import './Home.css'
import hellologo from '../../assets/Hello.png'




const Home = () => {
  return (
    <div className='image-text'>
    <h1 className='element1'>Hi There,</h1> <h1 className='element2'>Iam Pratik Patil</h1>
    <h1 className='element3'>Iam a Web Developer</h1>
    <button className='home-button'><a href="https://contactwithpratik.vercel.app/">Need Website</a></button>
    <img className='helloimg' src={hellologo} alt="hellologo" /> 




  
    </div> 



  )
  
}


export default Home
