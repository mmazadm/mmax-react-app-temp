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
import AccountSidebar from "./layouts/AccountSidebar";
import AccountSummary from "./views/myAccount/AccountSummary";
import { url } from "./assets/paths";

const appRoutes = [
    {
        element:<Default/>,
        children:[
            {
                path:url.home,
                element:<Home/>
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
                path:'*',
                element:<UnderConstruction/>
            }
        ]
    }
];

export default appRoutes;
