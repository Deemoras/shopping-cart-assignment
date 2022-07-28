import React, {useState}  from 'react';
import './NavbarStyle.scss';
import logo2 from '../../static/images/logo.png';
import cartIcon from '../../static/images/cart.svg';
import Cart from '../Cart/Cart';

import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
            <div className='cart-container'>
              <div className='cart-items'>
                <img src={cartIcon} width={35} height={35} alt="logo" className='iconStyle' fill="#3F6078" onClick={handleClickOpen} />
                0 Items
              </div>
            </div>
          </div>
        </div>
        <Cart openDialog={open} closeDialog={handleClose}/>
    </nav>
  )
}
