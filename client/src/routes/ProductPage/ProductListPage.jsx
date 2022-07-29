import React, { useEffect, useState } from "react";
import {useLocation} from "react-router-dom";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/Product/productAction";
import { fetchCategories } from "../../redux/Category/categoryActions";
import Menu from '../../components/Menu/Menu';
import ProductList from '../../components/ProductList/ProductList';
import { addItemToCart, addNewQuantity } from "../../redux/Cart/cartAction";
import Cart from '../../components/Cart/Cart'

import './ProductListStyle.scss';

export default function ProductListPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const itemAdded = useSelector((state) => state.cart.data);
  console.log(itemAdded)
  const productsItem = useSelector((state) => state.products.data);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const categories = useSelector((state) => state.categories.data);



  const filteredProducts =
    location.state && location.state.id && productsItem
      ? productsItem.filter((product) => product.category == location.state.id)
      : productsItem;




  useEffect(() => {
      dispatch(fetchProducts());
      dispatch(fetchCategories());
    },[]);



    const addItemsToCart = (obj) => {

      let itemList = itemAdded.cartList ? itemAdded.cartList: [];
      let addedObj = itemList && itemList.length>0 ? itemList.find((item)=> item.id == obj.id): false
      let cartObj = {};
      let totalCartObj = {};

      if(addedObj) {
        addedObj.quantity = addedObj.quantity < addedObj.stock ? addedObj.quantity + 1 : addedObj.quantity;
        addedObj.totalItemPrice = addedObj.quantity < addedObj.stock ? addedObj.totalItemPrice + obj.price : addedObj.totalItemPrice;
        itemList.forEach((item,i)=> {
          if(item.id == obj.id) {
            itemList[i] = addedObj
          }
        })
      }else {
        cartObj.id = obj.id;
        cartObj.quantity = 1;
        cartObj.stock = obj.stock;
        cartObj.unitPrice = obj.price;
        cartObj.totalItemPrice = obj.price;
        cartObj.imageURL = obj.imageURL;
        cartObj.name = obj.name;
        itemList.push(cartObj)
      }

      totalCartObj.cartList = itemList;
      totalCartObj.totalPrice = itemList.length == 1 && addedObj ? addedObj.totalItemPrice : itemList.reduce((acc, curr) => acc + curr.totalItemPrice, 0);
      dispatch(addNewQuantity(totalCartObj));
      dispatch(addItemToCart(obj.id));
    }


  

  return (
    <section className='product-page-container'>
      {loading ? (
        <div className="no-content">Loading products...</div>
      ) : error ? (
        <div className="no-content">Some error occured!</div>
      ) : (
      <>
        <Menu categoryList={categories} productId={location.state && location.state.id}/>
        <ProductList productsList={filteredProducts} addItemsToCart={addItemsToCart}/>
      </>
      )}
    </section>
  )
}
