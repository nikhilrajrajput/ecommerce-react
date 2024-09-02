import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === parseInt(id))
  
  );
  console.log(product);
  const dispatch = useDispatch();

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} />
      <div className="details" style={{padding:'0 20px'}}>
        <h2>{product.name}</h2>
        <p style={{display:'flex',justifyContent:'space-between'}}>
         <span>Rs {product.price}</span> 
         <span>Imported: {product.imported}</span>
         <span>Warranty: {product.warranty}</span>
          </p>
        <p>{product.description}</p>
        <p style={{display:'flex',justifyContent:'space-between'}}>
        <span>Rating: {product.rating}</span>
        <span>Country of Origin: {product.countryOfOrigin}</span>
        <span>Manufactured By: {product.manufacturedBy}</span>
        </p>
      </div>
      <div className="actions" style={{paddingTop:'70px'}}>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;

