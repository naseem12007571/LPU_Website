import React from 'react'
import './About.css'
import about_img from '..//../assets/about.png'
import play_icon from '..//../assets/play-icon.png'
const About = ({ setplayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={() => {
          setplayState(true)
        }} />
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Transforming Education Transforming India</h2>
        <p>Lovely Professional University (LPU) is a private university located in Phagwara, Punjab, India. The university was established in 2005 by Lovely International Trust, under The Lovely Professional University Act, 2005 (Punjab Act 25 of 2005) and started operation in 2006. The University is affiliated with the University Grants Commission, the National Council for Teacher Education and the Council of Architecture and approved by the Pharmacy Council of India. It is also a member of the Association of Indian Universities (AIU). The law programs are recognized by the Bar Council of India. Times Higher Education World University Rankings 2022 ranked LPU in 1001–1200th. In India, the National Institutional Ranking Framework (NIRF) ranked Lovely Professional University 81st overall, and 62nd among universities.</p>

      </div>
    </div>
  )
}

export default About
