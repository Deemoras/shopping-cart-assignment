import React, { useEffect, useState } from "react";
import "./ProductListStyle.scss";
import Button from "@mui/material/Button";

export default function ProductList(props) {
  return (
    <div className="prod-container">
      {props.productsList &&
        props.productsList.length &&
        props.productsList.map((item, i) => {
          return (
            <div key={item.id} className="item-card-container">
              <div className="card-title">
                <p>{item.name}</p>
              </div>

              <div className="card-img-desc-container">
                <div className="card-img">
                  <img src={item.imageURL} />
                </div>

                <div className="card-desc-container">
                  <div className="card-desc">
                    <p>{item.description}</p>
                  </div>
                  <div className="card-footer">
                    <p>MRP Rs.{item.price}</p>
                    <Button
                      variant="contained"
                      className="prod-btn-style"
                      onClick={() => props.addItemsToCart(item)}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            // <div key={item.id} className="card-style">
            //     <div className='card-title'>
            //         <h3>{item.name}</h3>
            //     </div>
            //     <div className='mobile-display-card'>
            //         <div className='card-img'>
            //             <img
            //             src={item.imageURL}
            //             alt="logo"
            //             height={150}
            //             width={200}
            //             />
            //         </div>
            //         <div>
            //             <p className='card-desc-style'>
            //                 {item.description}
            //             </p>
            //             <div className='price-row'>
            //                 MRP Rs.{item.price}
            //                 <Button variant="contained" className='prod-btn-style' onClick={() => props.addItemsToCart(item)}>Buy Now</Button>
            //             </div>
            //         </div>
            //     </div>
            //     <div className='border-style'></div>
            // </div>
          );
        })}
    </div>
  );
}
