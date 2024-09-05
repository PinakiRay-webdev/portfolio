import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { benefitsArray } from "../constants";

const Benefits = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#box1",
        // scrub: 1,         // Smooth animation scrub
        start: "top 60%"
      },
    });
    
    // Define animations for each box
    tl.to("#box1", {
      left: "50%",
      translateX: "-50%",
      duration: 0.7,
      opacity: 1,
    })
    .to("#box2", {
      left: "0%",
      duration: 0.7,
      opacity: 1,
    })
    .to("#box3", {
      right: "0%",
      duration: 0.7,
      opacity: 1,
    });
  }, []);

  return (
    <div id="benefits" className="bg-black h-fit w-full">
      <div className="max-w-screen-xl mx-auto h-screen relative">
        <header>
          <h1 className="text-white font-bold text-5xl capitalize leading-[4rem]">
            Front end developer at the<span className="block"></span> 
            intersection of design<span className="block"></span> 
            and code.
          </h1>
        </header>
        <main className="py-12 flex justify-center">
          {benefitsArray.map((Element) => (
            <div id={Element.id} className={Element.myUI} key={Element.id}>
              <header className="w-[60%]">
                <h1 className="text-3xl capitalize font-bold">{Element.heading}</h1>
              </header>
              <p className="text-sm py-4 border-b border-zinc-500">{Element.about}</p>
              <ul className="px-4 py-6">
                {Element.lists.map((items, id) => (
                  <li key={id} className="text-sm list-disc text-zinc-800">
                    {items}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Benefits;
