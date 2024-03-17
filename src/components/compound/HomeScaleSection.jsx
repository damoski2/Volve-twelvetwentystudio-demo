import React from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "../../../lib/gsap";
import { useIsomorphicLayoutEffect } from "../../../hooks";
import { useGSAP } from "@gsap/react";
import SVGLine from "../atom/SVGLine";
import rallax from "rallax.js";
import Lenis from "@studio-freight/lenis";
import female_person_img from "../../../assets/images/female-person.jpeg";

gsap.registerPlugin(ScrollTrigger);

const female_person = [
  {
    name: "MAURITS",
    img: female_person_img,
  },
  {
    name: "JOOST",
    img: female_person_img,
  },
  {
    name: "COULD THIS BE YOU?",
    img: female_person_img,
  },
];

const HomeScaleSection = () => {
  /*  useIsomorphicLayoutEffect(() => {
    const target = document.querySelector(".home-scale-section");
    const parallax = rallax(target, { speed: -2 });
  }, []); */

  const tl = gsap.timeline({ delay: 0 });

  useGSAP(() => {
    const headingAnim = tl
      .fromTo(
        ".home-scale-text",
        { yPercent: 200 },
        {
          yPercent: 0,
          stagger: 0.1,
          duration: 0.9,
          transformOrigin: "left center",
        }
      )
      .fromTo(
        ".home-scale-desc-text",
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          opacity: 1,
          yPercent: 0,
        },
        "<+=0.5"
      );

    ScrollTrigger.create({
      trigger: ".home-scale-text",
      start: "top 90%",
      end: "bottom 20%",
      animation: headingAnim,
    });
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    let revealContainers = document.querySelectorAll(".image_reveal");

    revealContainers.forEach((container, index) => {
      if (index == 2) return;
      let image = container.querySelector(".revealImage");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reverse",
          start: "top top+=20%",
          //markers: true
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1, {
        yPercent: -100,
        ease: "power2.inOut",
        delay: index !== 0 ? 0.4 : 0,
      }).from(
        image,
        1,
        {
          yPercent: 100,
          scale: 1.3,
          ease: "power2.inOut",
        },
        "<"
      );
    });
  }, []);

  return (
    <div
      id="home-scale-section"
      className="rounded-t-[26px] bg-brand-orange py-[136px] sm:px-[78px] px-[20px] home-scale-section relative"
    >
      <div className="absolute z-[2] w-fit h-fit left-0 top-0">
        <SVGLine />
      </div>
      <h1 className="overflow-y-hidden text-center text-white sm:text-[122px] xs:text-[107px] text-[74px] sm:leading-[134px] leading-[130px]">
        <span className="home-scale-text inline-block text-center">
          HERE TO
        </span>
      </h1>
      <h1 className="overflow-y-hidden text-center text-white sm:text-[122px] xs:text-[107px] text-[74px] sm:leading-[134px] leading-[130px] relative sm:-top-[40px] -top-[70px]">
        <span className="home-scale-text inline-block text-center">
          SCALE UP
        </span>
      </h1>
      <p className="home-scale-desc-text text-[20px] text-white text-center font-Founders-Grotesk-Medium font-semibold relative -top-[60px]">
        THE PEOPLE WHO MAKE IT WORK
      </p>

      <div className="flex flex-wrap justify-center gap-[30px]">
        {female_person.map((person, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="container_reveal reveal_container rounded-[26px]">
              <div className="image_reveal reveal_image rounded-[26px]">
                <Image
                  src={person.img}
                  alt={person.name}
                  className="rounded-[26px] revealImage imgReveal"
                />
              </div>
            </div>
            <p className="text-[20px] text-white text-center font-Founders-Grotesk-Medium font-semibold mt-5">
              {person.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScaleSection;
