import React from "react";

//layouts
import Default from "./layouts/Default";

//views
import AboutUs from "./views/common/AboutUs";
import UnderConstruction from "./views/common/UnderConstruction";
import MobileApp from "./views/common/MobileApp";
import SellEquipment from "./views/common/SellEquipment";
import Financing from "./views/common/Financing";
import SearchPage from "./views/Search";
import Home from "./views/Home";
import AccountSidebar from "./layouts/AccountSidebar";
import AccountSummary from "./views/myAccount/AccountSummary";
import AllCategories from "./views/AllCategories";
import EventDetails from "./views/EventDetails";
import SignIn from "./views/SignIn";
import ContactUs from "./views/common/ContactUs";
import AccountCreditCard from "./views/myAccount/AccountCreditCard";
import AccountDetails from "./views/myAccount/AccountDetails";
import AccountPassword from "./views/myAccount/AccountPassword";
import AccountAddress from "./views/myAccount/AccountAddress";
import TechSupport from "./views/common/TechSupport"
import PrivacyPolicy from "./views/common/PrivacyPolicy"
import TermsAndConditions from "./views/common/TermsAndConditions"

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
                path:url.apps,
                element:<MobileApp/>
            },
            {
                path:url.sellEquipment,
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
                    },
                    {
                        path: url.accountCreditCard,
                        element: <AccountCreditCard/>
                    },
                    {
                        path: url.accountAddress,
                        element: <AccountAddress/>
                    },
                    {
                        path: url.accountDetails,
                        element: <AccountDetails/>
                    },
                    {
                        path: url.accountPassword,
                        element: <AccountPassword/>
                    }
                ]
            },
            {
                path:url.search,
                element:<SearchPage/>
            },
            {
                path:url.browse,
                element:<AllCategories/>
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
                path:url.signIn,
                element:<SignIn/>
            },
            {
                path:url.contactUs,
                element:<ContactUs/>
            },
            {
                path:url.techSupport,
                element:<TechSupport/>
            },
            {
                path:url.privacyPolicy,
                element:<PrivacyPolicy/>
            },
            {
                path:url.termsAndConditions,
                element:<TermsAndConditions/>
            },
            {
                path:'*',
                element:<UnderConstruction/>
            }
        ],
    },
];

export default appRoutes;
