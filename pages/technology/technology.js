import React from "react";

function technology() {
  return (
    <div className="relative">
      <div className="md:flex mx-auto justify-center items-center  hidden">
        <div className="flex justify-center left-home items-center text-center mx-auto bg-blue w-[250px] h-[250px] bg-opacity-50   absolute "></div>
      </div>{" "}
      <div className="w-full md:max-w-[1240px] mx-auto flex  relative items-center justify-center md:px-10 px-5">
        <div className="w-full grid md:grid-cols-6 sm:grid-cols-4 xs:cols-2 mx-auto items-center  justify-center md:gap-x-20 gap-x-8 gap-y-5 my-5">
          <img src="./assets/images/ficker.svg" />
          <img src="./assets/images/maze.svg" />
          <img src="./assets/images/hotjar.svg" />
          <img src="./assets/images/pipey.svg" />
          <img src="./assets/images/kirby.svg" />
          <img src="./assets/images/django.svg" />
          <img src="./assets/images/vercel.svg" />
          <img src="./assets/images/portal.svg" />
          <img src="./assets/images/haskell.svg" />
          <img src="./assets/images/puppet.svg" />
          <img src="./assets/images/grooveHQ.svg" />
          <img src="./assets/images/capacitor.svg" />
        </div>
      </div>
    </div>
  );
}

export default technology;
