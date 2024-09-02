const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'EDIT_PRODUCT':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      };
    case 'SORT_PRODUCTS_BY_PRICE':
      return {
        ...state,
        products: [...state.products].sort((a, b) => a.price - b.price),
      };
    case 'CLEAR_SORT':
      return {
        ...state,
        products: [...state.products].sort((a, b) => a.name.localeCompare(b.name)),
        // products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;

  