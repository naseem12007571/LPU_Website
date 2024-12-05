import './Hero.css'
import React from 'react'
import dark_arrow from '../../assets/dark-arrow.png'


const Hero = () => {
  return (
    <div className='hero  container'>
      <div className="hero-text">
        <h1>We Ensure better Education for a better World</h1>
        <p>Lovely Professional University is ranked 16th by NIRF 2024 under the Pharmacy category, 50th by NIRF 2024 under the Engineering category, and 19th by NIRF 2024 under the Law category. Established in 2005, Lovely Professional University (LPU) is a private university located in Jalandhar, Punjab.</p>
        <button className='btn' onClick={() => window.open('https://www.lpu.in/', '_blank')}>Explore More  <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
