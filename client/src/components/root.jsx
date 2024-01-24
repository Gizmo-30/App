import {Outlet, Route, Routes} from "react-router-dom";
import CheckAuth from "./layouts/CheckAuth";
import Missing from "./helpers/Missing";
import Dashboard from "./dashboard/Dashboard";
import List from "./dashboard/Collection/List";
import Items from "./dashboard/Item/Items";
import Auth from "./layouts/Auth";
import LogIn from "./auth/LogIn";
import Registration from "./auth/Registration";
import React from "react";

export default function Root() {
    return <Outlet/>;
}