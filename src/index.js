import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Questions from "./pages/Questions";
import Answers from "./pages/Answers";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Questions />,
  },
  {
    path: "/answers",
    element: <Answers />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
