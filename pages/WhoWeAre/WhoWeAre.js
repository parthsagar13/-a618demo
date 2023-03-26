import React from "react";

function WhoWeAre() {
  return (
    <div className="relative my-20">
      <div className="whoWe bg-blue w-[254px] h-[254px] bg-opacity-50 absolute right-0 md:block hidden"></div>

      <div className="w-full md:px-10 px-5 md:max-w-[1240px] mx-auto items-center flex md:flex-row flex-col">
        <div className="w-full md:w-1/2 justify-start items-center md:my-0 my-4">
          <img
            src="./assets/images/WhoWeAre.svg "
            className="md:h-[500px] md:w-[360px] h-[300px] w-full"
          />
        </div>
        <div className="w-full md:w-1/2 justify-start  flex flex-col text-primary">
          <div className="flex flex-col  font-semibold justify-start">
            <h1 className="md:text-[60px] text-[30px]  leading-[75px] ">
              Who Are We?
            </h1>
            <p className="py-2">
              Sed consequat leo non lacinia imperdiet. Duis at risus leo. In
              vitae bibendum odio, ac tempus lacus. Aenean condimentum gravida
              elit id malesuada. Mauris vel maximus risus. Proin vehicula, quam
              sit amet tincidunt elementum, leo velit tempus purus, vitae
              placerat urna quam vitae ex.
            </p>
          </div>

          <div className="my-5">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col justify-start">
                <img src="./assets/images/Vision.svg" className="h-20 w-20" />
                <h1 className="my-2 text-[32px] font-bold leading-[30px]">
                  Vision
                </h1>
                <p className="text-base font-semibold leading-[30px]">
                  Phasellus fermentum sapien et lectus vehicula eleifend. Donec
                  non diam in sem mollis facilisis vel sed arcu.
                </p>
              </div>
              <div className="flex flex-col md:mx-10 md:my-0 my-4 justify-start">
                <div className="flex flex-col justify-start">
                  <img
                    src="./assets/images/Mission.svg"
                    className="h-20 w-20"
                  />
                  <h1 className="my-2 text-[32px] font-bold leading-[30px]">
                    Mission
                  </h1>
                  <p className="text-base font-semibold leading-[30px] ">
                    Phasellus fermentum sapien et lectus vehicula eleifend.
                    Donec non diam in sem mollis facilisis vel sed arcu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
