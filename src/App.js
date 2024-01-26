import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

// const Grocery = lazy(() => import("./components/Grocery"));
// const About = lazy(() => import("./components/About"));

const Applayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //MAke an API call
    const data = {
      name: "Abhishek Bhikule",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      // {
      //   path: "/about",
      //   element: (
      //     <Suspense fallback={<h1>Loading screen.........</h1>}>
      //       <About />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },
      // {
      //   path: "/grocery",
      //   element: (
      //     <Suspense fallback={<h1>Loading screen.........</h1>}>
      //       <Grocery />
      //     </Suspense>
      //   ),
      // },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
