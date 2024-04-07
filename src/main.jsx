import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './componants/Root/Root';
import Home from './componants/Home/Home';
import Login from './componants/Login';
import Resister from './componants/Resister';
import AuthProvider from './componants/Provider/AuthProvider';
import Oders from './componants/Oders';
import PrivetsRoute from './PrivetsRoute';
import Profile from './componants/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/resister",
        element: <PrivetsRoute><Resister></Resister></PrivetsRoute>,
      },
      {
        path: "/oders",
        element: <Oders></Oders>,
      },
      {
        path: "/profile",
        element: <PrivetsRoute><Profile></Profile></PrivetsRoute>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
