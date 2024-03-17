import Lenis from "@studio-freight/lenis";
import React from "react";
import useCustomScreenSizeHook from "../../../hooks/useCustomScreenSizeHook";
import useIsomorphicLayoutEffect from "../../../hooks/useIsomorphicLayoutEffect";
import { ScrollTrigger, gsap } from "../../../lib/gsap";
gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobileBool } = useCustomScreenSizeHook("768");

  useIsomorphicLayoutEffect(() => {
    if (isMobileBool) return;

    const lenis = new Lenis({
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.091,
      duration: 1.2,
      syncTouch: false,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time: any) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
