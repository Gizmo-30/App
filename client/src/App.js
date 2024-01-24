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
import {userloader} from "./methods/loaders";
import './App.css'
import Missing from "./components/helpers/Missing";
import List from "./components/dashboard/Collection/List";

const baseURL = process.env.NODE_ENV === 'development'
    ? "http://localhost:3001"
    : "https://collections-server.vercel.app";

axios.defaults.baseURL = baseURL;

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard /> ,
        errorElement: <Missing />,
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
