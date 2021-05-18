import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from './context';
const Hero = () => {
  const {closeSubmenu} = useGlobalContext()
 
  return(
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center"> 
     <ariticle className="hero-info">
    <h1>payment infrastructure for the internet</h1>
    <p>Milsions of company all size ........ </p>
    <buttion className="btn">Start now</buttion>
     </ariticle>
     <ariticle className="hero-images">
       <img src={phoneImg} className='phone-img' alt='phone'/>
     </ariticle>
      </div>
      </section>
  ) 
}

export default Hero
