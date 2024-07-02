import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import SingleProduct from "./Singleproduct";
import { useNavigate, useHistory, Link } from "react-router-dom";
import Navbar from "./Navbar";
import AddCart from "./Addcart";
import { Context } from "./Context";
import Footer from "./Footer";
import { Button } from "bootstrap";
import App from "./App";
let d = createContext();

function Home({ }) {
    let [text, SetText] = useState([]);
    let ref1 = useRef(null);
    let ref2 = useRef(null);
    let ref3 = useRef(null);
    let ref4 = useRef(null);
    let reff = useRef(null);
    let [f, setF] = useState();
    let [cart, SetCart] = useState(0);
    let fetchData = useContext(Context);
    let dispatch = fetchData.dispatch;



    //

    useEffect(() => {
        fetch("https://dummyjson.com/products").then((res) => res.json()).then((data) => {
            SetText(data.products)



        })

    }, [])
    let [add, Setadd] = useState("Add");








    return (
        <>
            <div className="card d-flex   my-3  ">
                <div className="d-flex flex-wrap h-auto w-auto">
                    <input type="button" className="btn btn-secondary-outline mx-3" name="filter" value={"smartphones"} ref={ref1} onClick={(e) => { setF(e.target.value) }} />   <br />
                    <input type="button" className="btn btn-secondary-outline mx-3" name="filter" value={"groceries"} ref={ref2} onClick={(e) => { setF(e.target.value) }} />  <br />
                    <input type="button" className="btn btn-secondary-outline mx-3" name="filter" value={"fragrances"} ref={ref3} onClick={(e) => { setF(e.target.value) }} />  <br />
                    <input type="button" className="btn btn-secondary-outline mx-3" name="filter" value={"home-decoration"} ref={ref4} onClick={(e) => { setF(e.target.value) }} /> <br />
                    <input type="button" className="btn btn-secondary-outline mx-3" name="filter" value={"skincare"} ref={ref4} onClick={(e) => { setF(e.target.value) }} />  <br />

                </div>
            </div >

            <div id="con" className="d-flex flex-wrap h-auto w-auto ">
                <div className="d-flex flex-wrap h-100 w-100">


                    {text.map((el) => {


                        if (el.category == f) {
                            return <div className="mx-3 d-flex flex-wrap ">
                                <div className="card  d-flex flex-wrap my-3 mx-3" style={{ width: "250px", height: "auto" }}  >
                                    <div className="card-body text-center mx-3 ">
                                        <div>
                                            <img className="card-img-top" src={el.thumbnail} alt="Product-Img" />
                                        </div>
                                        <h3>Title : {el.title}</h3>
                                        <h5>Company : {el.brand}</h5>
                                        <h6>Category : {el.category}</h6>
                                        <h6> Description :{el.description}</h6>
                                        <h6>DiscountPercentage:{el.discountPercentage}%</h6>
                                        <h6>Price : {el.price}$</h6>
                                        <h6> Rating : {el.rating} </h6>
                                        <h6> Stocks : {el.stock} </h6>
                                        <input type={"button"} value={add} className="btn btn-primary mx-3" onClick={() => { dispatch({ type: 'ADD', cart: el });   }} />
                                        <button className="btn btn-primary mx-3">Buy</button>
                                        <Link to={"/Singleproduct"} className="btn btn-primary mx-3" onClick={() => { dispatch({ type: 'view', view: el }) }} >View</Link>


                                    </div>


                                </div>

                            </div>
                        }
                    })}
                </div>

                <div>
                </div>
            </div>
            <hr />
            <h6 className="text-center"> Our New Products</h6>

            <div id="c" className=" d-flex flex-wrap h-auto w-auto">
                {text.map((el) => {

                    return <div className="card d-flex flex-wrap w-auto h-auto" >
                        <div className="  card d-flex flex-wrap " style={{ width: "356px", height: "auto" }} >
                            <div className="card-body text-center mx-3 " >
                                <div>
                                    <img className="card-img-top" src={el.thumbnail} alt="Product-Img" />
                                </div>
                                <h3>Title : {el.title}</h3>
                                <h5>Company : {el.brand}</h5>
                                <h6>Category : {el.category}</h6>
                                <h6> Description :{el.description}</h6>
                                <h6>DiscountPercentage:{el.discountPercentage}%</h6>
                                <h6>Price : {el.price}$</h6>
                                <h6> Rating : {el.rating} </h6>
                                <h6> Stocks : {el.stock} </h6>


                              <input type={"button"} ref={reff} className="btn btn-primary mx-3" value={add} onClick={(e) => { dispatch({ type: 'ADD', cart: el }); }} />

                                <button className="btn btn-primary mx-3">Buy</button>
                                <Link to={"/Singleproduct"} className="btn btn-primary mx-3" onClick={() => { dispatch({ type: 'view', view: el }) }} >View</Link>
                            </div>
                        </div>
                    </div>
                })}
                <div>
                </div>
                {/* <d.Provider value={cart}>
                    <Navbar />
                </d.Provider> */}
            </div>




            <Footer />



        </>
    )
}
export default Home;
export { d };

