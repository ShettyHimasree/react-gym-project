import React from 'react'
import aboutimage from '../images/about.png'
function About() {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutimage} alt='about' />
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
         et mollis sapien. Maecenas efficitur nunc lorem, nec sagittis augue ornare et. Suspendisse id dolor interdum</p>
         <button>READ MORE</button>
      </div>
    </div>
  )
}

export default About
