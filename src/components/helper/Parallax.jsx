import React, { ReactNode, useRef } from "react";
import { useWindowSize } from "@studio-freight/hamo";
import { gsap, ScrollTrigger } from "../../../lib/gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Parallax = ({ children, speed = 1, id = "parallax" }) => {
  const trigger = useRef(null);
  const target = useRef(null);
  const timeline = useRef(null);

  const { width: windowWidth } = useWindowSize();

  useGSAP(
    () => {
      const y = windowWidth * speed * 0.1;
      const setY = gsap.quickSetter(target.current, "y", "px");

      timeline.current = gsap.timeline({
        scrollTrigger: {
          id: id,
          trigger: trigger.current,
          scrub: true,
          start: "top bottom",
       
          onUpdate: (e) => {
            setY(e.progress * y);
          },
        
        },
      });
    },
    {
      dependencies: [id, speed, windowWidth],
    }
  );

  return (
    <div ref={trigger}>
      <div ref={target}>{children}</div>
    </div>
  );
};

export default Parallax;
