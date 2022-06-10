import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'antd/dist/antd.css'
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import setup for redux and redux middleware
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./AirBnb/store";

const root = document.getElementById("root");

// constant setup for redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
