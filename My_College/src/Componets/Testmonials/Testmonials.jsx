import React, { useRef } from 'react'
import './Testmonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testmonials = () => {
  const slider = useRef()
  let tx = 0;                         //  inital value of   tx means translateX       

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25
    }
    // apply tx value in the element 
    slider.current.style.transform = `translateX(${tx}%)`

  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25
    }
    // apply tx value in the element 
    slider.current.style.transform = `translateX(${tx}%)`

  }

  return (
    <div className='testmonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Naseem Ahmad</h3>
                  <span>Lovely Professional University, Jalandhar, India</span>
                </div>
              </div>
              <p> I completed my B.Tech in Computer Science and Engineering from Lovely Professional University, Jalandhar, Punjab. My time at LPU was truly transformative, as it provided me with not only a strong academic foundation but also opportunities to participate in cutting-edge projects and workshops. The university's focus on practical learning and industry-oriented exposure helped me gain valuable skills. The diverse campus culture, world-class infrastructure, and mentorship from experienced faculty further enriched my learning journey. It was an experience that prepared me well for the challenges of the professional world</p>
            </div>
          </li>
          <li>
            <div className="slide  raja">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Mohd Raja</h3>
                  <span>Lovely Professional University, Jalandhar, India</span>
                </div>
              </div>
              <p > I graduated with a B.Tech in Computer Science and Engineering from Lovely Professional University, Jalandhar, Punjab. LPU's commitment to excellence, reflected in its advanced infrastructure and industry-aligned curriculum, inspired me to constantly challenge myself. Participating in cutting-edge projects and hackathons enabled me to refine my technical skills and develop innovative problem-solving approaches, preparing me for a rewarding career in technology</p>
            </div>
          </li>
          <li>
            <div className="slide   raja">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>MD Rashid Siddique</h3>
                  <span>Lovely Professional University, Jalandhar, India</span>
                </div>
              </div>
              <p > I earned my B.Tech in Computer Science and Engineering from Lovely Professional University, Jalandhar, Punjab. LPU’s diverse and inclusive campus culture exposed me to global perspectives, enhancing my interpersonal and problem-solving skills. The curriculum, combined with opportunities to participate in international-level workshops and competitions, helped me stay ahead in understanding global technological advancements. This experience was instrumental in shaping my aspirations and preparing me for a dynamic career.</p>
            </div>
          </li>
          <li>
            <div className="slide raja">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Vishal Jain</h3>
                  <span>Lovely Professional University, Jalandhar, India</span>
                </div>
              </div>
              <p > I graduated with a B.Tech in Computer Science and Engineering from Lovely Professional University, Jalandhar, Punjab. LPU’s research-driven approach to education enabled me to work on innovative projects and explore practical applications of theoretical knowledge. This balance of academics and experimentation deepened my understanding of technology. The university also provided a strong platform to develop analytical and problem-solving abilities, which have become key strengths in my professional journey.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testmonials
