import { Phone1 } from "../../../../lib/images/section-6/section6"
import { Phone2 } from "../../../../lib/images/section-6/section6"

const RightPartSection6 = () => {
  return (
    <div className="flex-1  flex flex-col sm:flex-row">

      {/* first image  */}
      <div className="flex-1 ">
    <img src={Phone1} alt="" className=""/>
      </div>

      {/* second image  */}
      <div className="flex-1  flex items-end">
<img src={Phone2} alt="" className=""/>
      </div>

    </div>
  )
}

export default RightPartSection6
