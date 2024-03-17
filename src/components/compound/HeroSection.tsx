import React, { useState } from "react";
import Image from "next/image";
import { gsap, CustomEase, SplitType, ScrollTrigger } from "../../../lib/gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import hero_gif from "../../../assets/images/Volve_-_video_-_final.gif";
import GsapMagnetic from "../../../lib/GsapMagnetic";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 1.2 });

    tl.fromTo(
      ".hero-text",
      { yPercent: 200 },
      {
        yPercent: 0,
        stagger: 0.1,
        duration: 0.9,
        transformOrigin: "left center",
      }
    )
      .fromTo(
        ".hero-desc-text",
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          opacity: 1,
          yPercent: 0,
        },
        "<+=0.5"
      )
      .fromTo(
        ".hero-ball",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    /*   .fromTo(
        ".vidRevealCnt",
        { yPercent: -100 },
        { duration: 0.5, yPercent: 0 }
      )
      .fromTo("#video1", { yPercent: 100 }, { duration: 0.5, yPercent: 0 }); */

    gsap.set(".vidCnt", { scale: 0.9, borderRadius: "26px" });

    const vidAnim = gsap.to(".vidCnt", {
      scale: 1,
      duration: 1,
      borderRadius: "26px",
      ease: "power4.out",
    });

    ScrollTrigger.create({
      trigger: "#video1",
      start: "top 70%",
      end: "bottom 50%",
      toggleActions: "play none none none",
      animation: vidAnim,
      scrub: true,
    });
  }, []);

  return (
    <div className="w-full pt-[182px] z-[4]">
      <h1 className="overflow-y-hidden text-center text-brand-orange sm:text-[172px] xs:text-[106px] text-[84px] sm:leading-[184px] leading-[180px]">
        <span className="hero-text inline-block text-center">SCALING</span>
      </h1>
      <h1 className="overflow-y-hidden text-center text-brand-orange sm:text-[172px] xs:text-[106px] text-[84px] sm:leading-[184px] leading-[180px] relative sm:-top-[50px] -top-[100px]">
        <span className="hero-text inline-block text-center">
          BIG {` `}
          {` `} IDEAS
        </span>
      </h1>
      <p className="hero-desc-text overflow-y-hidden text-brand-orange text-[17px] font-Founders-Grotesk-Regular text-center sm:w-[37%] w-[70%] mx-auto relative sm:-top-[80px] -top-[140px]">
        Volve is an early-stage Venture Capital Fund built by excited
        entrepreneurs to back the next generation of tech and impact founders.
      </p>

      {/*   <div className="w-full h-full">
        <div className="vidRevealCnt overflow-hidden w-[90%] mx-auto">
          <video
            autoPlay={true}
            loop
            className="rounded-[20px] object-cover block videoVid"
            id="video1"
            playsInline
            muted
          >
            <source src={`/videos/vid.mp4`} type="video/mp4" />
            <source src="example.webm" type="video/webm" />
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div> */}

      <div className="relative sm:top-0 top-[20px]">
        <GsapMagnetic>
          <div className="hero-ball rounded-full bg-brand-orange hover:bg-[#E54600] text-white text-center sm:text-sm text-xs font-Founders-Grotesk-Medium sm:w-[166px] sm:h-[166px] w-[110px] h-[110px] hover:w-[200px] hover:h-[200px] cursor-pointer duration-75 flex items-center justify-center absolute sm:-top-[66px] -top-[70px] left-[90px] z-[4]">
            EXPLORE <br /> VOLVE
          </div>
        </GsapMagnetic>
        <section className="vidCnt">
          <motion.div
            initial={false}
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1.9 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <Image
              src={hero_gif}
              alt=""
              id="video1"
              onLoad={() => setIsLoaded(true)}
              className="w-[95%] mx-auto rounded-[26px] h-[670px]"
            />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
