import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import '../App.css' ;

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-details">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-info">
                <h2>{item.name}</h2>
                <p>Rs {item.price}</p>
                <p className="cart-description">{item.description}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
            <div className="cart-actions">
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;


