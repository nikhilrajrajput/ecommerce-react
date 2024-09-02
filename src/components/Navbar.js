import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaPlus,FaShoppingCart  } from 'react-icons/fa';

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cart.length);

  return (
    <nav>
      <div style={{width:'40%',display:'flex',justifyContent:'space-evenly'}}>
      <Link to="/" style={{color:'#3090FC'}}>eCommerce</Link>
      <Link to="/">Products</Link>
      <Link to="/add-product">Add a product <FaPlus /></Link>
      </div>
      <div>
      <Link to="/cart">Nikhil Raj  <FaShoppingCart/> ({cartCount})</Link>
      </div>
      
    </nav>
  );
};

export default Navbar;
