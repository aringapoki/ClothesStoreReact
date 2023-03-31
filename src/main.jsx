import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LoginView from "./views/login";
import WaiterView from "./views/waiter";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginView/>,
  },
  {
    path: '/waiter',
    element: <WaiterView/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);
