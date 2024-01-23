import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Registration from "./components/auth/Registration";
import LogIn from "./components/auth/LogIn";

import axios from "axios";
import Dashboard from "./components/dashboard/Dashboard";
import Auth from "./components/layouts/Auth";
import Missing from "./components/helpers/Missing";
import CheckAuth from "./components/helpers/CheckAuth";
import Main from "./components/Main";
import NavPanel from "./components/NavPanel";
import {GlobalContextProvider} from "./state/GlobalContext";
import Header from "./components/dashboard/Collection/Header";
import Menu from "./components/dashboard/Collection/Menu";
import {Col, Container, Row} from "react-bootstrap";
import List from "./components/dashboard/Collection/List";

const baseURL = process.env.NODE_ENV === 'development'
    ? "http://localhost:3001"
    : "https://collections-server.vercel.app";

axios.defaults.baseURL = baseURL;

function App() {
  return (
      <GlobalContextProvider>
          <BrowserRouter>
              <div className="vh-100 d-flex flex-column">
                  <Routes>
                      {/* check authentication*/}
                      <Route element={<CheckAuth />}>
                          {/*<Route path="/" element={<Main />}></Route>*/}
                          <Route path="*" element={<Missing />}></Route>
                          <Route path="/dashboard" element={<Dashboard />}></Route>
                      </Route>

                      {/*authentication*/}
                      <Route path="/" element={<Auth />}>
                          <Route exact path="/login" element={<LogIn />}></Route>
                          <Route exact path="/registration" element={<Registration />}></Route>
                      </Route>
                  </Routes>
              </div>
          </BrowserRouter>
      </GlobalContextProvider>
  );
}

export default App;
