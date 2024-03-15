import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <div> 404 NOT FOUND </div>
  },
  {
    path: '/projects',
    element: <Projects/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
