import { LOGO_URL } from "../utils/constant";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
// import { IoCart } from "react-icons/io5";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <header className="header-shadow fixed top-0 left-0 right-0 h-20 bg-white z-50 header-style p-[0_20px]">
        <div className="block">
          <div className="max-w-[1200px] min-w-[120px] relative m-[0_auto] h-20 bg-white flex items-center">
            <Link className="no-underline	 block h-12">
              <img className="h-10 w-6" srcSet={LOGO_URL} />
            </Link>
            <ul className="flex-[1] min-w-0 flex flex-row-reverse h-full items-center list-none	">
              <li className="mr-0 text-[#3d4152] text-base font-medium">
                <div className="relative">
                  <div className="">
                    <Link to="/cart">Cart - ({cartItems.length})</Link>
                  </div>
                </div>
              </li>
              <li className="mr-[60px] text-[#3d4152] text-base font-medium">
                <div className="relative">
                  <div className="">
                    <Link to="/">Home</Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
