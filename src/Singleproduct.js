import React, { createContext, useContext } from "react";
import { Context } from "./Context";
import Footer from "./Footer";
export default function SingleProduct() {
    let fetchData = useContext(Context);
    console.log(fetchData.state)
    





    return (
        <>
            <div className="d-flex flex-wrap h-auto w-auto mx-3 my-3 " >
                {fetchData.state.map((el) => {
                    return <div>
                        <div className="  text-center m-auto" style={{ width: "60%", height: '100vh' }}  >
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
                                <div className="d-flex flex-wrap " style={{ width: "300px", height: "300px", textAlign: "center", margin: "auto", padding: "10px", marginTop: "30px", marginBottom: '30px' }}>
                                    <div className="d-flex flex-wrap">
                                        {el.images.map((ell) => {
                                            return <div className=" d-flex h-auto w-auto flex-wrap">
                                                <img style={{ width: "300px", height: "290px", marginTop: "20px" }} className="flex-wrap" src={ell} />

                                            </div>

                                        })}

                                        {/* <button style={{marginTop:"50px", marginBottom:"50px"}} className="btn btn-primary mx-3 "   >Remove</button><span></span>
                                        <button style={{marginTop:"50px", marginBottom:"50px"}} className="btn btn-primary mx-3">Add</button> */}

                                    </div>
                                </div>


                            </div>

                        </div>



                    </div>

                })}



            </div>
            
            <Footer />



        </>
    )
}
