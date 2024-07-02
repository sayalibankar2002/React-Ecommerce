import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"
import AddCart from "./Addcart";
import "./App.css"
import Home from "./Home";
import SingleProduct from "./Singleproduct";
import { Context } from "./Context";
export default function Navbar() {
  let fetchData = useContext(Context);
  let [count, setCount] = useState(1);
  let c = fetchData.state.length;
  console.log(c)
  return (
    <>

      <BrowserRouter>


        <nav className="w-100 bg-dark text-light">
          <h3>
            Sayali
          </h3>

          <ul>



            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={"/AddCart"}>Cart <span >
               [ {c} ]
                </span></Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path={"/"}
            element={<Home />}

          />

          <Route
            path={"/AddCart"}
            element={<AddCart />}
          />
          <Route
            path={"/Singleproduct"}
            element={<SingleProduct />}
          />



        </Routes>
      </BrowserRouter>



    </>
  )
}