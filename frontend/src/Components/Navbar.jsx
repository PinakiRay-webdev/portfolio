import React from "react";
import { navbar } from "../constants";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const Navbar = () => {

  useGSAP(()=>{
    let tl = gsap.timeline();
    tl.from("#logo" , {opacity:0 , y:-40 , duration: 1 , delay:0.5})
    tl.from("#nav-items" , {opacity:0 , y:-40 , duration : 1 , stagger:0.1})
  })

  return (
    <div className="flex absolute z-20 top-0 py-3 items-center justify-between w-[84vw]">
        <p id="logo" className="text-white font-light">DESIGN BY <span className="font-bold" >SANKAR</span></p>
      <div className="flex gap-5 items-center">
        {navbar.map((Element, id) => (
          <p id="nav-items" className="text-white capitalize cursor-pointer" key={id}>
            {Element}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
