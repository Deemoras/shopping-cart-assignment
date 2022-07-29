import React, {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import './ProductListStyle.scss';
import Button from '@mui/material/Button';

export default function ProductList(props) {

    
  return (
    <div className='prod-container'>
        {props.productsList && props.productsList.length && props.productsList.map((item,i)=>{
            return (
                <div key={item.id} className="card-style">
                    <div className='card-title'>
                        <h3>{item.name}</h3>
                    </div>
                    <div className='card-img'>
                        <img
                        src={item.imageURL}
                        alt="logo"
                        height={150}
                        width={200}
                        />
                    </div>
                    <p className='card-desc-style'>
                        {item.description}
                    </p>
                    <div className='price-row'>
                        MRP Rs.{item.price}
                        <Button variant="contained" className='prod-btn-style' onClick={() => props.addItemsToCart(item)}>Buy Now</Button>
                    </div>
                    <div className='border-style'></div>
                </div>
            )
        })}
    </div>
  )
}
