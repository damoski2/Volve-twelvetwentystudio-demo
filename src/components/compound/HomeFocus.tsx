import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap, SplitType, ScrollTrigger } from "../../../lib/gsap";
import { useGSAP } from "@gsap/react";
import { ourPeople } from "../../../constants";
import { OurPeopleType } from "../../../types";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const scaleAnimation = {
  initial: { scale: 0, x: "-95%", y: "-10%" },
  enter: {
    scale: 1,
    x: "-95%",
    y: "-10%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-95%",
    y: "-10%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const scaleAnimationCursor = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const HomeFocus = () => {
  useGSAP(() => {
    const focusHeroText = new SplitType(".focus-hero-text", {
      types: "lines,words,chars",
    });

    gsap.from(focusHeroText.words, {
      duration: 1.5,
      opacity: 0,
      stagger: 0.02,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".focus-hero-text",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  useGSAP(() => {
    let groups = gsap.utils.toArray(".focus-desc-dd-div");
    let menus = gsap.utils.toArray(".accordion-menu");
    let menuToggles = groups.map(createAnimation);

    menus.forEach((menu: any) => {
      menu.addEventListener("click", () => toggleMenu(menu));
    });

    function toggleMenu(clickedMenu: any) {
      menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
    }

    function createAnimation(element: any) {
      let menu = element.querySelector(".accordion-menu");
      let box = element.querySelector(".focus-desc-dd");

      gsap.set(box, {
        height: "auto",
        opacity: 1,
        transformOrigin: "bottom bottom",
      });

      const tl = gsap.timeline({ paused: true, duration: 0.2 });

      let animation = tl
        .from(box, {
          height: 0,
          opacity: 0,
          duration: 0.2,
          ease: "power1.inOut",
        })
        .reverse();

      return function (clickedMenu: any) {
        if (clickedMenu === menu) {
          animation.reversed(!animation.reversed());
          //plus.setAttribute("src", '/videos/minus.svg')
        } else {
          animation.reverse();
        }
      };
    }
  }, []);

  const [activeText, setActiveText] = useState<string>();

  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;

  const modalContainer: any = useRef(null);
  const cursor: any = useRef(null);
  const cursorLabel: any = useRef(null);

  let xMoveContainer: any = useRef(null);
  let yMoveContainer: any = useRef(null);
  let xMoveCursor: any = useRef(null);
  let yMoveCursor: any = useRef(null);
  let xMoveCursorLabel: any = useRef(null);
  let yMoveCursorLabel: any = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x: any, y: any) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active: any, index: any, x: any, y: any) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <div
      className="-top-[20px] relative rounded-t-[8px] bg-[#F4EDE7] z-[6] py-[136px] sm:px-[78px] px-[20px] projects-focus"
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
    >
      <p className="sm:text-[40px] text-[30px] text-brand-orange focus-hero-text md:w-[72%] w-full font-Founders-Grotesk-Light font-normal">
        We invest in the new generation of tech and impact companies. Bringing
        abroad network of different markets and specialists to scale–up big
        ideas to create impact together.
      </p>

      <div className="mt-[136px]">
        <p className="text-brand-orange text-2xl font-Founders-Grotesk-Medium font-semibold">
          OUR FOCUS
        </p>

        <div className="mt-[2em]">
          {ourPeople.map((item: OurPeopleType, index) => (
            <div
              key={index}
              className={`py-[2em] focus-desc-dd-div cursor-pointer ${
                ourPeople.length - 1 === index
                  ? "border-b border-brand-orange/20 border-t "
                  : " border-t border-brand-orange/20 "
              } explore-${item.title}`}
              onMouseEnter={(e) => {
                manageModal(true, index, e.clientX, e.clientY);
                setActiveText(item.title);
              }}
              onMouseLeave={(e) => {
                manageModal(false, index, e.clientX, e.clientY);
                setActiveText("");
              }}
            >
              <div className="flex sm:flex-row flex-col justify-between sm:items-center items-start accordion-menu">
                <h2 className="sm:text-[64px] text-[36px] text-brand-orange font-Founders-Grotesk-Regular">
                  {item.title}
                </h2>
                <p className="text-brand-orange text-[20px] font-Founders-Grotesk-Regular font-normal">
                  {item.shortText}
                </p>
              </div>
              <p className="text-[18px] sm:mt-0 mt-3 text-brand-orange font-Founders-Grotesk-Light font-normal max-w-[24em] focus-desc-dd">
                {item.description}{" "}
              </p>
            </div>
          ))}
        </div>

        <section className="focus-hover-container" >
          <motion.div
            ref={modalContainer}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
            className={"modalContainer-focus rounded-2xl"}
          >
            <div
              style={{ top: index * -100 + "%" }}
              className={"modalSlider-focus rounded-2xl"}
            >
              {ourPeople.map((people: OurPeopleType, index) => {
                const { imgSrc } = people;
                return (
                  <div
                    className={"modal-focus rounded-2xl"}
                    style={{ backgroundColor: "#FF4E00" }}
                    key={`modal_${index}`}
                  >
                    <Image
                      src={imgSrc}
                      className="w-[300px] h-[200px] object-cover rounded-2xl"
                      alt="image"
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            ref={cursor}
            className={"cursor-focus"}
            variants={scaleAnimationCursor}
            initial="initial"
            animate={active ? "enter" : "closed"}
          ></motion.div>
          <motion.div
            ref={cursorLabel}
            className={"cursorLabel-focus"}
            variants={scaleAnimationCursor}
            initial="initial"
            animate={active ? "enter" : "closed"}
          >
            Explore <br /> {activeText}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default HomeFocus;
