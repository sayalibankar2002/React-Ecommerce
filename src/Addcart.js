import React, { useContext, useRef, useState } from "react";
import { Context } from "./Context";
import Home from "./Home";
import Footer from "./Footer";
export default function AddCart() {
    let fetchData = useContext(Context);
    let state = fetchData.state;
    let dispatch=fetchData.dispatch;
    let [pri, Setpri] = useState(1);



    return (
        <>
            <div className="d-flex flex-wrap ">
                {state.map((el) => {
                    return <div>
                        <div className="card " style={{ width: "100%", textAlign: "center", margin: "auto" }}  >
                            <div className="card-body text-center mx-3">
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
                                <select value={pri} onChange={(e) => { Setpri(e.target.value) }}>
                                    <option value={"1"}>1</option>
                                    <option value={"2"}>2</option>
                                    <option value={"3"}>3</option>
                                    <option value={"4"}>4</option>
                                    <option value={"5"}>5</option>
                                    <option value={"6"}>6</option>
                                    <option value={"7"}>7</option>
                                    <option value={"8"}>8</option>
                                    <option value={"9"}>9</option>
                                    <option value={"10"}>10</option>
                                </select>
                                <button className="btn btn-primary mx-3" onClick={()=>{dispatch({type:'Remove',Id:el})}} >Remove</button><span></span>
                                <h6>Price of {el.title} with {pri} is  {pri * el.price}$ </h6>
                                <button className="btn btn-success" onClick={() => { alert("Pay page i<s not complete yet") }}>pay</button>


                            </div>


                        </div>




                    </div>


                })}




            </div>
            <Footer />
        </>
    )
}