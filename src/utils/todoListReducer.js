export const todoListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [...state, action.payload];
    case 'EDIT_LIST':
      return state.map((list) => (list.id === action.payload.id ? action.payload : list));
    case 'DELETE_LIST':
      return state.filter((list) => list.id !== action.payload);
    default:
      return state;
  }
};
