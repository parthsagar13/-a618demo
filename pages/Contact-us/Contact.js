import React from "react";

function Contact() {
  return (
    <>
      <div className="w-full md:max-w-[1240px] flex mf:flex-row flex-col mx-auto items-center justify-center  md:px-10 px-5 my-10 relative">
        <div className="bg-[#544CF4] flex justify-between items-center relative h-full w-full sm:w-[800px] lg:w-[1000px] lg:h-[380px] rounded-[38px] md:p-0 p-2">
          <div className=" flex flex-col md:pl-10 pl-2">
            <h3 className="text-[30px] font-bold leading-[30px] text-[#FFFFFF]">
              Let’s Discuss Your idea to <br />
              make it live !!!
            </h3>
            <p className="text-base font-semibold leading-[30px] my-4 text-[#FFFFFF]">
              Nulla condimentum ante felis, in posuere massa <br /> vehicula at.
              In hac habitasse platea dictumst. Integer vitae mi lacus.
            </p>
            <div className="flex relative items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full py-4 px-2 rounded-full h-[60px]  input ring-0 focus:ring-0 outline-none leading-5 font-normal placeholder-[#1F0048]"
              />
              <div className="absolute right-0">
                {" "}
                <button className=" text-base  font-semibold leading-[30px] text-primary py-4 px-8 rounded-full actionbtn ">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0  lg:block hidden">
            <img
              src="./assets/images/ellipese.png "
              className="rounded-r-[38px] h-[300px] w-[500px]"
            />
          </div>
          <div className="absolute right-0 lg:block hidden">
            {" "}
            <img src="./assets/images/boy.png " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
