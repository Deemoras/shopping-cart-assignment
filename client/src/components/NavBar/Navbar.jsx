import React, {useState}  from 'react';
import './NavbarStyle.scss';
import logo2 from '../../static/images/logo.png';
import cartIcon from '../../static/images/cart.svg';
import Cart from '../Cart/Cart';
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../redux/Cart/cartAction";

import { Link } from 'react-router-dom';

export default function Navbar() {
  const dispatch = useDispatch();
  const itemAdded = useSelector((state) => state.cart.data);
  const [open, setOpen] = useState(false);
  console.log(itemAdded);


  const handleDecrement = (product, i) => {
    let itemList = itemAdded.cartList ? itemAdded.cartList: [];
      let addedObj =  itemList && itemList.length>0 ? itemList.find((item)=> item.id == product.id): false;
      let totalCartObj = {};

      if(addedObj && addedObj.quantity>1) {
        addedObj.quantity = addedObj.quantity - 1;
        addedObj.totalItemPrice = addedObj.totalItemPrice - product.unitPrice;
        itemList[i] = addedObj;
      }else {
        itemList.splice(i,1)
      }
      totalCartObj.cartList = itemList;
      totalCartObj.totalPrice = itemList.length == 1 && addedObj ? addedObj.totalItemPrice : itemList.reduce((acc, curr) => acc + curr.totalItemPrice, 0);
    dispatch(decreaseQuantity(totalCartObj));
  };

  const handleIncrement = (product,i) => {
      let itemList = itemAdded.cartList ? itemAdded.cartList: [];
      let addedObj =  itemList && itemList.length>0 ? itemList.find((item)=> item.id == product.id): false;
      let totalCartObj = {};

      if(addedObj) {
        addedObj.quantity = addedObj.quantity < addedObj.stock ? addedObj.quantity + 1 : addedObj.quantity;
        addedObj.totalItemPrice = addedObj.quantity < addedObj.stock ? addedObj.totalItemPrice + product.unitPrice : addedObj.totalItemPrice;
        itemList[i] = addedObj
      }
      totalCartObj.cartList = itemList;
      totalCartObj.totalPrice = itemList.length == 1 && addedObj ? addedObj.totalItemPrice : itemList.reduce((acc, curr) => acc + curr.totalItemPrice, 0);
      dispatch(increaseQuantity(totalCartObj));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(value);
  }

  return (
    <nav className='Nav-Style'>
        <div className='container'>
          <div className='img-content'>
             <img src={logo2} className="img-style" alt="logo" />
          </div>
          <div className='nav-item-container'>
            <ul className='nav-items'>
                <li className='home-section'><Link to='/'>Home</Link></li>
                <li className='product-section'><Link to='/products'>Products</Link></li>
            </ul>
            <div className='cart-container' onClick={handleClickOpen}>
              <div className='cart-items'>
                <img src={cartIcon} width={35} height={35} alt="logo" className='iconStyle' fill="#3F6078" />
                0 Items
              </div>
            </div>
          </div>
        </div>
        <Cart openDialog={open} closeDialog={handleClose} decreamentClick = {handleDecrement} incrementClick = {handleIncrement} cartItemList={itemAdded.cartList}/>
    </nav>
  )
}
