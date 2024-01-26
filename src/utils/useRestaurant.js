import { useEffect, useState } from "react";

const useRestaurant = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0177989&lng=72.84781199999999&restaurantId=${resId}`
    );
    const json = await data.json();
    setResInfo(json.data);
    // console.log(json);
  };
  return resInfo;
};

export default useRestaurant;
