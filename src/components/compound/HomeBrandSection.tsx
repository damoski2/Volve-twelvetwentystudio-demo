import React from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "../../../lib/gsap";
import { useGSAP } from "@gsap/react";
import logo1 from "../../../assets/images/logo-1.svg";
import logo2 from "../../../assets/images/logo-2.svg";
import logo3 from "../../../assets/images/logo-3.svg";
import logo4 from "../../../assets/images/logo-4.svg";
import logo5 from "../../../assets/images/logo-5.svg";
import logo6 from "../../../assets/images/logo-6.svg";

gsap.registerPlugin(ScrollTrigger);

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const HomeBrandSection = () => {
 

  useGSAP(() => {
    let xPercent = 0;
    let direction = -1;
    let slide1 = document.querySelector(".slide1");
    let slide2 = document.querySelector(".slide2");
    let carouselslider = document.querySelector(".carouselslider");
  
    const animate = () => {
      //console.log(xPercent, direction)
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(slide1, { xPercent: xPercent });
      gsap.set(slide2, { xPercent: xPercent });
      requestAnimationFrame(animate);
      xPercent += 0.08 * direction;
    };
    
    gsap.to(carouselslider, {
      scrollTrigger: {
        trigger: document.getElementsByTagName("html")[0],
        scrub: 0.25,
        start: 0,
        onUpdate: (e) => {
          //console.log('direction scroll',e.direction)
          return (direction = e.direction * -1);
        },
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="sm:px-[78px] px-[20px] pt-[136px] pb-[236px] min-h-[105vh] bg-[#F4EDE7] rounded-t-[26px] relative -top-[20px]" id='home-brand-section' >
      <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-[40px] justify-between">
        <h3 className="text-brand-orange font-Founders-Grotesk-Medium font-semibold text-2xl lg:w-[30%] md:w-[40%] xs:w-[80%] w-full">
          PORTFOLIO LOREM IPSUM DOLOR SIT MET NEO VESTIBULUM ANTE
        </h3>
        <p className="text-[17px] font-Founders-Grotesk-Regular font-normal text-brand-orange lg:w-[40%] md:w-[55%] w-full">
          We invest in early-stage companies, bringing a broad network of
          different markets and specialists to scale-up big ideas to create
          impact together. We provide new entrepreneurs with our expertise and
          know-how, and we help them to further develop their businesses.
        </p>
      </div>

      <div className="mt-[190px] relative slidersection">
        <div className="carouselcnt absolute">
          <div className="carouselslider flex gap-[20px] items-center">
            <div className="slide1 flex gap-5 items-center">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="w-[292.8px] h-[292.8px] rounded-[10px] flex items-center justify-center slide-card"
                >
                  <Image src={logo} alt="" className="w-[40%] h-[40%]" />
                </div>
              ))}
            </div>
            <div className="slide2 flex gap-5 items-center">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="w-[292.8px] h-[292.8px] rounded-[10px] flex items-center justify-center slide-card"
                >
                  <Image src={logo} alt="" className="w-[40%] h-[40%]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBrandSection;
