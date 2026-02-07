import DvhBoxContainer from "../ui/DvhBoxContainer";

function HeroSection() {
  return (
    <DvhBoxContainer>
      <div className="w-full flex items-center h-full text-lightGray relative ">
        <div>
          <h3>Updated</h3>
          <div className="flex ">
            <div className="flex flex-col">
              <div className="relative">
                <h1
                  className="
                  absolute top-full left-0
                  font-impact
                  text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] xl:text-[15rem]
                  opacity-20
                  blur-sm
                  scale-y-[-1]
                  translate-y-4
                  skew-x-6
                  pointer-events-none "
                >
                  PORTFOLIO
                </h1>
                <h1 className="font-impact text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] xl:text-[15rem] py-0 ">
                  PORTFOLIO
                </h1>
              </div>
              <div className="flex items-center justify-center text-xs  ">
                <h3 className="pr-2">Graphic Design</h3>
                <span className=" h-px grow shrink-0 bg-lightGray/70"></span>
                <h2 className="pl-2">Narges Ghazazani</h2>
              </div>
            </div>
            <span className="font-impact text-xs md:text-xl  bg-signature w-fit h-fit px-3 rounded-2xl py-1 flex items-center justify-center text-black">
              2025
            </span>
          </div>
        </div>
      </div>
    </DvhBoxContainer>
  );
}

export default HeroSection;
