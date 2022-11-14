import React from "react";

//layouts
import Default from "./layouts/Default";

//views
import AboutUs from "./views/AboutUs";
import UnderConstruction from "./views/UnderConstruction";
import MobileApp from "./views/MobileApp";
import SellEquipment from "./views/SellEquipment";
import Financing from "./views/Financing";

const appRoutes = [
    {
        element:<Default/>,
        children:[
            {
                path:'/',
                element:<UnderConstruction/>
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
            }
        ]
    }
];

export default appRoutes;