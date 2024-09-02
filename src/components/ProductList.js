import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { sortProductsByPrice, clearSort } from '../actions/productActions';
import ProductItem from './ProductItem';
import { FaSort, FaTimes } from 'react-icons/fa';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const handleSortToggle = () => {
    if (isSorted) {
      dispatch(clearSort(products));
    } else {
      dispatch(sortProductsByPrice());
    }
    setIsSorted(!isSorted);
  };

  return (
    <div className="product-list">
      <div className="sort-container">
        <button onClick={handleSortToggle} className="sort-button">
          <FaSort /> Sort by price {isSorted && <FaTimes className="clear-sort-icon" />}
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {/* {error && <p>Error: {error}</p>} */}
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

