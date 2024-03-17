import React, { useContext, useRef } from "react";
import { gsap, TimelineLite } from "../../../lib/gsap";
import { useIsomorphicLayoutEffect } from "../../../hooks";
import { useGSAP } from "@gsap/react";
import { handleSetMenuClicked } from "../../../context/action";
import { GlobalContext } from "../../../context/GlobalContext";

const Hambuger = () => {
  const { menuOpen, dispatch } = useContext(GlobalContext);

  const navRef: any = useRef(null);

/*   useGSAP(() => {
    var hamDiv = document.getElementsByClassName(".hamburger");
    var upper = document.getElementsByClassName(".upper");
    var lower = document.getElementsByClassName(".lower");

    var tl = new TimelineLite({ paused: true, reversed: true });

    document
      ?.querySelector(".hamburger")
      ?.addEventListener("click", function () {
        tl.reversed() ? tl.play() : tl.reverse();
      });
  }, []); */

  const handleClickNav = () => {
    handleSetMenuClicked(dispatch, !menuOpen);
    navRef.current.classList.toggle("active");
  };

  return (
    <button className={`burger`} onClick={handleClickNav} ref={navRef}></button>
  );
};

export default Hambuger;

{
  /* <svg
  width="18"
  height="2"
  viewBox="0 0 18 2"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M18 0H0V1.45161H9H18V0Z" fill="black" />
</svg>; */
}

{
  /*

 <div
      onClick={() => handleSetMenuClicked(dispatch, !menuOpen)}
      className="hamburger w-[50px] h-[50px] flex items-center justify-center cursor-pointer rounded-[999px]"
    >
      <svg viewBox="0 0 12 10" className=" flex" height="20px" width="29px">
        <path
          d="M10,2 L2,2"
          className="upper w-full"
          style={{
            fill: "none",
            stroke: "#FF4E00",
            strokeLinecap: "round",
            strokeWidth: "0.6",
          }}
        />

        <path
          d="M2,5 L10,5"
          className="middle w-full"
          style={{
            fill: "none",
            stroke: "#FF4E00",
            strokeLinecap: "round",
            strokeWidth: "0.6",
          }}
        />
        <path />
        
      </svg>
    </div>
*/
}
