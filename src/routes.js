import React from "react";

//layouts
import Default from "./layouts/Default";

//views
import AboutUs from "./views/AboutUs";
import UnderConstruction from "./views/UnderConstruction";

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
            }
        ]
    }
];

export default appRoutes;