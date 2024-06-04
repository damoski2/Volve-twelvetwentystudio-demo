import React from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, ScrollTrigger } from "../../../lib/gsap";
import { useGSAP } from "@gsap/react";
import ScrollContainer from "react-indiana-drag-scroll";
import insight_woman from "../../../assets/images/insight-lady.jpeg";
import Slider from "react-slick";
gsap.registerPlugin(ScrollTrigger);

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

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
      className="pt-[136px] pb-[236px] bg-[#f4ede7] relative -top-[30px] rounded-t-[26px] min-h-[125vh] h-full w-full"
      id="home-insight"
    >
      <div className="sm:px-[78px] px-[20px]">
        <div className=" relative slidersection">
          <div className="carouseltextcnt absolute top-0">
            <div className="carouseltextslider flex gap-[70px] items-start">
              <div className="slidetext1 flex gap-[70px] items-center">
                <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap relative">
                  SCALE-UP
                </h1>
                <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap relative">
                  BIG
                </h1>
                <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap relative">
                  IDEAS
                </h1>
                <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap relative">
                  TO
                </h1>
                <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap relative">
                  CREATE
                </h1>
                <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap relative">
                  IMPACT
                </h1>
                <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap relative">
                  TOGETHER
                </h1>
              </div>
              <div className="slidetext2 flex gap-[70px] items-center">
                <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap relative">
                  SCALE-UP
                </h1>
                <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap relative">
                  BIG
                </h1>
                <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap relative">
                  IDEAS
                </h1>
                <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap relative">
                  TO
                </h1>
                <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap relative">
                  CREATE
                </h1>
                <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap relative">
                  IMPACT
                </h1>
                <h1 className="slide-text text-brand-orange text-[227px] whitespace-nowrap relative">
                  TOGETHER
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="relative top-[340px] w-full">
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
        </div>
      </div>
      <ScrollContainer className="relative top-[340px]">
        <div className="w-full flex items-center gap-[35px] mt-[40px]">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="cursor-pointer relative">
              <div className="relative h-[315px] min-w-[440px] flex">
                <div className="relative w-full h-full rounded-[20px] overflow-hidden" >
                  <Image
                    src={insight_woman}
                    alt=""
                    className="absolute w-full h-full object-cover top-0 left-0 transform scale-100 transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                  <div className="self-end p-4 absolute bottom-3">
                    <span className="text-brand-orange text-[15px] px-4 py-[7px] rounded-[4em] bg-[#ffffffe6] text-xs font-bold text-center">
                      INSIGHTS
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-[17px] mt-4 text-brand-orange relative">
                Product in de spotlight: Acceptance & Risk
              </p>
            </div>
          ))}
        </div>
      </ScrollContainer>
    </div>
  );
};

export default HomeInsight;
