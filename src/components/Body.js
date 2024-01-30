import RestuarantCard, { withVegLabel } from "./RestuarantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useMediaQuery } from "react-responsive";
import {
  Banner_Cuisines_IMG,
  REST_API,
  CORS_API,
  MOB_REST_API,
} from "../utils/constant";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

const Body = () => {
  const [searchText, setsearchTExt] = useState("");

  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [mobListOfRestaurant, setMoblistOfRestaurant] = useState([]);

  const [filteredRest, setfilteredRest] = useState([]);
  const [mobFilteredRest, setMobFilteredRest] = useState([]);

  const [bannerHeading, setBannerHeading] = useState("");
  const [mobBannerHeading, setMobBannerHeading] = useState("");

  const [cuisinesList, setCuisinesList] = useState([]);
  const [mobCuisinesList, setMobCuisinesList] = useState([]);

  const [restChainHeading, setRestChainHeading] = useState("");
  const [mobRestChainHeading, setMobRestChainHeading] = useState("");

  const [restChainList, setRestChainList] = useState([]);
  const [mobRestChainList, setMobRestChainList] = useState([]);

  const [restListHeading, setRestListHeading] = useState([]);
  const [mobRestListHeading, setMobRestListHeading] = useState([]);

  const RestaurantCardVeg = withVegLabel(RestuarantCard);

  const [dataFromFirstAPI, setDataFromFirstAPI] = useState([]);
  const [dataFromSecondAPI, setDataFromSecondAPI] = useState([]);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" }); // Define mobile screen size

  useEffect(() => {
    // fetchData();
    fetch(CORS_API + REST_API)
      .then((response) => response.json())
      .then((data) => {
        setDataFromFirstAPI(data);
        setlistOfRestaurant(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setfilteredRest(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setBannerHeading(data?.data?.cards[0]?.card?.card?.header?.title);

        setCuisinesList(data?.data?.cards[0]?.card?.card?.imageGridCards?.info);

        setRestChainHeading(data?.data?.cards[1]?.card?.card?.header?.title);

        setRestChainList(
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setRestListHeading(data?.data?.cards[2]?.card?.card?.title);
      })
      .catch((error) =>
        console.error("Error fetching data from the first API:", error)
      );

    // Fetch data from the second API
    fetch(MOB_REST_API)
      .then((response) => response.json())
      .then((data) => {
        setDataFromSecondAPI(data);
        setMoblistOfRestaurant(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setMobFilteredRest(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setMobBannerHeading(data?.data?.cards[0]?.card?.card?.header?.title);

        setMobCuisinesList(
          data?.data?.cards[0]?.card?.card?.imageGridCards?.info
        );

        setMobRestChainHeading(data?.data?.cards[1]?.card?.card?.header?.title);

        setMobRestChainList(
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setMobRestListHeading(data?.data?.cards[2]?.card?.card?.title);
      })
      .catch((error) =>
        console.error("Error fetching data from the second API:", error)
      );
  }, []);

  // console.log("List of restaurants", mobListOfRestaurant);
  // console.log("filterest rest", mobFilteredRest);
  // console.log("benner heading", bannerHeading);
  // console.log("cuisines list", mobCuisinesList.slice(-10));
  // console.log("rest chain heading", restChainHeading);
  // console.log("rest chain listing", mobRestChainList);
  // console.log("rest list heading", restListHeading);

  // console.log(dataFromFirstAPI);
  // console.log("Mobile Data API =", dataFromSecondAPI);

  // const fetchData = async () => {
  //   const data = await fetch(CORS_API + REST_API);
  //   const json = await data.json();

  //   // console.log(json);

  // };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you are offline</h1>;

  const { setUserName, loggedInUser } = useContext(UserContext);

  const cuisineSlideLeft = () => {
    var slider = document.getElementById("cuisineSlider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const cuisineSlideRight = () => {
    var slider = document.getElementById("cuisineSlider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const restaurantSlideLeft = () => {
    var slider = document.getElementById("restaurantChainSlider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const restaurantSlideRight = () => {
    var slider = document.getElementById("restaurantChainSlider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  //Conditional Rendering using Ternary operator
  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      {isMobile ? (
        mobListOfRestaurant?.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="body px-5 font-[ProximaNova,arial,Helvetica Neue,sans-serif] mt-[100px]  ">
            <div className="px-0">
              {/* ------------------------Banner start------------------- */}

              <div className="banner p-4">
                <div className="banner-heading  font-bold text-2xl flex justify-between	mb-2">
                  <h1 className="text-xl font-extrabold text-[#02060ceb]">
                    {mobBannerHeading}
                  </h1>
                </div>

                <div className="overflow-x-scroll overflow-y-hidden no-scrollbar ">
                  <div className="flex " id="cuisineSlider">
                    <div className="flex gap-4">
                      {mobCuisinesList.slice(0, 10).map((cuisine) => (
                        <div className="w-20 h-24" key={cuisine.id}>
                          <img
                            className="w-20 h-24"
                            src={Banner_Cuisines_IMG + cuisine.imageId}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4" id="cuisineSlider">
                    <div className="flex gap-4">
                      {mobCuisinesList.slice(-10).map((cuisine) => (
                        <div className="w-20 h-24" key={cuisine.id}>
                          <img
                            className="w-full h-full"
                            src={Banner_Cuisines_IMG + cuisine.imageId}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------Banner End------------------- */}

              <div className="divider">
                <hr className=" border-[1px] bg-[rgb(240, 240, 245)] m-4"></hr>
              </div>

              {/* -------------------------Rest Chain section start ------------------------ */}

              <div className="rest-chain-section flex flex-col mb-8">
                <div className="res-chain-heading mb-5 flex justify-between text-2xl font-bold text-[#02060ceb]">
                  <h1 className="text-xl font-extrabold text-[#02060ceb]">
                    {mobRestChainHeading}
                  </h1>
                </div>
                <div className="rest-chain-list">
                  <div
                    className="top-rated-rest-chain-list flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar gap-5 "
                    id="restaurantChainSlider"
                  >
                    {mobRestChainList.map((topratedrest) => (
                      <Link
                        key={topratedrest.info.id}
                        to={"/restaurants/" + topratedrest.info.id}
                      >
                        {
                          <RestuarantCard
                            mobResData={topratedrest}
                            resData={topratedrest}
                            isMobile={isMobile}
                            className="text-breakwords "
                          ></RestuarantCard>
                        }
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* -------------------------Rest Chain section End ------------------------ */}

              <div className="divider">
                <hr className=" bborder-[1px] bg-[rgb(240, 240, 245)] m-4"></hr>
              </div>

              {/* ---------------------------------Restaurant list start--------------------------------- */}

              <div className="res-container">
                <div className="reslist-header mb-5">
                  <h2 className="font-bold text-xl ">{mobRestListHeading}</h2>
                </div>
                <div className="grid grid-cols-2 justify-center items-start  ">
                  {
                    mobListOfRestaurant.map((restuarant) => (
                      <Link
                        key={restuarant.info.id}
                        to={"/restaurants/" + restuarant.info.id}
                        className=""
                      >
                        {restuarant.info.veg ? (
                          <RestaurantCardVeg
                            resData={restuarant}
                            mobResData={restuarant}
                            isMobile={isMobile}
                            className="text-breakwords "
                          />
                        ) : (
                          <RestuarantCard
                            resData={restuarant}
                            mobResData={restuarant}
                            isMobile={isMobile}
                            className="text-breakword"
                          />
                        )}
                      </Link>
                    )) // Looping over arrray using Map
                  }
                </div>
              </div>

              {/* ---------------------------------Restaurant list end--------------------------------- */}
            </div>
          </div>
        )
      ) : //Larger Screen Size
      listOfRestaurant.length === 0 ? (
        <Shimmer />
      ) : (
        <div
          className="body px-[7rem] font-[ProximaNova,arial,Helvetica N
          eue,sans-serif] mt-[100px] "
        >
          <div className="px-20">
            {/* ------------------------Banner start------------------- */}

            <div className="banner p-4">
              <div className="banner-heading  font-bold text-2xl flex justify-between	mb-2">
                <h1>{bannerHeading}</h1>
                <div className="flex">
                  <IoArrowBackCircle
                    className="m-1 opacity-30 hover:opacity-80 cursor-pointer"
                    onClick={cuisineSlideLeft}
                    size={35}
                  />
                  <IoArrowForwardCircle
                    className="m-1 opacity-30 hover:opacity-80 cursor-pointer"
                    onClick={cuisineSlideRight}
                    size={35}
                  />
                </div>
              </div>
              {/* //Content for Larger device */}
              <div
                className="flex overflow-x-auto scroll scroll-smooth whitespace-nowrap no-scrollbar"
                id="cuisineSlider"
              >
                <div className="flex gap-4">
                  {cuisinesList.map((cuisine) => (
                    <div className="w-[150px]" key={cuisine.id}>
                      <img
                        className="w-full h-full"
                        src={Banner_Cuisines_IMG + cuisine.imageId}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ------------------------Banner End------------------- */}

            <div className="divider">
              <hr className=" border-[1px] bg-[rgb(240, 240, 245)] m-4"></hr>
            </div>

            {/* -------------------------Rest Chain section start ------------------------ */}

            <div className="rest-chain-section flex flex-col mb-8">
              <div className="res-chain-heading mb-5 flex justify-between text-2xl font-bold text-[#02060ceb]">
                <h1>{restChainHeading}</h1>
                <div className="flex">
                  <IoArrowBackCircle
                    className="m-1 opacity-30 hover:opacity-80 cursor-pointer"
                    onClick={restaurantSlideLeft}
                    size={35}
                  />
                  <IoArrowForwardCircle
                    className="m-1 opacity-30 hover:opacity-80 cursor-pointer"
                    onClick={restaurantSlideRight}
                    size={35}
                  />
                </div>
              </div>
              <div className="rest-chain-list">
                <div
                  className="top-rated-rest-chain-list flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar gap-10 "
                  id="restaurantChainSlider"
                >
                  {restChainList.map((topratedrest) => (
                    <Link
                      key={topratedrest.info.id}
                      to={"/restaurants/" + topratedrest.info.id}
                    >
                      {
                        <RestuarantCard
                          resData={topratedrest}
                          mobResData={topratedrest}
                          isMobile={isMobile}
                          className="text-breakwords "
                        ></RestuarantCard>
                      }
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* -------------------------Rest Chain section End ------------------------ */}

            <div className="divider">
              <hr className=" bborder-[1px] bg-[rgb(240, 240, 245)] m-4"></hr>
            </div>

            {/* ---------------------------------Restaurant list start--------------------------------- */}

            <div className="res-container">
              <div className="reslist-header mb-5">
                <h2 className="font-bold text-2xl  ">{restListHeading}</h2>
              </div>
              <div className="filter-buttons flex items-center">
                <div className="rating-button mr-4">
                  <button
                    className="p-2 border border-black rounded-3xl border-opacity-30 cursor-pointer active:bg-orange-400"
                    onClick={() => {
                      const filteredList = listOfRestaurant.filter(
                        (res) => res.info.avgRating > 4.5
                      );
                      setlistOfRestaurant(filteredList);
                    }}
                  >
                    Rating 4.5+
                  </button>
                </div>
                <div className="fastdelivery-button mr-4">
                  <button
                    className="p-2 border border-black rounded-3xl border-opacity-30 cursor-pointer active:bg-orange-400"
                    onClick={() => {
                      const filteredList = listOfRestaurant.filter(
                        (res) => res.info.sla.deliveryTime < 30
                      );
                      setlistOfRestaurant(filteredList);
                    }}
                  >
                    Fast Delivery
                  </button>
                </div>
                <div className="cost-300 mr-4">
                  <button
                    className="p-2 border border-black rounded-3xl border-opacity-30 cursor-pointer active:bg-orange-400"
                    onClick={() => {
                      const filteredList = listOfRestaurant.filter((res) => {
                        const price = res.info.costForTwo?.substring(1, 4);
                        if (price <= "300") return price;
                      });
                      setlistOfRestaurant(filteredList);
                    }}
                  >
                    Less than Rs. 300
                  </button>
                </div>
                <div className="cost-300-600 mr-4">
                  <button
                    className="p-2 border border-black rounded-3xl border-opacity-30 cursor-pointer active:bg-orange-400"
                    onClick={() => {
                      const filteredList = listOfRestaurant.filter((res) => {
                        const price = res.info.costForTwo?.substring(1, 4);
                        if (price >= "300" && price <= "600") return price;
                      });
                      setlistOfRestaurant(filteredList);
                    }}
                  >
                    Rs. 300 - Rs. 600
                  </button>
                </div>
                {/* <div className="Pure-Veg">
              <button
                className="p-2 border border-black rounded-3xl border-opacity-30 cursor-pointer active:bg-orange-400"
                onClick={() => {
                  const filteredList = listOfRestaurant.filter((res) => {
                    res.info.veg === true;
                  });
                  setlistOfRestaurant(filteredList);
                }}
              >
                Pure Veg
              </button>
            </div> */}
              </div>
              <div className="grid grid-cols-4  items-start gap-8 my-8 ">
                {
                  listOfRestaurant.map((restuarant) => (
                    <Link
                      key={restuarant.info.id}
                      to={"/restaurants/" + restuarant.info.id}
                    >
                      {restuarant.info.veg ? (
                        <RestaurantCardVeg
                          resData={restuarant}
                          mobResData={restuarant}
                          isMobile={isMobile}
                        />
                      ) : (
                        <RestuarantCard
                          resData={restuarant}
                          mobResData={restuarant}
                          isMobile={isMobile}
                        />
                      )}
                    </Link>
                  )) // Looping over arrray using Map
                }
              </div>
            </div>

            {/* ---------------------------------Restaurant list end--------------------------------- */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
