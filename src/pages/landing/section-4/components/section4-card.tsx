import { IDataSeaction4 } from "./data/section4-data"
import { MarkForAllCard } from "../../../../lib/images/section-4/section-4"

const Section4Card = ({img , name , position , desc}:IDataSeaction4) => {
  return (
    <div className="flex flex-col gap-5 bg-white py-5 px-5 rounded-2xl">
        {/* logo  */}
        <div>
        <img src={img} alt="" className="h-[30px]"/>

        </div>
      
      {/* description  */}
      <div className="flex gap-3 pt-1">
        <img src={MarkForAllCard} alt="" className="h-[12px]"/>
        <p>{desc}</p>
      </div>

    {/* name and position  */}
      <div className="pl-7">
        <p className="font-semibold text-[16px]">{name}</p>
        <p className="opacity-50">{position}</p>
      </div>
    </div>
  )
}

export default Section4Card