import BottomLeft from "./bottom-left/bottom-left"
import BottomRight from "./bottom-right/bottom-right"
import TopLeft from "./top-left/top-left"
import TopRight from "./top-right/top-right"


const Section5 = () => {
  return (
    <div className="px-10 md:px-20 pt-10">

      <div className="flex md:flex-row flex-col">
      <TopLeft/>
        <TopRight/>
        
      </div>

      <div className="flex flex-row">
      <BottomLeft/>
        <BottomRight/>
        
      </div>
    </div>
  )
}

export default Section5
