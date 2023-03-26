import React from "react";

function work() {
  return (
    <div className="relative">
      <div className="w-full md:max-w-[1240px] mx-auto relative my-20 px-5">
        <div className="flex flex-col justify-center items-center mx-auto text-primary relative">
          <h1 className="md:text-[60px] text-[30px]  font-bold md:leading-[75px]">
            How We Work
          </h1>
          <p className="text-base font-semibold leading-[30px] my-4 text-center items-center justify-center flex mx-auto md:w-[700px] w-full">
            At Zraviya, Nulla condimentum ante felis, in posuere massa vehicula
            at. In hac habitasse platea dictumst. Integer vitae mi lacus. Proin
            in urna aliquam, semper est sed, ultricies purus. Quisque vitae
            tortor suscipit dolor eleifend dapibus sed ullamcorper nisi.
          </p>
          <img
            src="./assets/images/Works.svg"
            className="md:w-[1100px] md:h-[600px] w-full h-full"
          />
        </div>
        <div className="w-full grid md:grid-cols-4 sm:grid-cols-2  mx-auto  gap-x-4   md:gap-x-9 md:gap-y-5 my-5 gap-y-8">
          <div className="flex flex-col justify-start text-primary">
            <img src="./assets/images/Requirement.svg" className="h-15 w-20" />
            <h1 className="my-2 text-[30px] font-bold leading-[37px] ">
              Requirement Gathering
            </h1>
            <p className="text-base font-semibold leading-[30px] ">
              Nulla condimentum ante felis, in posuere massa vehicula at. In hac
              habitasse platea dictumst. Integer vitae mi lacus.
            </p>
          </div>
          <div className="flex flex-col justify-start text-primary">
            <img src="./assets/images/Flow.svg" className="h-15 w-20" />
            <h1 className="my-2 text-[30px] font-bold leading-[37px] ">
              Flow and Structure Creating
            </h1>
            <p className="text-base font-semibold leading-[30px] ">
              Cras quis molestie arcu. Nulla at ex sed ipsum efficitur posuere
              ut vitae metus. Integer dui nunc, faucibus eget ex in.
            </p>
          </div>
          <div className="flex flex-col justify-start text-primary">
            <img src="./assets/images/Chart.svg" className="h-15 w-20" />
            <h1 className="my-2 text-[30px] font-bold leading-[37px] ">
              Wireframing & Chart
            </h1>
            <p className="text-base font-semibold leading-[30px] ">
              Duis faucibus dui vitae ipsum porta, auctor consequat turpis
              tincidunt. Duis non risus eu dolor malesuada lobortis.
            </p>
          </div>
          <div className="flex flex-col justify-start text-primary">
            <img src="./assets/images/Designing.svg" className="h-15 w-20" />
            <h1 className="my-2 text-[30px] font-bold leading-[37px] ">
              UI / UX Designing
            </h1>
            <p className="text-base font-semibold leading-[30px] ">
              Mauris vitae viverra arcu, in venenatis quam. Ut hendrerit turpis
              sem, ac viverra ipsum ornare nec. Cras sed est porttitor ante
              rhoncus.
            </p>
          </div>
          <div className="flex flex-col justify-start text-primary">
            <img src="./assets/images/Gathering.svg" className="h-15 w-20" />
            <h1 className="my-2 text-[30px] font-bold leading-[37px] ">
              Requirement Gathering
            </h1>
            <p className="text-base font-semibold leading-[30px] ">
              Nulla condimentum ante felis, in posuere massa vehicula at. In hac
              habitasse platea dictumst. Integer vitae mi lacus.
            </p>
          </div>
          <div className="flex flex-col justify-start text-primary">
            <img src="./assets/images/Flow.svg" className="h-15 w-20" />
            <h1 className="my-2 text-[30px] font-bold leading-[37px] ">
              Flow and Structure Creating
            </h1>
            <p className="text-base font-semibold leading-[30px] ">
              Cras quis molestie arcu. Nulla at ex sed ipsum efficitur posuere
              ut vitae metus. Integer dui nunc, faucibus eget ex in.
            </p>
          </div>
          <div className="flex flex-col justify-start text-primary">
            <img src="./assets/images/Chart.svg" className="h-15 w-20" />
            <h1 className="my-2 text-[30px] font-bold leading-[37px] ">
              Wireframing & Chart
            </h1>
            <p className="text-base font-semibold leading-[30px] ">
              Duis faucibus dui vitae ipsum porta, auctor consequat turpis
              tincidunt. Duis non risus eu dolor malesuada lobortis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default work;
