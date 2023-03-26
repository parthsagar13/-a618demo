import React from "react";

function index() {
  return (
    <>
      <div className="w-full md:max-w-[1240px] mx-auto relative my-10 md:px-10 px-5 ">
        <div className="flex flex-col text-primary md:w-1/2 w-full relative">
          <h1 className="md:text-[60px] text-[30px] font-bold leading-[75px] relative">
            What We Offer
          </h1>
          <div className="flex relative">
            <p className="py-2 text-base font-semibold leading-[30px] relative">
              At Zraviya, We serve vast services range, We are offering Talented
              Developers, Solutions to Workflow Problems, Guidance Support,
              Software building services to the industry.
            </p>
            <div className="left-home md:block hidden bg-DarkSkyblue w-[254px] h-[254px] bg-opacity-50 left-[250px]   absolute"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row my-20 relative justify-start">
          <img
            src="./assets/images/UX.svg"
            className="md:w-[300px] md:h-[300px]  w-full md:my-0 my-5"
          />
          <img
            src="./assets/images/Web.svg"
            className="md:w-[300px] md:h-[300px]  w-full md:my-0 my-5"
          />
          <img
            src="./assets/images/Ios.svg"
            className="md:w-[300px] md:h-[300px]  w-full md:my-0 my-5"
          />
        </div>
      </div>
    </>
  );
}

export default index;
