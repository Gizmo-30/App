import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Registration from "./components/auth/Registration";
import LogIn from "./components/auth/LogIn";

import axios from "axios";
import Dashboard from "./components/dashboard/Dashboard";
import Layout from "./components/Layout";
import Missing from "./components/helpers/Missing";
import CheckAuth from "./components/helpers/CheckAuth";
import Admins from "./components/roles/Admins";
import Main from "./components/Main";
import Test from "./components/Test";
import Container from "./components/Container";

// axios.defaults.baseURL = "https://collections-server.vercel.app";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path="/" element={<Main />}></Route>
                  <Route path="/test" element={<Test />}></Route>
                  <Route path="/login" element={<LogIn />}></Route>
                  <Route path="/registration" element={<Registration />}></Route>
              </Route>
              <Route element={<CheckAuth />}>
                  <Route element={<Container />}>
                      <Route path="/dashboard" element={<Dashboard />}></Route>
                      <Route path="*" element={<Missing />}></Route>
                  </Route>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
