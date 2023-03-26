import React from "react";

function Testimonial() {
  return (
    <div className="relative text-primary">
      <div className="w-full md:max-w-[1240px] mx-auto md:px-10 px-5 my-[100px]">
        <div className="flex md:flex-row flex-col">
          <div className="flex flex-col md:w-1/2 w-full">
            <h1 className="md:text-[60px] text-[30px] font-bold  leading-[75px] text-primary">
              What Out Client Say
            </h1>
            <p className="my-4  text-base  font-semibold leading-[30px] text-primary">
              Cras ac ante vitae enim malesuada tincidunt. Donec ut arcu tempus,
              pretium magna sed, consectetur quam. Etiam fermentum vulputate
              lorem, non lacinia enim cursus non.
            </p>
          </div>
          <div className="md:w-1/2 md:flex hidden mx-auto w-full flex-col justify-center items-center m">
            <div className=" bg-DarkSkyblue left-home md:h-[200px] md:w-[200px]"></div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col my-4 relative items-center">
          <div className="md:w-1/2 w-full">
            <img
              src="./assets/images/Client.svg"
              className="md:h-[400px] md:w-[400px] w-full h-full"
            />
          </div>
          <div className="flex flex-col md:w-1/2 w-full md:my-0 my-4">
            <div className="bg-DarkSkyblue left-home md:h-[200px] md:w-[200px] absolute right-[30%] md:block hidden"></div>
            <div className="flex justify-between">
              <div className="flex items-center ">
                <div>
                  <img src="./assets/images/CEO.svg" className="relative ceo" />
                </div>
                <div className="flex flex-col mx-2">
                  <h3 className="md:text-[32px] text-[20px] font-bold md:leading-[40px] leading-[25px]">
                    Johan Duan
                  </h3>
                  <p className="md:text-base text-[12px] font-semibold md:leading-[30px]">
                    CEO @ Globalcompany.com
                  </p>
                </div>
              </div>
              <img
                src="./assets/images/vector.svg"
                className="md:w-[150px] md:h-[150px] w-[100px] h-[100px]"
              />
            </div>
            <p className="my-4 text-base font-semibold leading-[30px]">
              Cras ac ante vitae enim malesuada tincidunt. Donec ut arcu tempus,
              pretium magna sed, consectetur quam. Etiam fermentum vulputate
              lorem, non lacinia enim cursus non. Sed vulputate gravida tempor.
              Aliquam sit amet pretium orci. Nulla facilisi. Aliquam a tincidunt
              risus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
