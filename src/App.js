import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext"
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  //authentication
  useEffect(() => {
    const data = {
      name: "Tanisha Verma",
    };
    setUserInfo(data.name);
  }, []);

  return (
    <UserContext.Provider value={{loggedInUser: userInfo}} >
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <ResturantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
