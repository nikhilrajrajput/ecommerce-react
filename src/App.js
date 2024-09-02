import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/ecommerce-react" element={<ProductList />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <ToastContainer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
