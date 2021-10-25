import "./App.css";
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import { connect } from "react-redux";
import ViewCart from "./components/ViewCart";

const styles = {
  headerLogo: { paddingRight: "10px", fontSize: "22px" },
  header: {
    padding: "16px 20px 10px",
    marginBottom: 0,
    backgroundColor: "#a683e3",
    borderBottom: "1px solid rgba(0,0,0,.125)",
    color: "#f8f9fa",
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  cartMain: {
    fontWeight: 600,
    position: "relative",
    top: "-5px",
    fontSize: "18px",
    cursor: "pointer",
  },
  mainTitle: {
    fontSize: "18px",
  },
  productCount: {
    backgroundColor: "#855bcd",
    padding: "2px 6px",
    borderRadius: "50px",
  },
};

function App(props) {
  const [open, setopen] = useState(false); // view cart modal open state

  return (
    <>
      {/* header section */}
      <div style={styles.header}>
        <i
          className="fa fa-shopping-cart"
          aria-hidden="true"
          style={styles.headerLogo}
        ></i>
        <span style={styles.mainTitle}>Cart-Web</span>
        <span
          className="btn-sm pull-right"
          onClick={() => setopen(true)}
          style={styles.cartMain}
        >
          View Cart <span style={styles.productCount}>{props.cart.length}</span>
        </span>
        <div className="clearfix"></div>
      </div>

      <div className="App">
        {/* Product List Component */}
        <ProductList setopen={() => setopen(true)} />
        {/* View Cart Component */}
        <ViewCart open={open} setOpen={setopen} cart={props.cart} />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps, {})(App);
