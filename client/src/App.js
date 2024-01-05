import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./components/Registration";
import LogIn from "./components/LogIn";
import Test from "./components/Test";

import axios from "axios";
axios.defaults.baseURL = "https://collections-server.vercel.app";

function App() {
  return (
      <BrowserRouter>
            <div className="d-flex align-items-center justify-content-center vh-100 mx-auto vw-70 p-2" style={{maxWidth: '1100px'}}>
                <Test/>
                <Routes>
                    <Route path="/" element={<LogIn />}></Route>
                    <Route path="/registration" element={<Registration />}></Route>
                </Routes>
            </div>
      </BrowserRouter>
  );
}

export default App;
