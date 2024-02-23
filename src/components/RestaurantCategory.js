import ItemsList from "./ItemsList";
import { useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurantCategory = ({ data, showItems, setshowItems }) => {
  const HandleClick = () => {
    //Toggle accordion feature to show the menu items
    setshowItems(!showItems);

    // setshowItems();
  };

  console.log(data);
  return (
    <div>
      <div className="relative block">
        <div className="main-container relative mt-6 mb-4 mx-4 ">
          <button
            className="w-full flex justify-between pr-4 text-[1.15rem] border-none cursor-pointer outline-none text-left"
            onClick={HandleClick}
          >
            <h3 className="text-[#3e4152] font-bold text-xl inline-block leading-tight	">
              <span>
                {data.title} ({data.itemCards.length})
              </span>
            </h3>
            <span className="font-normal	leading-tight">
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </button>
        </div>

        {showItems && <ItemsList items={data.itemCards} />}
        <div className="divider">
          <hr className=" border-[4px] border-solid  bg-[rgb(240, 240, 245)] mb-5 "></hr>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
