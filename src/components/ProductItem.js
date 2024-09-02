import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, editProduct } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import { FaEdit, FaTrashAlt, FaCartPlus, FaSave, FaTimes } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editProduct(editedProduct));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProduct({ ...product });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setEditedProduct((prev) => ({ ...prev, rating: value }));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-item">
      <div className="product-details">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={editedProduct.name}
              onChange={handleChange}
              style={{ border: 'none', fontSize: 'inherit', boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' }}
            />
          ) : (
            <h2>{product.name}</h2>
          )}
          {isEditing ? (
            <input
              type="number"
              name="price"
              value={editedProduct.price}
              onChange={handleChange}
              style={{ border: 'none', fontSize: 'inherit', boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' }}
            />
          ) : (
            <p>Rs {product.price}</p>
          )}
          <div className="product-rating">
            {isEditing ? (
              <select
                name="rating"
                value={editedProduct.rating}
                onChange={handleRatingChange}
                style={{ border: 'none', fontSize: 'inherit', boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' }}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <option key={star} value={star}>
                    {star} Star{star > 1 && 's'}
                  </option>
                ))}
              </select>
            ) : (
              Array(product.rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} />
                ))
            )}
          </div>
        </div>
        <div className="product-description">
          {isEditing ? (
            <textarea
              name="description"
              value={editedProduct.description}
              onChange={handleChange}
              style={{ border: 'none', fontSize: 'inherit', width: '100%', height: '100px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' }}
            />
          ) : (
            <p className="description">{product.description}
            </p>
            
          )}
        </div>
      </div>
      <div className="product-actions">
        {isEditing ? (
          <>
            <button onClick={handleSave}><FaSave /></button>
            <button onClick={handleCancel}><FaTimes /></button>
          </>
        ) : (
          <>
            <button onClick={handleEdit}><FaEdit /></button>
            <button onClick={handleDelete}><FaTrashAlt /></button>
            <button onClick={handleAddToCart}><FaCartPlus /></button>
            <Link to={`/product/${product.id}`}>Details</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductItem;

