import React from "react";

const HomeVideoSection = () => {
  return (
    <div className="bg-[#1c153b] w-full h-screen relative">
      <video
        autoPlay={true}
        loop
        className="h-full absolute w-full top-0 left-0 object-cover"
        id=""
        playsInline
        muted
      >
        <source src={`/videos/Circle_animation_extended.mp4`} type="video/mp4" />
        <source src="example.webm" type="video/webm" />
        <track kind="captions" />
        Your browser does not support the video tag.
      </video>
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
