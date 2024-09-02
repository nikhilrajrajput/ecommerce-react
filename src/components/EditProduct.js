import React, { useState } from 'react';

const EditProduct = ({ product, onSave, onCancel }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [rating, setRating] = useState(product.rating);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onSave({ ...product, name, price, description, rating });
    };
    
    return (
    <form onSubmit={handleSubmit}>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
    <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
    <button type="submit">Save</button>
    <button type="button" onClick={onCancel}>Cancel</button>
    </form>
    );
    };
    
    export default EditProduct;