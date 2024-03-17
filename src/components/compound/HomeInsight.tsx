import React from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, ScrollTrigger } from "../../../lib/gsap";
import { useGSAP } from "@gsap/react";
import ScrollContainer from "react-indiana-drag-scroll";

gsap.registerPlugin(ScrollTrigger);

const HomeInsight = () => {
  useGSAP(() => {
    let xPercent = 0;
    let direction = -1;
    let slide1 = document.querySelector(".slidetext1");
    let slide2 = document.querySelector(".slidetext2");
    let carouselslider = document.querySelector(".carouseltextslider");

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
      xPercent += 0.035 * direction;
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
    <div
      className="sm:px-[78px] px-[20px] pt-[136px] pb-[236px] bg-[#f4ede7] relative -top-[30px] rounded-t-[26px] min-h-[100vh]"
      id="home-insight"
    >
      <div className=" relative slidersection">
        <div className="carouseltextcnt absolute top-0">
          <div className="carouseltextslider flex gap-[70px] items-start">
            <div className="slidetext1 flex gap-[70px] items-center">
              <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap">
                SCALE-UP
              </h1>
              <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap">
                BIG
              </h1>
              <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap">
                IDEAS
              </h1>
              <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap">
                TO
              </h1>
              <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap">
                CREATE
              </h1>
              <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap">
                IMPACT
              </h1>
              <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap">
                TOGETHER
              </h1>
            </div>
            <div className="slidetext2 flex gap-[70px] items-center">
              <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap">
                SCALE-UP
              </h1>
              <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap">
                BIG
              </h1>
              <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap">
                IDEAS
              </h1>
              <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap">
                TO
              </h1>
              <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap">
                CREATE
              </h1>
              <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap">
                IMPACT
              </h1>
              <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap">
                TOGETHER
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="relative top-[340px]">
        <div className="flex justify-between items-center ">
          <h2 className="text-brand-orange text-[38px] font-Founders-Grotesk-Medium">
            INSIGHTS
          </h2>
          <Link href="#">
            <button className="lg:block hidden font-bold px-8 h-[47px] text-center rounded-[3em] hover:bg-[#ff4e00] hover:text-white bg-white text-[#ff4e00] duration-100">
              ALL INSIGHTS
            </button>
          </Link>
        </div>

        <ScrollContainer className="">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="" key={index}></div>
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
};

export default HomeInsight;
