import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";
import Registration from "./components/auth/Registration";
import LogIn from "./components/auth/LogIn";
import Test from "./components/Test";

import axios from "axios";
import Dashboard from "./components/dashboard/Dashboard";
import {useSelector} from "react-redux";
axios.defaults.baseURL = "https://collections-server.vercel.app";
// axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
      <BrowserRouter>
            <div className="d-flex align-items-center justify-content-center vh-100 mx-auto vw-70 p-2" style={{maxWidth: '1100px'}}>
                <Routes>
                    <Route path="/test" element={<Test />}></Route>
                    <Route path="/login" element={<LogIn />}></Route>
                    <Route path="/registration" element={<Registration />}></Route>
                    <Route path="/" element={<Navigate to="/dashboard" replace={true}/>}></Route>
                    <Route path="/dashboard" element={<Dashboard />}></Route>
                </Routes>
            </div>
      </BrowserRouter>
  );
}

export default App;
