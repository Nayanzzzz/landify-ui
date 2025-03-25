import { IFeatureData } from "../../data/data"


const Card = ({title , img} : IFeatureData) => {
  return (
    <div className="  flex flex-col gap-3">


        {/* div for img  */}
        <div className="flex items-center justify-center">
        <img src={img} alt="" className="h-[25px]"/>
        </div>

        {/* heading and text  */}
        <div className="flex flex-col gap-1">
          <p className="font-bold text-center text-xl">{title}</p>
          <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad dolorem neque ex possimus repudiandae in?</p>
        </div>
      
    </div>
  )
}

export default Card
