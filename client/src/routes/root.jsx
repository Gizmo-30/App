import {Outlet, Route, Routes} from "react-router-dom";
import CheckAuth from "../components/helpers/CheckAuth";
import Missing from "../components/helpers/Missing";
import Dashboard from "../components/dashboard/Dashboard";
import List from "../components/dashboard/Collection/List";
import Items from "../components/dashboard/Item/Items";
import Auth from "../components/layouts/Auth";
import LogIn from "../components/auth/LogIn";
import Registration from "../components/auth/Registration";
import React from "react";

export default function Root() {
    return (
        <>
            <div className="vh-100 d-flex flex-column">
                <Outlet/>
                    {/*authentication*/}
                    {/*<Route path="/" element={<Auth />}>*/}
                    {/*    <Route exact path="/login" element={<LogIn />}></Route>*/}
                    {/*    <Route exact path="/registration" element={<Registration />}></Route>*/}
                    {/*</Route>*/}
            </div>
        </>
    );
}