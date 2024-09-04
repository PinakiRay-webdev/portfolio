import React from 'react';
import { avatar } from '../utils';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { socialMedia } from '../constants';
const Avatar = () => {

    useGSAP(()=>{
        let tl = gsap.timeline();
        gsap.to("#hero-text" , {opacity:1, delay:2})
        tl.from("#avatarImg" , {opacity:0,  delay:2 , top:72})
        tl.from("#tag" , {opacity:0})
        tl.from("#social" , {opacity:0 , duration:1 , stagger:0.3 , y:-20})

    })
    
  return (
    <div className='h-screen relative flex justify-center items-center overflow-y-hidden'>
    
    <div>
    <h1 id='hero-text' className='text-white text-[25rem] opacity-0'>
      PORTFOLIO
    </h1>
    <div className='flex gap-6 absolute bottom-10' >
      {socialMedia.map((Element , id)=>(
        <img id='social' className='w-8 cursor-pointer'  key={id} src={Element} alt="" />
      ))}
    </div>
    </div>
    <img id='avatarImg' className=' h-screen absolute left-[35%] z-10' src={avatar} alt="" />
    <p id='tag' className='absolute text-white right-0 bottom-14'>Freelancer <br /> Developer & Creator</p>
  </div>
  )
}

export default Avatar
