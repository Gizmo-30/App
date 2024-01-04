import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./components/Registration";
import LogIn from "./components/LogIn";

import axios from "axios";
axios.defaults.baseURL = "https://collections-server.vercel.app";

function App() {
  return (
      <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<LogIn />}></Route>
                    <Route path="/registration" element={<Registration />}></Route>
                </Routes>
            </div>
      </BrowserRouter>
  );
}

export default App;
