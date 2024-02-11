import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { Link } from "react-router-dom";
import cartSlice, { clearCart } from "../utils/cartSlice";
import { useMediaQuery } from "react-responsive";

// import { CART_GIF } from "../utils/constant";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems);

  const dispatch = useDispatch();

  const handlClearCart = () => {
    dispatch(clearCart());
  };

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" }); // Define mobile screen size

  return isMobile ? (
    <div className="text-center m-4 mt-10 p-4 pt-10">
      <div className="h-full relative">
        <ItemsList items={cartItems} />
        {cartItems.length >= 1 && (
          <button
            className="p-[11px_20px] uppercase mt-6 bg-[#fc8019] text-white border-0 outline-0 text-sm text-center font-semibold"
            onClick={handlClearCart}
          >
            Clear Cart
          </button>
        )}

        {cartItems.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center absolute top-0 left-0 right-0 min-h-full pb-8">
            <div className="">
              <img
                srcSet="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/cart_empty_ipmau1"
                className="bg-no-repeat	min-h-[200px] w-full pb-2 bg-contain bg-center m-[0_auto]"
              />
            </div>
            <div className="mt-6 p-[0_60px]">
              <h3 className="font-bold text-lg text-[#282c3f]">
                Good food is always cooking
              </h3>
              <p className="mt-1 text-sm leading-[1.2] text-[#686b78]">
                Your cart is empty. Add something from the menu
              </p>
              <Link to="/">
                <button className="p-[11px_20px] uppercase mt-6 bg-[#fc8019] text-white border-0 outline-0 text-sm text-center font-semibold">
                  see restaurants near you
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="text-center m-4 mt-10 p-4 pt-8">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 max-md:w-full m-auto">
        <ItemsList items={cartItems} />
        {cartItems.length >= 1 && (
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handlClearCart}
          >
            Clear Cart
          </button>
        )}

        {cartItems.length === 0 && (
          <div>
            <img
              srcSet="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
              className="w-[50%] h-[50%] m-auto"
            />
            <h2 className="font-bold text-lg">Your cart is empty</h2>
            <p className="mt-2 text-[#7e808c]">
              You can go to home page to view more restaurants
            </p>
            <Link to="/">
              <button className="p-[11px_20px] uppercase mt-6 bg-[#fc8019] text-white border-0 outline-0 text-base text-center font-semibold">
                see restaurants near you
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
