import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"


import ResCardImg from "../assets/res-card.png"
import Header from "./components/Header";
import Body from "./components/Body";

import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

//Chunking 
//Code Spiliting
//Dynamic Bundling 
//Lazy Loading
//On Demand Loading
//Dynamic Import

const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () =>{ 
    return <div id="app">
        <Header />
        <Outlet />
    

    </div>

}


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:([
            {
                path:"/",
                element:<Body />

            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<ContactUs />
            }
            ,  {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery />
                </Suspense>
            }
            ,  {
                path:"/restaurant/:resId",
                element:<RestaurantMenu />
            }
        ]),
        errorElement:<ErrorPage />
    },  
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)