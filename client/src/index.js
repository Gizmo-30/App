import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./state/store";
import {ApiProvider} from "@reduxjs/toolkit/query/react";
import {api} from "./state/slices/api"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
          <ApiProvider api={api}>
            <Provider store={store}>
                <App />
            </Provider>
          </ApiProvider>
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
