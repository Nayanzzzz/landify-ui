import { FooterLogo } from "../../../../lib/images/section-7/section-7";

const LeftSection7 = () => {
  return (
    <div className="flex-2  flex flex-col gap-3">
      {/* footer logo  */}
      <div>
        <img src={FooterLogo} alt="" className="h-10" />
      </div>

      {/* text field  */}
      <div className="flex flex-row pt-2 gap-5">
        <p className="cursor-pointer">Download Now</p>
        <p className="cursor-pointer">License</p>
      </div>

      {/* list  */}
      <div className="flex flex-row flex-wrap md:gap-5 gap-4">
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Features</p>
        <p className="cursor-pointer">Pricing</p>
        <p className="cursor-pointer">News</p>
        <p className="cursor-pointer">Help</p>
        <p className="cursor-pointer">Contact</p>
      </div>

      {/* copyright  */}
      <div className="pt-2">
        <p className="opacity-70">@2021 landify UI Kit. All rights reserved</p>
      </div>
    </div>
  );
};

export default LeftSection7;
