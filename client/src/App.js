import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Test2 from "./components/Test2";
import Test1 from "./components/Test1";

import axios from "axios";
axios.defaults.baseURL = "https://collections-server.vercel.app";
function App() {
  return (
      <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Test1 />}></Route>
                    <Route path="/test2" element={<Test2 />}></Route>
                </Routes>
            </div>
      </BrowserRouter>
  );
}

export default App;
