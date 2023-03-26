import React from "react";

function Findus() {
  return (
    <div className="relative ">
      <div className="w-full md:max-w-[1240px] mx-auto flex items-center  relative  ">
        <div className="md:flex justify-center items-center mx-auto w-full  hidden">
          <div className="w-full mx-auto absolute bg-[#d7e9ff] top-5 sm:w-[800px] lg:w-[1000px] lg:h-[400px] h-full  rounded-t-[50px] items-center ">
            <div className="flex justify-between items-center mx-auto  w-full h-full p-8 relative">
              <div className="flex flex-col justify-start">
                <h1 className="md:text-[60px] text-[30px] ml-4 leading-[75px] font-bold text-primary">
                  Find us <br /> @socialmedia
                </h1>
                <div className="flex my-8 itens-center">
                  <img src="./assets/images/ig.svg" className=" h-12 w-12" />
                  <img
                    src="./assets/images/fb.svg"
                    className=" h-12 w-12 ml-6 "
                  />
                  <img
                    src="./assets/images/linkie.svg"
                    className=" h-12 w-12 ml-6"
                  />
                  <img
                    src="./assets/images/twitter.svg"
                    className=" h-12 w-12 ml-6  "
                  />
                </div>
              </div>

              <div className="-mt-[180px]">
                <img
                  src="./assets/images/Findus.svg"
                  className="md:h-[460px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Findus;
