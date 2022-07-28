import React, { useEffect, useState } from "react";
import {useLocation} from "react-router-dom";
import axios from 'axios';
import Menu from '../../components/Menu/Menu';
import Navbar from '../../components/NavBar/Navbar';
import ProductList from '../../components/ProductList/ProductList';

import './ProductListStyle.scss';

export default function ProductListPage() {
  const [categoryList, setCategoryList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const location = useLocation();

  useEffect(() => {
      axios
      .get("http://localhost:5000/categories")
      .then((res) => {
          let list = res.data.filter((item) => item.imageUrl !== undefined )
          setCategoryList(list);
          fetchProductList();
      })
      
    }, []);

  const fetchProductList = async () => {
    var itemsList =  await axios
    .get("http://localhost:5000/products")
    .then((res) => res.data);
    setProductsList(itemsList);
    if(location.state && location.state.id) {
      let list = itemsList.filter((item) => item.category == location.state.id )
      setfilteredList(list);
    }  else {
      setfilteredList(itemsList);  
    }
  }

  const filterProductList = (id, page) => {
    let list = productsList;
    if(page === 'home') {
      list = productsList.filter((item) => item.category == location.state.id )
    }else if (page === 'menu') {
      list = productsList.filter((item) => item.category == id )
    }
    setfilteredList(list)
  }

  

  return (
    <main>
        <Navbar/>
      <section className='product-page-container'>
        <Menu categoryList={categoryList} filterProductList={filterProductList}/>
        <ProductList productsList={filteredList}/>
      </section>
    </main>
  
  )
}
