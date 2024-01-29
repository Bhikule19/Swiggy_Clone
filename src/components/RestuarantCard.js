import { CDN_URL, MOB_CDN_URL } from "../utils/constant";
import { useMediaQuery } from "react-responsive";
// import starIcon from "../icons/star";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestuarantCard = (props) => {
  const { resData, mobResData, isMobile } = props;

  // Destructureing data based on screen size
  const data = isMobile ? mobResData?.info : resData?.info;

  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    sla,
    areaName,
  } = data; // destructuring

  return (
    <div className=" p-0">
      <div className="grid gap-3 max-md:gap-3 grid-flow-row justify-stretch items-center max-md:mb-8">
        <div className="w-[250px] max-md:w-[196px] h-[170px] max-md:h-[164px] drop-shadow-md  hover:scale-110 transition ease-out delay-150 duration-300 ">
          <div className="w-full	h-full rounded-2xl overflow-hidden">
            <img
              className="res-logo	w-full h-full object-cover "
              src={
                isMobile
                  ? MOB_CDN_URL + cloudinaryImageId
                  : CDN_URL + cloudinaryImageId
              }
            ></img>
          </div>
        </div>
        <div className="ml-3 max-md:ml-0 ">
          <div>
            <h4 className="text-breakwords max-md:text-base ">{name}</h4>
          </div>
          <div className="grid grid-flow-col gap-1 justify-start items-center">
            <div>
              <FontAwesomeIcon
                icon={faStar}
                className="text-green-900 max-md:w-4 max-md:h-4"
              />
            </div>
            <div className="text-[#02060c] opacity-80	font-bold max-md:text-sm max-md:font-semibold">
              <span>
                {avgRating} •{" "}
                {isMobile ? sla.slaString : sla.deliveryTime + "mins"}
              </span>
            </div>
          </div>
          <div className="grid ">
            <div className="single-text-breakwords max-md:text-[13px] ">
              {cuisines.join(", ")}
            </div>
            <div className="text-[#02060c] opacity-80 max-md:text-[14px]">
              {areaName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//Higher Order component

export const withVegLabel = (RestuarantCard) => {
  return (props) => {
    return (
      <div className="">
        <label className="absolute bg-green-500 text-white m-2 p-2 rounded-lg">
          Veg
        </label>
        <RestuarantCard {...props} />
      </div>
    );
  };
};

export default RestuarantCard;
