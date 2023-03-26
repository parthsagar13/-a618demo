import React from "react";

function Footer() {
  return (
    <div className="md:mt-[360px] relative">
      <div className="w-full bg-[#1F0048]  md:px-10 px-5">
        <div className="md:max-w-[1240px] mx-auto flex w-full">
          <div className="w-full grid md:grid-cols-4 sm:grid-cols-2  mx-auto  gap-x-2 items-start  md:gap-x-16 md:gap-y-5 my-5 gap-y-8">
            <div className="flex flex-col justify-start text-[#ffffff]">
              <img
                src="./assets/images/FooterLogo.png"
                className="h-12 w-[150px] my-6"
              />
              <p className="text-base font-semibold leading-[30px] ">
                Cras ac ante vitae enim malesuada tincidunt. Donec ut arcu
                tempus, pretium magna sed, consectetur quam. Etiam fermentum
              </p>
            </div>
            <div className="flex flex-col justify-start text-[#ffffff]">
              <h1 className="my-4 text-[32px] font-bold leading-[50px] ">
                Quick Links
              </h1>

              <ul className="text-base font-semibold leading-[50px]">
                <li>Home</li>
                <li className="my-3"> About Us</li>
                <li className="my-3">Services </li>
                <li className="my-3"> Testimonials</li>
                <li className="my-3">Contact Us</li>
              </ul>
            </div>
            <div className="flex flex-col justify-start text-[#ffffff]">
              <h1 className="my-4 text-[32px] font-bold leading-[50px] ">
                Services
              </h1>

              <ul className="text-base font-semibold leading-[50px]">
                <li>UI UX Development</li>
                <li className="my-3"> Web Development</li>
                <li className="my-3">Android/iOS Development </li>
                <li className="my-3"> Backend Development </li>
                <li className="my-3">Consulting Service</li>
              </ul>
            </div>
            <div className="flex flex-col justify-start text-[#ffffff]">
              <h1 className="my-4 text-[32px] font-bold leading-[50px] ">
                Others
              </h1>

              <ul className="text-base font-semibold leading-[50px]">
                <li>Careers </li>
                <li className="my-3"> Blogs</li>
                <li className="my-3">Case Studies </li>
                <li className="my-3"> Privacy Policy </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#13002D] py-5 md:px-10 px-5">
        <div className="md:max-w-[1240px] mx-auto flex w-full md:justify-between flex-col md:flex-row text-[#FFFFFF]">
          <div>All Rights Reserved @zraviya.com</div>
          <div className="flex">
            <div>Facebook</div>
            <p className="md:mx-2 mx-1">-</p>
            <div> Twitter </div>
            <p className="md:mx-2 mx-1">-</p>
            <div> Instagram </div>
            <p className="md:mx-2 mx-1">-</p>
            <div> Linked in </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
