const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
    case 'UPDATE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.map(item => item.id === action.payload.id ? (item = action.payload) : item )
      };
    default:
      return state;
  }
};

export default reducer;