import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./store/Store.jsx";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./contexts/UserProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </Provider>
);
