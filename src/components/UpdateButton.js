import React from "react";
import { AddCart, RemoveCart, updateCart } from "../actions/index";
import { connect } from "react-redux";

const styles = {
  cartButton: {
    backgroundColor: "white",
    borderRadius: "100%",
    borderColor: "#a683e3",
    color: "#a683e3",
    padding: "3px 6px",
  },
  itemQuntity: { fontSize: "18px", margin: "0px 5px" },
};

// For Updating Cart Quntity
const UpdateButton = (props) => {
  const { cart, quntity, id } = props;

  //update product quantity
  const UpdateQuntity = (cart, id, operation) => {
    let tempArray = [...cart];
    const existingProductIndex = cart.findIndex((x) => x.id === id);
    let product;
    product = cart[existingProductIndex];
    operation === "add" ? (product.quntity += 1) : (product.quntity -= 1);
    tempArray[existingProductIndex] = product;
    props.updateCart(tempArray);
  };
  return (
    <div>
      {quntity <= 1 ? (
        <button
          type="button"
          className="btn btn-primary"
          style={styles.cartButton}
          onClick={() => {
            let newArray = [...cart];
            newArray = newArray.filter((x) => {
              return x.id !== id;
            });
            props.RemoveCart(newArray); // Setting new Data into Cart
          }}
        >
          <span class="glyphicon glyphicon-trash"></span>
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-primary"
          style={styles.cartButton}
          onClick={() => {
            UpdateQuntity(cart, id, "remove"); // Update Item Quntity in Cart
          }}
        >
          -
        </button>
      )}
      <span style={styles.itemQuntity}>{quntity}</span>
      <button
        type="button"
        className="btn btn-primary"
        style={styles.cartButton}
        onClick={() => {
          UpdateQuntity(cart, id, "add"); // Update Item Quntity in Cart
        }}
      >
        +
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {};
export default connect(mapStateToProps, { AddCart, RemoveCart, updateCart })(
  UpdateButton
);
