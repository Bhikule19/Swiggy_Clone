import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { MENU_URL, MENU_CAROUSAL } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";
// import VegButton from "../utils/vegButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faStar,
  faBicycle,
  faCircleHalfStroke,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
const RestaurantMenu = () => {
  const [showItems, setshowItems] = useState(0);

  const { resId } = useParams();

  const resInfo = useRestaurant(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    areaName,
    sla,
    totalRatingsString,
    feeDetails,
  } = resInfo?.cards[0]?.card?.card?.info || {};

  const offerData =
    resInfo?.cards[1].card.card.gridElements.infoWithStyle.offers;

  // console.log(offerData);

  // const offerTag = offerData.info;

  // console.log(offerTag);

  const carouselMenu =
    resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .carousel;

  // console.log(
  //   resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
  //     .carousel
  // );

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
      (card) => card?.card?.card?.itemCards
    )?.card?.card || {};

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // const vegButtonClick = () => {
  //   return console.log("clicked");
  // };

  return (
    <div className="max-w-[800px] min-h-[800px]  mt-[100px] mx-auto mb-0">
      <div className="RestHeader-container mx-4">
        <div className="RestHead-wrapper mb-5">
          <div className="RestHead-wrapper inline-block	mr-4 ">
            <div>
              <p className="text-[1.43rem] font-semibold text-[#282c3f] mb-2">
                {name}
              </p>
              <p className="text-[0.93rem] text-[#7e808c] overflow-hidden whitespace-nowrap	text-ellipsis	">
                {cuisines.join(", ")}
              </p>
            </div>
            <div className="restNameAdd-wrapper flex items-center h-4 text-[0.93rem] text-[#7e808c]">
              <p className="mr-1">{areaName}, </p>{" "}
              <p>{sla.lastMileTravelString}</p>
            </div>
          </div>
          <button className="RestRating-wrapper border-2 border-solid	border-[#e9e9eb] shadow-[0 1px 5px #f9f9f9] rounded-md text-center p-2 max-w-[100px] float-right">
            <span className="ratings text-[#3d9b6d] pb-3 border-b-2 border-[#e9e9eb] border-solid font-bold mb-2 block ">
              <span>
                <FontAwesomeIcon icon={faStar} className="font-normal mr-2" />
              </span>
              <span>{avgRating}</span>
            </span>
            <span className="text-xs text-[#8b8d97] font-bold">
              {totalRatingsString}
            </span>
          </button>
        </div>
        <ul className="list-none	">
          <li className="mb-5 text-[#7e808c] flex items-start ">
            <FontAwesomeIcon icon={faBicycle} className="mr-2" />
            <span className="grow ">{feeDetails.message}</span>
          </li>
        </ul>
        <div className="divider">
          <hr className=" border-[1px] border-dashed  bg-[rgb(240, 240, 245)] mb-5 "></hr>
        </div>
        <div className="RestHeader-marginBottom mb-5 ">
          <ul className="text-[#3e4152] text-sm font-bold list-none">
            <li className="mr-6 inline-block">
              <FontAwesomeIcon icon={faCircleHalfStroke} className="mr-1" />
              <span>{sla.slaString}</span>
            </li>
            <li className="inline-block">
              <FontAwesomeIcon icon={faIndianRupeeSign} className="mr-1" />
              <span>{costForTwoMessage}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="offers-stickers">
        <div className="pb-4 px-3">
          <div className="offers-scroll flex overflow-x-scroll no-scrollbar overflow-y-hidden flex-col ">
            <div className="mb-2 flex">
              {offerData[0] ? (
                <div className="offers-slider me-3 shrink-0	">
                  <button className="flex border-[1px] border-solid border-[#e9e9eb] box-border shadow-[0 1px 2px rgba(0,0,0,.04 p-2 h-full min-w-[200px] items-center rounded-lg">
                    <div className="restOffer-container flex">
                      {offerData[0].info.offerTag ? (
                        <p className="font-semibold	text-xs text-[#E46D6B] vertical-lr rotate-180	pl-1 items-center border-l-[1px] border-l-solid border-l-[#e9e9eb]">
                          {offerData[0].info.offerTag}
                        </p>
                      ) : null}
                      <div className="ml-2 my-1 flex flex-col self-stretch	justify-center">
                        <div className="flex items-center">
                          <img
                            srcSet="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart"
                            className="w-5 h-5 mr-2"
                          />
                          <p className="text-sm font-bold whitespace-nowrap text-[#686b78]">
                            {offerData[0].info.header}
                          </p>
                        </div>
                        <div className="text-[10px] text-[#93959f] mt-1 text-ellipsis	overflow-hidden whitespace-nowrap	max-w-[200px] font-bold">
                          <span className=" whitespace-nowrap text-[#93959f] font-bold px-1">
                            {offerData[0].info.couponCode}
                          </span>
                          |
                          <span className=" whitespace-nowrap text-[#93959f] font-bold px-1">
                            {offerData[0].info.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ) : null}

              {offerData[1] ? (
                <div className="offers-slider me-3 shrink-0	">
                  <button className="flex border-[1px] border-solid border-[#e9e9eb] box-border shadow-[0 1px 2px rgba(0,0,0,.04)] p-2 h-full min-w-[200px] items-center rounded-lg">
                    <div className="restOffer-container flex">
                      {offerData[1].info.offerTag ? (
                        <p className="font-semibold	text-xs text-[#E46D6B] vertical-lr rotate-180	pl-1 items-center border-l-[1px] border-l-solid border-l-[#e9e9eb]">
                          {offerData[1].info.offerTag}
                        </p>
                      ) : null}
                      <div className="ml-2 my-1 flex flex-col self-stretch	justify-center">
                        <div className="flex items-center">
                          <img
                            srcSet="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart"
                            className="w-5 h-5 mr-2"
                          />
                          <p className="text-sm font-bold whitespace-nowrap text-[#686b78]">
                            {offerData[1].info.header}
                          </p>
                        </div>
                        <div className="text-[10px] text-[#93959f] mt-1 text-ellipsis	overflow-hidden whitespace-nowrap	max-w-[200px] font-bold">
                          <span className=" whitespace-nowrap text-[#93959f] font-bold px-1">
                            {offerData[1].info.couponCode}
                          </span>
                          |
                          <span className=" whitespace-nowrap text-[#93959f] font-bold px-1 ">
                            {offerData[1].info.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ) : null}

              {offerData[2] ? (
                <div className="offers-slider me-3 shrink-0	">
                  <button className="flex border-[1px] border-solid border-[#e9e9eb] box-border shadow-[0 1px 2px rgba(0,0,0,.04)] p-2 h-full min-w-[200px] items-center rounded-lg">
                    <div className="restOffer-container flex">
                      {offerData[2].info.offerTag ? (
                        <p className="font-semibold	text-xs text-[#E46D6B] vertical-lr rotate-180	pl-1 items-center border-l-[1px] border-l-solid border-l-[#e9e9eb]">
                          {offerData[2].info.offerTag}
                        </p>
                      ) : null}
                      <div className="ml-2 my-1 flex flex-col self-stretch	justify-center">
                        <div className="flex items-center">
                          <img
                            srcSet="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/rng/md/ads/production/32b9f8a87957f8c1ca369622f6a1ca77"
                            className="w-5 h-5 mr-2"
                          />
                          <p className="text-sm font-bold whitespace-nowrap text-[#686b78]">
                            {offerData[2].info.header}
                          </p>
                        </div>
                        <div className="text-[10px] text-[#93959f] mt-1 text-ellipsis	overflow-hidden whitespace-nowrap	max-w-[200px] font-bold">
                          <span className=" whitespace-nowrap text-[#93959f] font-bold px-1">
                            {offerData[2].info.couponCode}
                          </span>
                          |
                          <span className=" whitespace-nowrap text-[#93959f] font-bold px-1">
                            {offerData[2].info.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ) : null}

              {offerData[3] ? (
                <div className="offers-slider me-3 shrink-0	">
                  <button className="flex border-[1px] border-solid border-[#e9e9eb] box-border shadow-[0 1px 2px rgba(0,0,0,.04)] p-2 h-full min-w-[200px] items-center rounded-lg">
                    <div className="restOffer-container flex">
                      {offerData[2].info.offerTag ? (
                        <p className="font-semibold	text-xs text-[#E46D6B] vertical-lr rotate-180	pl-1 items-center border-l-[1px] border-l-solid border-l-[#e9e9eb]">
                          {offerData[2].info.offerTag}
                        </p>
                      ) : null}
                      <div className="ml-2 my-1 flex flex-col self-stretch	justify-center">
                        <div className="flex items-center">
                          <img
                            srcSet="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/rng/md/ads/production/7f31c9e47ddd7e6a3c16d21553c0ca60"
                            className="w-5 h-5 mr-2"
                          />
                          <p className="text-sm font-bold whitespace-nowrap text-[#686b78]">
                            {offerData[3].info.header}
                          </p>
                        </div>
                        <div className="text-[10px] text-[#93959f] mt-1 text-ellipsis	overflow-hidden whitespace-nowrap	max-w-[200px] font-bold">
                          <span className=" whitespace-nowrap text-[#93959f] font-bold px-1">
                            {offerData[3].info.couponCode}
                          </span>
                          |
                          <span className=" whitespace-nowrap text-[#93959f] font-bold px-1">
                            {offerData[3].info.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ) : null}

              {offerData[4] ? (
                <div className="offers-slider me-3 shrink-0	">
                  <button className="flex border-[1px] border-solid border-[#e9e9eb] box-border shadow-[0 1px 2px rgba(0,0,0,.04)] p-2 h-full min-w-[200px] items-center rounded-lg">
                    <div className="restOffer-container flex">
                      {offerData[4].info.offerTag ? (
                        <p className="font-semibold	text-xs text-[#E46D6B] vertical-lr rotate-180	pl-1 items-center border-l-[1px] border-l-solid border-l-[#e9e9eb]">
                          {offerData[4].info.offerTag}
                        </p>
                      ) : null}
                      <div className="ml-2 my-1 flex flex-col self-stretch	justify-center">
                        <div className="flex items-center">
                          <img
                            srcSet="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/rng/md/ads/production/7f31c9e47ddd7e6a3c16d21553c0ca60"
                            className="w-5 h-5 mr-2"
                          />
                          <p className="text-sm font-bold whitespace-nowrap text-[#686b78]">
                            {offerData[4].info.header}
                          </p>
                        </div>
                        <div className="text-[10px] text-[#93959f] mt-1 text-ellipsis	overflow-hidden whitespace-nowrap	max-w-[200px] font-bold">
                          <span className=" whitespace-nowrap text-[#93959f] font-bold px-1">
                            {offerData[4].info.couponCode}
                          </span>
                          |
                          <span className=" whitespace-nowrap text-[#93959f] font-bold px-1">
                            {offerData[4].info.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="veg-button">
        <div className=" ">{/* <VegButton></VegButton> */}</div>
        <div className="divider">
          <hr className=" border-[1px] border-solid  bg-[rgb(240, 240, 245)] mb-5 "></hr>
        </div>
      </div>

      {carouselMenu ? (
        <div className="menu-carousal w-full">
          <h2 className="menuCarousal-header py-0 px-4 mb-6">Top Picks</h2>
          <div className="snap-x	mb-3 scroll-pl-6	overflow-x-auto overflow-y-hidden whitespace-nowrap flex w-full no-scrollbar">
            {carouselMenu[0] ? (
              <div className="carousel-slide ml-4 min-w-[60%] min-h-full snap-center	">
                <div className="card-container calcualedwh rounded-[20px] relative whitespace-normal no-underline	snap-start inline-block">
                  <img
                    className="w-full block rounded-md"
                    srcSet={MENU_CAROUSAL + carouselMenu[0].creativeId}
                  />
                </div>
              </div>
            ) : null}
            {carouselMenu[1] ? (
              <div className="carousel-slide ml-4 min-w-[60%] min-h-full snap-center	">
                <div className="card-container calcualedwh rounded-[20px] relative whitespace-normal no-underline	snap-start inline-block">
                  <img
                    className="w-full block rounded-md"
                    srcSet={MENU_CAROUSAL + carouselMenu[1].creativeId}
                  />
                </div>
              </div>
            ) : null}
            {carouselMenu[2] ? (
              <div className="carousel-slide ml-4 min-w-[60%] min-h-full snap-center	">
                <div className="card-container calcualedwh rounded-[20px] relative whitespace-normal no-underline	snap-start inline-block">
                  <img
                    className="w-full block rounded-md"
                    srcSet={MENU_CAROUSAL + carouselMenu[2].creativeId}
                  />
                </div>
              </div>
            ) : null}
            {carouselMenu[3] ? (
              <div className="carousel-slide ml-4 min-w-[60%] min-h-full snap-center	">
                <div className="card-container calcualedwh rounded-[20px] relative whitespace-normal no-underline	snap-start inline-block">
                  <img
                    className="w-full block rounded-md"
                    srcSet={MENU_CAROUSAL + carouselMenu[3].creativeId}
                  />
                </div>
              </div>
            ) : null}
          </div>
          <div className="divider">
            <hr className=" border-[4px] border-solid  bg-[rgb(240, 240, 245)] mb-5 "></hr>
          </div>
          <div></div>
        </div>
      ) : null}
      {/* -----------------ACCORDIAN---------------------- */}
      <div>
        {/* Categories accordian */}
        {categories.map((category, index) => (
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card?.title}
            showItems={index === showItems ? true : false}
            setshowItems={() => setshowItems(index)}
          />
        ))}
      </div>
      {/* -----------------ACCORDIAN---------------------- */}
    </div>
  );
};

export default RestaurantMenu;
