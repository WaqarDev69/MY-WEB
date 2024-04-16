import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Experiance from "./Components/Experiance/Experiance.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Specialization from "./Components/Specialization/Specialization.jsx";
import Project from "./Components/Project/Project.jsx";

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
        path: "About",
        element: <About />,
      },
      {
        path: "Experiance",
        element: <Experiance />,
      },
      {
        path: "Skills",
        element: <Skills />,
      },
      {
        path: "Specialization",
        element: <Specialization />,
      },
      {
        path: "Projects",
        element: <Project />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
