import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

import './MenuStyle.scss'

export default function Menu(props) {
   const navigate = useNavigate();

   const menuList = props.categoryList.filter((item)=> item.enabled ==true)

    const handleOnClick = (id) => {
        navigate('/products', { state: { id: id, page:'products' } });
        props.filterProductList(id,'menu');
    }

    const handleCategoryChange = () => {

    }

  return (
    <aside className='menu-container'>
        <select
            value={props.productId}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="category-dropdown"
          >
            <option value="" disabled>
              ---Select Category---
            </option>
            {menuList &&menuList.length && 
              menuList.map((_) => (
                <option value={_.id} key={_.id}>
                  {_.name}
                </option>
              ))}
          </select>
        <div className='menu-aligment'>
            {menuList && menuList.length && menuList.map((item,i)=> {
                return (
                    <div key={item.id} className={ item.id === props.productId? "menu-items-style menu-items-style-active " : "menu-items-style"} onClick={() => handleOnClick(item.id)}>
                        {item.name}
                        <hr/>
                    </div>
                )
            })}
        </div>
    </aside>
  )
}
