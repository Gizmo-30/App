import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes} from "react-router-dom";
import Registration from "./components/auth/Registration";
import LogIn from "./components/auth/LogIn";

import axios from "axios";
import Dashboard from "./components/dashboard/Dashboard";
import Auth from "./components/layouts/Auth";
import CheckAuth, {loader as checkAuth} from "./components/layouts/CheckAuth";
import {GlobalContextProvider} from "./state/GlobalContext";
import List, {loader as list} from "./components/dashboard/Collection/List";
import Items from "./components/dashboard/Item/Items";
import {userloader} from "./methods/functions";

const baseURL = process.env.NODE_ENV === 'development'
    ? "http://localhost:3001"
    : "https://collections-server.vercel.app";

axios.defaults.baseURL = baseURL;

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard /> ,
        children: [
            {
                path: '/',
                element: <CheckAuth />,
                loader: userloader,
                children: [
                    {
                        path: ':type',
                        element: <List />,
                        loader: userloader,
                    },
                    {
                        path: "item",
                        element: <Items />
                    }
                ]
            }
        ]
    },
    {
        path: "/",
        element: <Auth />,
        children: [
            {
                path: 'login',
                element: <LogIn />
            },
            {
                path: 'registration',
                element: <Registration />
            }
        ]
    }
])

function App() {
  return (
      <GlobalContextProvider>
          <RouterProvider router={router}/>
      </GlobalContextProvider>
  );
}

export default App;
