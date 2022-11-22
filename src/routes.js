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
// import Home from "./views/Home";
import AccountSidebar from "./layouts/AccountSidebar";
import AccountSummary from "./views/myAccount/AccountSummary";
import { url } from "./assets/paths";
// import AllCategories from "./views/AllCategories";
import EventDetails from "./views/EventDetails";

const appRoutes = [
    {
        element:<Default/>,
        children:[
            {
                path:url.home,
                element:<UnderConstruction/>
            },
            {
                path:url.aboutUs,
                element:<AboutUs/>
            },
            {
                path:url.MobileApp,
                element:<MobileApp/>
            },
            {
                path:url.SellEquipment,
                element:<SellEquipment/>
            },
            {
                path:url.financing,
                element:<Financing/>
            },
            {
                path:url.account,
                element:<AccountSidebar/>,
                children:[
                    {
                        path:url.accountSummary,
                        element:<AccountSummary/>
                    }
                ]
            },
            {
                path:url.search,
                element:<SearchPage/>
            },
            {
                path:url.browse,
                element:<UnderConstruction/>
            },
            {
                path:url.eventDetail,
                element:<EventDetails/>
            },
            {
                path:url.eventDetailByCategory,
                element:<EventDetails/>
            },
            {
                path:'*',
                element:<UnderConstruction/>
            }
        ]
    }
];

export default appRoutes;
