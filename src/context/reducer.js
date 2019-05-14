const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_ITEM':
      return {
        ...state,
        contacts: state.items.filter(item => item.id !== action.payload)
      };
    case 'ADD_ITEM':
      return {
        ...state,
        contacts: [action.payload, ...state.items]
      };
    case 'UPDATE_ITEM':
      return {
        ...state,
        contacts: state.items.map(item => item.id === action.payload.id ? (item = action.payload) : item)
      };
    default:
      return state;
  }
};

export default reducer;