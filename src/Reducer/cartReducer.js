// eslint-disable-next-line
export default (state = [], action) => {
  switch (action.type) {
    // for Add New Item in Cart
    case "ADD_CART":
      return [...state, action.payload];
    // for Remove Item in Cart
    case "REMOVE_CART":
      return action.payload;
    // for Updating Item Quntity in Cart
    case "UPDATE_CART":
      return action.payload;
    // Placing Order
    case "PLACE_ORDER":
      return (state = []);
    default:
      return state;
  }
};
