import React from "react";

function Home() {
  return (
    <div className="relative">
      {/* <div className="absolute top-[115px] md:block hidden bg-h">
          <img
            src="./assets/images/herobg.svg"
            className="w-full  object-none "
          />
        </div> */}
      <div className=" max-w-[1240px] md:px-10 px-5 mx-auto w-full relative ">
        <div className="flex md:flex-row flex-col-reverse  items-center ">
          <div className="md:w-1/2 w-full  ">
            <div className="left-home bg-skyblue w-[254px] h-[254px] bg-opacity-50   absolute top-[270px] left-0"></div>
            <div className="text-primary md:text-[75px] text-[40px] font-bold md:leading-[94px] leading-[50px] flex-col">
              <h1>
                What's your <br />
                Zraviya ?
              </h1>
              <p className="text-primary font-semibold text-base leading-[30px] my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                cursus neque a egestas condimentum. Cras eget gravida ipsum,
                eget pretium turpis.
              </p>
              <div className="text-base font-medium leading-4 text-black my-4">
                <button className="border-1 border-black py-[15px] px-[30px] rounded-md button ">
                  Get Started
                </button>
              </div>
              <div className="mt-12 mb-4 flex items-center space-x-7 md:justify-start justify-center">
                <img src="./assets/images/ig.svg" />
                <img src="./assets/images/linkie.svg" />
                <img src="./assets/images/fb.svg" />
                <img src="./assets/images/twitter.svg" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full relative">
            <img
              src="./assets/images/HeroImg.svg"
              className="md:h-[620px] md:w-[800px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
