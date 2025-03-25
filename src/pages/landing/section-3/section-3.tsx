
import Card from "./components/card/card"
import { FeatureData } from "./data/data"
import Heading from "./heading"


const Section3 = () => {
  
  return (
    <div className="px-10 md:px-20 flex flex-col items-center justify-center gap-5 md:pt-10 sm:pt-8 pt-6 ">
      <Heading />
      <div className="grid md:grid-cols-3 sm:gap-15 gap-8 sm:grid-cols-2 grid-cols-1 pt-5 pb-13">
        {
            FeatureData.map((p , index)=>{
                return (
                    <div key={index}>
                    <Card title={p.title} img={p.img}/>
                    </div>
                )
            })
        }
      </div>
    
    </div>
  )
}

export default Section3
