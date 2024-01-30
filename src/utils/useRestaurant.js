import { useEffect, useState } from "react";

const useRestaurant = (resId, apiEndpoint) => {
  const [resInfo, setResInfo] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    fetchData();
  }, [apiEndpoint]); // Trigger useEffect when apiEndpoint changes

  // const fetchData = async () => {
  //   const data = await fetch(
  //     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0177989&lng=72.84781199999999&restaurantId=${resId}`
  //   );
  //   const json = await data.json();
  //   setResInfo(json.data);

  // };
  const fetchData = async () => {
    const data = await fetch(apiEndpoint);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurant;
