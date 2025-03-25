import { AppStoreLogo } from "../../../../lib/images/section-1/navbar/navbar"
import { PlayStoreLogo } from "../../../../lib/images/section-1/navbar/navbar"

const LeftPartSection6 = () => {
  return (
    <div className="flex-1  flex flex-col gap-10 pt-20 pb-8">

      {/* p tag  */}
      <div>
      <p className="lg:text-[44px] md:text-[40px] sm:text-[35px] text-[30px] font-bold">Manage all projects from your mobile</p>
      <p>Download the app to manage your projects, keep track of the progress and complete tasks without procastinating. Stay on track and complete on time!</p>
      </div>


      {/* text and logo  */}
      <div className="flex flex-col gap-3">
        <p className="font-medium">
          Get the App
        </p>

        <div className="flex items-center  gap-4  ">
        {/* PlayStore and AppAtore Logo  */}
        <div className="flex flex-col gap-4 ">
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
      </div>
      
    </div>
  )
}

export default LeftPartSection6
