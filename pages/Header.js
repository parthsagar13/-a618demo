import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [showNav, setShowNav] = useState(false);

  const onMoboClick = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className="max-w-[1240px] bg-white md:px-10 px-5 mx-auto py-[20px] ">
        <div className="flex  justify-between  md:items-center  ">
          <div className="logo">
            <img src="./assets/images/Zraviya.png" className="h-6 w-[130px]" />
          </div>
          <div className=" md:flex hidden">
            <div className=" text-base font-medium leading-5 text-black">
              Home
            </div>
            <div className="text-base font-medium leading-5 text-black mx-4">
              About Us
            </div>
            <div className="text-base font-medium leading-5 text-black mx-4">
              Service
            </div>
            <div className="text-base font-medium leading-5 text-black mx-4">
              Testimonials
            </div>
            <div className="text-base font-medium leading-5 text-black mx-4">
              Contact Us
            </div>
          </div>
          <div className="text-base font-medium leading-4 text-black ">
            <button className="border-2 border-black py-2  px-6 rounded-md md:flex hidden">
              Get Started
            </button>
            <div className="md:hidden block" onClick={() => onMoboClick()}>
              {showNav ? (
                <AiOutlineCloseCircle size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </div>
          </div>

          <div
            className={
              showNav
                ? "fixed top-12 left-0 bg-[#1F0048] w-full ease-in-out duration-500 z-10"
                : "fixed top-[-100%]"
            }>
            <ul className="md:hidden flex text-white p-5  flex-col mx-auto justify-center items-center">
              <li className="my-2 leading-[30px] text-base font-semibold ">
                {" "}
                Home
              </li>
              <li className="my-2 leading-[30px] text-base font-semibold">
                {" "}
                About Us
              </li>
              <li className="my-2 leading-[30px] text-base font-semibold">
                {" "}
                Service
              </li>
              <li className="my-2 leading-[30px] text-base font-semibold">
                {" "}
                Testimonials
              </li>
              <li className="my-2 leading-[30px] text-base font-semibold">
                {" "}
                Contact Us
              </li>
              <li>
                {" "}
                <button className="border-2 border-white py-2 my-2 px-6 rounded-md">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
