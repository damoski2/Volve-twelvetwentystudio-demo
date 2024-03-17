import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

export default function Index({ children }) {
  const magnetic = useRef(null);

  useGSAP(() => {
    const xTo = gsap.quickTo(magnetic?.current, "x", {
      duration: 1,
      ease: "back",
    });
    const yTo = gsap.quickTo(magnetic?.current, "y", {
      duration: 1,
      ease: "back",
    });

    magnetic?.current?.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    });
    magnetic?.current?.addEventListener("mouseleave", (e) => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
