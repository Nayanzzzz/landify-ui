import { ITopData } from "../data/top-right-data";



const ToolCard = ({img , title , desc } : ITopData) => {
  return (
    <div className="flex  items-center gap-4 sm:gap-2 md:gap-3">

        {/* image or logo  */}
      <div>
        <img src={img} alt="" className=" md:h-[40px] h-[48px]"/> 
      </div>

    {/* text  */}
      <div className="flex flex-col ">
        <p className="font-bold  lg:text-[30px]  text-[22px]">
            {title}
        </p>

        <p>
            {desc}
        </p>
      </div>
    </div>
  );
};

export default ToolCard;
