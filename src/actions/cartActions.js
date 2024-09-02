import { toast } from 'react-toastify';

export const addToCart = (product) => (dispatch, getState) => {
  const { cart } = getState().cart;

  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    dispatch({
      type: 'UPDATE_CART_ITEM',
      payload: {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      },
    });
    toast.success('Product quantity updated in cart!');
  } else {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity: 1 },
    });
    toast.success('Product added to cart!');
  }
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: 'REMOVE_FROM_CART',
    payload: id,
  });
  toast.success('Product removed from cart!');
};
