import React from "react";
import { gsap, SplitType, CustomEase } from "../../../lib/gsap";
import { useGSAP } from "@gsap/react";

const Loader = () => {
  useGSAP(() => {
    const tl = gsap.timeline({});

    const loaderText = new SplitType(".loader-text", {
      types: "chars",
    });

    tl.to("#__next", {
      height: "100vh",
      overflowY: "hidden",
      ease: "power4.inOut",
      onStart: () => {
        window.scrollTo(0, 0);
      },
      onComplete: () => {
        window.scrollTo(0, 0);
      },
    })
      .fromTo(
        loaderText.chars,
        { scale: 1.4, opacity: 0, x: -70, y: 40 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.9,
          transformOrigin: "left center",
        }
      )
      .from(
        ".loader-text",
        {
          transform: "translate(-50%, 50%) scale(1.4)",
          transformOrigin: "left center",
          duration: 1,
        },
        "<"
      )
      .to(".loader-text", {
        opacity: 0,
        duration: 0.3,
        display: "none",
      })
      .to(
        ".orange-bg",
        {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
        },
        "<-=0.5"
      );
    tl.to("#__next", {
      height: "100%",
      overflowY: "scroll",
      ease: "power4.inOut",
      onStart: () => {
        window.scrollTo(0, 0);
      },
      onComplete: () => {
        window.scrollTo(0, 0);
      },
    })
      .to(".loader-cnt", {
        display: "none",
        duration: 0.1,
      })
      .then(() => {
        window.scrollTo(0, 0);
      });
  }, []);

  return (
    <div className="w-screen h-dvh flex items-center justify-center loader-cnt fixed top-0 left-0 z-[10]">
      <div className="orange-bg bg-[#FF4E00] absolute w-full h-full top-0 left-0" />
      <h1 className="text-uppercase font-Founders-Grotesk-Bold text-white text-[90px] loader-text">
        VOVLE
      </h1>
    </div>
  );
};

export default Loader;
