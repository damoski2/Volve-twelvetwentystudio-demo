import React from "react";
import Link from "next/link";

const HomeVideoSection = () => {
  return (
    <div className="bg-[#1c153b] w-full h-[80vh] flex items-center justify-start relative">
      <video
        autoPlay={true}
        loop
        className="h-full absolute w-full top-0 left-0 object-cover"
        id=""
        playsInline
        muted
      >
        <source
          src={`/videos/Circle_animation_extended.mp4`}
          type="video/mp4"
        />
        <source src="example.webm" type="video/webm" />
        <track kind="captions" />
        Your browser does not support the video tag.
      </video>
      <div className="sm:px-[78px] px-[20px] z-[8]">
        <h3 className="text-[#1c153b] md:w-[627px] w-full text-[40px]">
          Are you interested to see how we can support you? Let’s get in touch!
        </h3>
        <div className="flex items-center mt-[2em] gap-[1em]">
          <Link href="">
            <button className=" font-bold px-8 h-[47px] text-center rounded-[3em] bg-[#fff] text-[#1c153b] hover:bg-[#1c153b] hover:text-[#fff] duration-300">
              CONTACT US
            </button>
          </Link>
          <Link href="">
            <button className=" font-bold px-8 h-[47px] text-center rounded-[3em] bg-transparent text-[#1c153b] border border-[#1c153b] hover:bg-[#1c153b] hover:text-[#fff] duration-300">
              LINKEDIN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeVideoSection;

{
  /*
    <video
            autoPlay={true}
            loop
           
            height="483"
            className="rounded-[20px] w-fit"
            id="video1"
            playsInline
            muted
          >
            <source src={`/videos/BULLSTACKNOTXT.mp4`} type="video/mp4" />
            <source src="example.webm" type="video/webm" />
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
*/
}
