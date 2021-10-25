// for Add New Item in Cart
export const AddCart = (data) => async (dispatch) => {
  dispatch({ type: "ADD_CART", payload: data });
};
// for Remove Item in Cart
export const RemoveCart = (data) => async (dispatch) => {
  dispatch({ type: "REMOVE_CART", payload: data });
};
// for Updating Item Quntity in Cart
export const updateCart = (data) => async (dispatch) => {
  dispatch({ type: "UPDATE_CART", payload: data });
};
// Placing Order
export const placeOrder = () => async (dispatch) => {
  dispatch({ type: "PLACE_ORDER" });
};
