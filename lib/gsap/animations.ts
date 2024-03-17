import { gsap, ScrollTrigger } from "./index";



export const scaleOnScroll = (element: HTMLElement, scale: number) => {
    const timeline = gsap.timeline({
        scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        },
    });
    
    timeline.to(element, { scale: scale });
    return timeline;
}

export const fadeIn = (element: HTMLElement) => {
    const timeline = gsap.timeline({
        scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        },
    });
    
    timeline.to(element, { opacity: 1 });
    return timeline;
}