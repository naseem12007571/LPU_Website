import React, { useState } from 'react'
import NavBar from './Componets/NavBar/NavBar'
import Hero from './Componets/Hero/Hero'
import Programs from './Componets/Programs/Programs'
import Title from './Componets/Titles/Title'
import About from './Componets/About/About'
import Campus from './Componets/Campus/Campus'
import Testmonials from './Componets/Testmonials/Testmonials'
import Contact from './Componets/Contact/Contact'
import Footer from './Componets/Footer/Footer'
import VideoPlayer from './Componets/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setplayState] = useState(false);


  return (
    <div className='naseem'>
      <NavBar></NavBar>
      <Hero></Hero>


      <div className="container">
        <Title subtitle='Our Programs' title='What We Offers'></Title>
        <Programs></Programs>
        <About setplayState={setplayState}></About>
        <Title subtitle='Gallery' title='Campus Photo'></Title>
        <Campus></Campus>
        <Title subtitle='Testmonials' title='What Student Says'></Title>
        <Testmonials></Testmonials>
        <Title subtitle='Contact Us' title='Get in Touch'></Title>
        <Contact></Contact>
        <Footer></Footer>




      </div>
      <VideoPlayer playState={playState} setplayState={setplayState}  ></VideoPlayer>
    </div>
  )
}

export default App
