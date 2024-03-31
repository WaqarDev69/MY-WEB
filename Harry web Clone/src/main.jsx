import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import Tutorial from "./Components/Tutorial/Tutorial.jsx";
import Course from "./Components/Course/Course.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import Notes from "./Components/Notes/Notes.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import MyGear from "./Components/MyGear/MyGear.jsx";
import WorkWithUs from "./Components/WorkWithUs/WorkWithUs.jsx";
import Login from "./Components/Login/Login.jsx";
import Signup from "./Components/Signup/Signup.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "tutorial",
        element: <Tutorial />,
      },
      {
        path: "course",
        element: <Course />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "notes",
        element: <Notes />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "my-Gear",
        element: <MyGear />,
      },
      {
        path: "Work-With-Us",
        element: <WorkWithUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "Signup",
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
