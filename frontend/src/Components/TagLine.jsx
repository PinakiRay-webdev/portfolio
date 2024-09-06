import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { donut } from "../utils";
const TagLine = () => {

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.from("#tagline #line2" , {y:-40 , opacity:0, duration:0.2 , scrollTrigger:{
            trigger:"#tagline #line2",
            start: "top 60%"
        }})
        gsap.to("#donut" , {rotate:600 , duration:1 , scrollTrigger:{
            trigger:"#donut",
            toggleActions:"resume pause pause reverse",
            start:"top 60%",

        }})
        gsap.to("#tagline #tag-box" , {translateX:"-190rem",  scrollTrigger:{
            trigger:"#tagline",
            start:"top 30%",
            end:"top -100%",
            scrub:3,
            pin:true
        }},[])
    })

  return (
    <div id="tagline" className="w-full hit overflow-hidden">
      <div id="tag-box" className="max-w-screen-xl mx-auto flex gap-[10rem] items-center translate-x-[0rem]">
        <div className="flex flex-col gap-1" >
            <p className="bg-pink-400 inline px-4 py-1 rounded-lg text-[5vh] w-fit" >Develop anything</p>
            <p id="line2" className="bg-orange-400 inline px-4 py-1 rounded-lg text-[5vh] w-fit ml-12" >That's right, Anytime</p>
            <div className="w-[30vw] py-8" >
            <p className="text-[#fefae0] text-lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, consequatur. Repellat obcaecati dicta, placeat earum iusto tenetur, illum iure commodi reprehenderit, voluptate numquam a. Quas sapiente dicta porro cumque cupiditate.</p>
            </div>
        </div>
        <div className="flex items-center gap-6" >
        <img id="donut" className="w-[22rem]" src={donut} alt="" />
        <h1 className="text-[#fefae0] text-[15vh] whitespace-nowrap">
          I Bring Interfaces to Life with Stunning Animations and Intuitive
          Design!
        </h1>
        </div>
      </div>
    </div>
  );
};

export default TagLine;
