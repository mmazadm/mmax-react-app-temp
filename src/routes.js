import React from "react";

//layouts
import Default from "./layouts/Default";

//views
import AboutUs from "./views/AboutUs";
import UnderConstruction from "./views/UnderConstruction";
import MobileApp from "./views/MobileApp";
import SellEquipment from "./views/SellEquipment";
import Financing from "./views/Financing";
import SearchPage from "./views/Search";
import Home from "./views/Home";

const appRoutes = [
    {
        element:<Default/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about-us',
                element:<AboutUs/>
            },
            {
                path:'/mobile-apps',
                element:<MobileApp/>
            },
            {
                path:'/sell-your-equipment',
                element:<SellEquipment/>
            },
            {
                path:'/financing',
                element:<Financing/>
            },
            {
                path:'/search',
                element:<SearchPage/>
            },
            {
                path: '*',
                element:<UnderConstruction/>
            }
        ]
    }
];

export default appRoutes;