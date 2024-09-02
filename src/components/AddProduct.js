import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/productActions';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {id: Date.now(),name,price,description,rating: parseInt(rating, 10),image};
    dispatch(addProduct(newProduct));
    setName('');
    setPrice('');
    setDescription('');
    setRating('');
    setImage(null);
  };

  return (
    <div className='AddProduct'>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <label>Rating</label>
        <input
          type="number"
          value={rating}
          min="1"
          max="5"
          step="1"
          onChange={(e) => setRating(e.target.value)}
          required
        />
        <label>Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {image && <img src={image} alt="Product preview" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;

