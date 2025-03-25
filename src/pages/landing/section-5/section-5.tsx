// import BottomLeft from "./bottom-left/bottom-left";
// import BottomRight from "./bottom-right/bottom-right";
import TopLeft from "./top-left/top-left";
import TopRight from "./top-right/top-right";

const Section5 = () => {
  return (
    <div className="px-10 md:px-20 pt-10">
      <div className="flex md:flex-row flex-col lg:gap-10 sm:gap-10 md:gap-1 gap-10">
        <TopLeft />
        <TopRight />
      </div>

      <div className="sm:pt-18 pt-12 md:pt-20">
        {/* divider  */}
        <div className="h-[2px] bg-[#E5E7EB] "></div>


        {/* <div className="flex sm:flex-row  flex-col gap-3">
          <BottomLeft />
          <BottomRight />
        </div> */}


      </div>
    </div>
  );
};

export default Section5;
