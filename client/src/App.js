import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes} from "react-router-dom";
import Registration from "./components/auth/Registration";
import LogIn from "./components/auth/LogIn";

import axios from "axios";
import Dashboard from "./components/dashboard/Dashboard";
import Auth from "./components/layouts/Auth";
import Missing from "./components/helpers/Missing";
import CheckAuth, {loader as checkAuth} from "./components/helpers/CheckAuth";
import Main from "./components/Main";
import NavPanel from "./components/NavPanel";
import {GlobalContextProvider} from "./state/GlobalContext";
import Header from "./components/dashboard/Collection/Header";
import Menu from "./components/dashboard/Collection/Menu";
import {Col, Container, Row} from "react-bootstrap";
import List, {loader as list} from "./components/dashboard/Collection/List";
import ErrorPage from "./ErrorPage";
import Items from "./components/dashboard/Item/Items";
import Root from "./routes/root";
import {userloader} from "./components/functions";

const baseURL = process.env.NODE_ENV === 'development'
    ? "http://localhost:3001"
    : "https://collections-server.vercel.app";

axios.defaults.baseURL = baseURL;

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
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
