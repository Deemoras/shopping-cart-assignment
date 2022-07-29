import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

import './MenuStyle.scss'

export default function Menu(props) {
   const navigate = useNavigate();

   const menuList =  props.categoryList && props.categoryList.length && props.categoryList.filter((item)=> item.enabled == true)

    const handleOnClick = (id) => {
        navigate('/products', { state: { id: id, page:'products' } });
        props.filterProductList(id,'menu');
    }

  return (
    <aside className='menu-container'>
        <div className='menu-aligment'>
            {menuList && menuList.length>0 && menuList.map((item,i)=> {
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
