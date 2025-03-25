import { Logo } from "../../../../../lib/images/section-1/navbar/navbar";
import { PlayStoreLogo } from "../../../../../lib/images/section-1/navbar/navbar";
import { AppStoreLogo } from "../../../../../lib/images/section-1/navbar/navbar";
import { MenuIcon } from "../../../../../lib/images/section-1/navbar/navbar";
const Navbar = () => {
  return (
    <div className="flex items-center  justify-between  pt-5 gap-3 ">
      {/* Logo And List*/}
      <div className="flex  items-center gap-6 lg:gap-12">
        {/* Logo  */}
        <div>
          <img
            src={Logo}
            alt="Image Not Found"
            className="w-[125px] h-[30px] cursor-pointer "
          />
        </div>

        {/* List  */}
        <div className="md:flex hidden md:gap-6 ">
          <PTag title="Features" />
          <PTag title="Pricing" />
          <PTag title="Careers" />
          <PTag title="Help" />
        </div>
      </div>

      {/* Playstore AppStore And Menu Logo */}
      <div className="flex items-center  gap-4  ">
        {/* PlayStore and AppAtore Logo  */}
        <div className="sm:flex sm:gap-3 hidden ">
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

        {/*  Menu Button  */}
        <div className="md:hidden ">
          <img src={MenuIcon} alt="" className="w-[35px] h-[35px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// PTag Function

interface IPTag{
    title : string,
    className ?: string
}

function PTag({ title , className}: IPTag) {
  return <p className={  `cursor-pointer text-[14px] font-medium ${className}`} >{title}</p>;
}
