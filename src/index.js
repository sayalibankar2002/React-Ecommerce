import React from "react";
import ReactDom from "react-dom/client";
import Navbar from "./Navbar";
import { Co } from "./Context";
import App from "./App";

let root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <Co>
    <App />

  </Co>





)