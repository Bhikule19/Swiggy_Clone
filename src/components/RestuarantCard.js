import { CDN_URL } from "../utils/constant";
// import starIcon from "../icons/star";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestuarantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    sla,
    areaName,
  } = resData?.info; // destructuring

  // console.log(resData.info);

  return (
    <div className=" p-0">
      <div className="grid gap-3 grid-flow-row justify-stretch items-center	 ">
        <div className="w-[250px] h-[170px] drop-shadow-md  hover:scale-110 transition ease-out delay-150 duration-300">
          <div className="w-full	h-full rounded-2xl overflow-hidden">
            <img
              className="res-logo	w-full h-full object-cover "
              src={CDN_URL + cloudinaryImageId}
            ></img>
          </div>
        </div>
        <div className="ml-3  ">
          <div>
            <h4 className="text-breakwords">{name}</h4>
          </div>
          <div className="grid grid-flow-col gap-1 justify-start ">
            <div>
              <FontAwesomeIcon icon={faStar} className="text-green-900" />
            </div>
            <div className="text-[#02060c] opacity-80	font-bold">
              <span>
                {avgRating} • {sla.deliveryTime} mins
              </span>
            </div>
          </div>
          <div className="grid ">
            <div className="single-text-breakwords">{cuisines.join(", ")}</div>
            <div className="text-[#02060c] opacity-80">{areaName}</div>
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
