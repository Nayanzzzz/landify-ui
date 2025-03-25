import { TopRightData } from "./data/top-right-data"
import ToolCard from "./tool-card/tool-card"


const TopRight = () => {
  return (
    <div className="flex-1 grid sm:grid-cols-2 gap-4 grid-cols-1">
      {
        TopRightData.map((p , index)=>{
          return (
            <div key={index}>
            <ToolCard desc={p.desc} img={p.img} title={p.title}/>

            </div>
          )
        })
      }  

    </div>
  )
}

export default TopRight
