import React from "react";
import Link from "next/link";
import BrandLogo from "../atom/BrandLogo";
import { gsap, ScrollTrigger } from "../../../lib/gsap";
import { useGSAP } from "@gsap/react";
import Hambuger from "../atom/Hamburger";

const Navbar = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      start: "top+=130% top",
      trigger: ".navCnt",
      onUpdate: (self) => {
        if (self.direction === -1) {
          gsap.to(".navCnt", {
            background: "transparent",
            duration: 0.5,
            delay: 0.1,
            ease: "power4.out",
          });
        } else {
          gsap.to(".navCnt", {
            background: "white",
            duration: 0.5,
            delay: 0.1,
            ease: "power4.out",
          });
        }
      },
     
    });
  }, []);

  return (
    <nav className="w-full h-[100px] flex items-center justify-between px-7 fixed top-0 left-0 navCnt z-[9]">
      <BrandLogo />
      <ul className=" items-center gap-[1.7em] lg:flex hidden">
        <li className="text-uppercase text-base text-[#FF4E00] font-Founders-Grotesk-Medium font-normal hover:text-[#1C153B] duration-75 ease-out cursor-pointer">
          <Link href="">ABOUT US</Link>
        </li>
        <li className="text-uppercase text-base text-[#FF4E00] font-Founders-Grotesk-Medium font-normal hover:text-[#1C153B] duration-75 ease-out cursor-pointer">
          <Link href="">TEAM</Link>
        </li>
        <li className="text-uppercase text-base text-[#FF4E00] font-Founders-Grotesk-Medium font-normal hover:text-[#1C153B] duration-75 ease-out cursor-pointer">
          <Link href="">PORTFOLIO</Link>
        </li>
        <li className="text-uppercase text-base text-[#FF4E00] font-Founders-Grotesk-Medium font-normal hover:text-[#1C153B] duration-75 ease-out cursor-pointer">
          <Link href="">CRITERIA</Link>
        </li>
        <li className="text-uppercase text-base text-[#FF4E00] font-Founders-Grotesk-Medium font-normal hover:text-[#1C153B] duration-75 ease-out cursor-pointer">
          <Link href="">INSIGHTS</Link>
        </li>
        <li className="text-uppercase text-base text-[#FF4E00] font-Founders-Grotesk-Medium font-normal hover:text-[#1C153B] duration-75 ease-out cursor-pointer">
          <Link href="">FORM</Link>
        </li>
      </ul>

      <button className="lg:block hidden font-bold px-8 h-[47px] text-center rounded-[3em] bg-[#ff4e00] text-white hover:bg-white hover:text-[#ff4e00]">
        GET IN TOUCH
      </button>
      <div className="lg:hidden block">
        <Hambuger />
      </div>
    </nav>
  );
};

export default Navbar;
