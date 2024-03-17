import React from "react";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "Pre-seed fase",
      content:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
    },
    {
      title: "Technology product",
      content:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
    },
    {
      title: "SaaS",
      content:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
    },
    {
      title: "B2B(2C)",
      content:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
    },
    {
      title: "Impact",
      content:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
    },
    {
      title: "Tickets between 100-300K",
      content:
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
    },
  ],
};

const HomeInvestmentCriteria = () => {
  return (
    <div className="py-[136px] sm:px-[78px] px-[20px] bg-[#1c153b] flex xl:flex-row flex-col xl:gap-0 gap-[50px] justify-between items-start relative -top-[10px] rounded-t-[26px] w-full">
      <h2 className="text-[#cad2e2] text-[62px] w-[78px] leading-[78px]">INVESTMENT CRITERIA</h2>
      <div className="xl:w-[738px] w-full" >
        <Faq
          data={data}
          styles={{
            titleTextColor: "#cad2e2",
            rowTitleColor: "#cad2e2",
            rowContentColor: "#cad2e299",
            bgColor: 'transaprent',
           
            rowContentPaddingBottom: '30px',
            rowTitleTextSize: '28px',
            arrowColor: "#cad2e2",
          }}
        />
      </div>
    </div>
  );
};

export default HomeInvestmentCriteria;
