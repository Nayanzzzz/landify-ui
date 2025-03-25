import { PlayStoreLogo } from "../../../../lib/images/section-1/navbar/navbar"
import { AppStoreLogo } from "../../../../lib/images/section-1/navbar/navbar"

const RightSection7 = () => {
  return (
    <div className="flex-1  flex flex-col gap-5 pt-5 sm:pt-0 sm:items-end ">

        
        <p className="text-xl pr-3">Get the App
        </p> 
        
      

    
        {/* PlayStore and AppAtore Logo  */}
        <div className=" flex flex-col gap-4">
          <img
            src={PlayStoreLogo}
            alt="Image Not Found"
            className="w-[120px] h-[35px]  cursor-pointer"
          />
          <img
            src={AppStoreLogo}
            alt="Image Not Found"
            className="w-[120px] h-[35px] cursor-pointer "
          />
        </div>
        
    </div>
  )
}

export default RightSection7
