
import { BottomRightImg1 } from "../../../../lib/images/section-5/bottom-right"
import { BottomRightImg2 } from "../../../../lib/images/section-5/bottom-right"
import { BottomRightImg3 } from "../../../../lib/images/section-5/bottom-right"
import { BottomRightImg4 } from "../../../../lib/images/section-5/bottom-right"
import { BottomRightImg5 } from "../../../../lib/images/section-5/bottom-right"
import { BottomRightImg6 } from "../../../../lib/images/section-5/bottom-right"
import { BottomRightImg7 } from "../../../../lib/images/section-5/bottom-right"

const BottomRight = () => {
  return (
    

     
      <div className="  md:flex-2 flex-1 bg-[url(circle.png)] bg-contain bg-center bg-no-repeat  flex flex-col justify-center md:gap-10 gap-7 sm:gap-9 top-0">

          <div className="flex flex-row  w-full justify-center  md:gap-15 gap-8 sm:gap-12 sm:pt-15 pt-10">
          <img src={BottomRightImg1} alt="" className="md:h-10 sm:h-9 h-8"/>
          <img src={BottomRightImg2} alt="" className="md:h-10 sm:h-9 h-8"/>
          <img src={BottomRightImg3} alt="" className="md:h-10 sm:h-9 h-8"/>
          <img src={BottomRightImg4} alt="" className="md:h-10 sm:h-9 h-8"/>
          </div>
          
            <div className="flex flex-row w-full  justify-center md:gap-15 sm:gap-12 gap-8 pl-8 pr-8 sm:pb-15 pb-10">
            <img src={BottomRightImg5} alt="" className="md:h-10 sm:h-9 h-8"/>
          <img src={BottomRightImg6} alt="" className="md:h-10 sm:h-9 h-8"/>
          <img src={BottomRightImg7} alt="" className="md:h-10 sm:h-9 h-8"/>
            </div>
          
      </div >
         
     


      
    // </div>
  )
}

export default BottomRight
