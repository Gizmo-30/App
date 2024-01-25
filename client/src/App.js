import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Registration from "./components/auth/Registration";
import LogIn from "./components/auth/LogIn";

import axios from "axios";
import Dashboard from "./components/dashboard/Dashboard";
import Auth from "./components/routes/Auth";
import CheckAuth from "./components/routes/CheckAuth";
import {GlobalContextProvider} from "./state/GlobalContext";
import Items from "./components/dashboard/Item/Items";
import {getCollectionDetails, getLocaluser} from "./methods/loaders";
import './App.css'
import Missing from "./components/helpers/Missing";
import List from "./components/dashboard/Collection/List";
import Details from "./components/dashboard/Collection/Details";
import Users from "./components/dashboard/Users";
import Collection from "./components/dashboard/Collection/Collection";

const baseURL = process.env.NODE_ENV === 'development'
    ? "http://localhost:3001"
    : "https://collections-server.vercel.app";

axios.defaults.baseURL = baseURL;

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard /> ,
        errorElement: <Missing />,
        loader: getLocaluser,
        children: [
            {
                path: '/',
                element: <CheckAuth />,
                loader: getLocaluser,
                children: [
                    {
                        path: '/users',
                        element: <Users />,
                    },
                    {
                        path: '/',
                        element: <Collection />,
                        children: [
                            {
                                path: '/',
                                element: <List />,
                                loader: getLocaluser
                            },
                            {
                                path: "items",
                                element: <Items />
                            },
                            {
                                path: "details/:name",
                                element: <Details />,
                                loader: getCollectionDetails,
                            },
                        ]
                    },

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
