import { VidioIcon } from "../../../../../../lib/images/section-1/container/container";

const LeftContainer = () => {
  return (
    <div className="flex-2 md:pt-20 flex flex-col gap-8">
      {/* text  */}
      <div className="w-full md:w-[80%] ">
        <div>
          <p className="lg:text-6xl  md:text-4xl sm:text-3xl text-2xl font-bold text-[#111827]">
            The easiest way to manage projects
          </p>

          <p className="py-8 text-[18px]">
            From the small stuff to the big picture,organizes the work so teams
            know what to do, why it matters,and how to get ot done
          </p>
        </div>

        {/* start and video button */}
        <div className="flex  gap-8">
          {/* button for get started  */}
          <div>
            <button className="bg-[#7C3AED] text-white pl-5 pr-5 rounded-lg cursor-pointer pt-3 pb-3">
              Get Started
            </button>
          </div>

          {/* button for watch vidio  */}
          <div className="flex items-center gap-2">
            <img
              src={VidioIcon}
              alt=""
              className="cursor-pointer w-[20px] h-[20px]"
            />
            <p className="text-[#7C3AED] font-medium tracking-tight cursor-pointer">
              Watch Video
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
