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
import Container from "./components/ContainerLayout";
import Header from "./components/Header";
import {GlobalContextProvider} from "./state/GlobalContext";

const baseURL = process.env.NODE_ENV === 'development'
    ? "http://localhost:3001"
    : "https://collections-server.vercel.app";

axios.defaults.baseURL = baseURL;

function App() {
  return (
      <GlobalContextProvider>
          <BrowserRouter>
              <div className="vh-100 d-flex flex-column">
                  <Header />

                  <Routes>
                      <Route path="/" element={<Main />}></Route>
                      <Route path="*" element={<Missing />}></Route>
                      <Route element={<Container />}>
                      </Route>

                      {/* check authentication*/}
                      <Route element={<CheckAuth />}>
                          <Route path="/dashboard" element={<Dashboard />}></Route>
                      </Route>

                      {/*authentication*/}
                      <Route path="/" element={<Auth />}>
                          <Route path="/login" element={<LogIn />}></Route>
                          <Route path="/registration" element={<Registration />}></Route>
                      </Route>
                  </Routes>
              </div>
          </BrowserRouter>
      </GlobalContextProvider>
  );
}

export default App;
