import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { Link } from "react-router-dom";
import cartSlice, { clearCart } from "../utils/cartSlice";
// import { CART_GIF } from "../utils/constant";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems);

  const dispatch = useDispatch();

  const handlClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 mt-8 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
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
              srcSet="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif"
              className="w-[50%] h-[50%] m-auto"
            />
            <h2 className="font-bold text-lg">Add items to your Cart</h2>
            <Link to="/">
              <button className="p-2 m-2 bg-black text-white rounded-lg">
                Start Looking
              </button>
            </Link>
          </div>
        )}

        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
