import { CompanyList } from "./company-list";

const CompanyListLogo = () => {
  return (
    <div className="flex flex-wrap justify-center item-center flex-row pt-4 pb-4 gap-10">
      {CompanyList.map((p, index) => {
        return (
          <div key={index} className="">
            <img
              src={p.img}
              alt=""
              className="  cursor-pointer h-[25px]"
            />
          </div>
        );
      })}
    </div>
  );
};

export default CompanyListLogo;
