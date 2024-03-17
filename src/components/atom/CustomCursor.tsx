/* import React, { useLayoutEffect, useContext } from "react";
import Image from "next/image";
import { gsap } from "../../../lib/gsap";
import { GlobalContext } from "../../../context/GlobalContext";


const CustomCursor = () => {
  const {} = useContext(GlobalContext);

  useLayoutEffect(() => {
    const cursor: HTMLElement = document.querySelector(
      ".custom-cursor"
    ) as HTMLElement;

    const cursorInnerDiv: HTMLElement = document.querySelector(
      ".custom-cursor-inner-div"
    ) as HTMLElement;
    const cursorText: HTMLElement = document.querySelector(
      ".cursor-text"
    ) as HTMLElement;
    const cursorImgDisplay: HTMLImageElement = document.querySelector(
      ".cursor-img-display"
    ) as HTMLImageElement;
    const peopleHover = document.querySelectorAll(".explore-People");
    const impactHover = document.querySelectorAll(".explore-Impact");
    const scalabilityHover = document.querySelectorAll(".explore-Scalability");

    const onMouseMove = (e: any) => {
      const { clientX, clientY } = e;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterPeople = (e: any) => {
      const img = e.target;
      if (img.classList.contains("explore-People")) {
        if (!cursorText) return;
        gsap.to(cursorInnerDiv, {
          scale: 3.4,
          background: "#FF4E00",
          mixBlendMode: "unset",
        });
        cursorText.innerHTML = "Explore People";
        cursorText.style.display = "block";
        cursorText.style.fontSize = "3px";
        cursorText.style.color = "#FFF";
        cursorText.style.fontFamily = "Founders-Grotesk-Regular";
        cursorText.style.textAlign = "center";
      }
    };

    const onMouseLeavePeople = (e: any) => {
      gsap.to(cursorInnerDiv, {
        scale: 1,
        mixBlendMode: "difference",
        background: "#fff",
      });
      cursorText.style.display = "none";
    };

    document.addEventListener("mousemove", onMouseMove);
    peopleHover.forEach((el: any) => {
      el.addEventListener("mouseenter", onMouseEnterPeople);
      el.addEventListener("mouseleave", onMouseLeavePeople);
    });
  }, []);

  //if (isMobile) return null;

  //if (isLoading === "true") return null;

  return (
    <div id="custom-cursor" className={`custom-cursor visible bg-white fixed z-[9]`}>
      <div className="custom-cursor-inner-div">
        <span className="cursor-text text-center"></span>
      </div>
    </div>
  );
};

export default CustomCursor;
 */