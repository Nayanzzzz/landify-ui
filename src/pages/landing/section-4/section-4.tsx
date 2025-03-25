import Section4Card from "./components/section4-card"
import { AbsoluteMark } from "../../../lib/images/section-4/section-4"
import TextSection4 from "./text/text"
import { DataSection4 } from "./components/data/section4-data"

const Section4 = () => {
  return (
    <div className=" px-5 md:px-20 bg-[#D5FAFC]  relative flex flex-col gap-5">

        {/* absolute image  */}
        <div className="pt-10 absolute">
        <img src={AbsoluteMark} alt="" className=" sm:w-[120px] sm:h-[95px]  w-[96px] h-[78px]"/>
        </div>

        {/* text  */}
        <div className="px-5">
            <TextSection4/>
        </div>

        {/* daynamic card  */}
        <div className="flex md:grid md:grid-cols-2  gap-5 flex-col px-5 pb-10 pt-8">
            {
                DataSection4.map((p , index)=>{
                    return (
                        <div key={index} >
                        <Section4Card img={p.img} desc={p.desc} position={p.position} name={p.name}/>

                        </div>
                    )
                })
            }
        </div>

            
      
    </div>
  )
}

export default Section4
