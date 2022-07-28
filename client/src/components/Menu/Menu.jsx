import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

import './MenuStyle.scss'

export default function Menu(props) {
   
    const handleOnClick = (id) => {
        props.filterProductList(id,'menu');
    }

  return (
    <aside className='menu-container'>
        <div className='menu-aligment'>
            {props.categoryList && props.categoryList.length && props.categoryList.map((item,i)=> {
                return (
                    <div key={item.id} className="menu-items-style" onClick={() => handleOnClick(item.id)}>
                        {item.name}
                        <hr/>
                    </div>
                )
            })}
        </div>
    </aside>
  )
}
