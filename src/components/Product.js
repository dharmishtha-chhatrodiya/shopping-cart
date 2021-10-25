import React, { useState, useEffect } from "react";
import { AddCart, RemoveCart } from "../actions/index";
import { connect } from "react-redux";
import ReactStars from "react-rating-stars-component";

const styles = {
  itemPrice: { fontSize: "16px" },
  rating: { display: "flex", justifyContent: "center", zIndex: 0 },
  imageContainer: {
    maxHeight: "200px",
    maxWidth: "200px",
    height: "100px",
    width: "100px",
    margin: "0 auto",
  },
  buttonContainer: {
    padding: "14px 10px 0",
    display: "block",
    backgroundColor: "F8F8F8",
    borderTop: "solid 1px #EEE",
  },
  cartButton: {
    marginRight: "5px",
    backgroundColor: "white",
    borderRadius: "50px",
    borderColor: "#a683e3",
    color: "#a683e3",
    marginBottom: "10px",
  },
  image: { height: "100%", width: "100%", borderRadius: "50px" },
  title: {
    lineHeight: "1.5em",
    overflow: "hidden",
    padding: "10px 0px",
    fontSize: "18px",
    fontWeight: 600,
  },
  description: {
    lineHeight: "1.5em",
    overflow: "hidden",
    height: "3em",
    margin: "10px 0px ",
    fontSize: "14px",
    textAlign: "center",
  },
  price: {
    lineHeight: "1.5em",
    margin: "5px",
    zIndex: 0,
  },
  container: {
    border: "1px solid #efefef",
    boxShadow: "0px 0px 20px rgba(0,0,0,0.05)",
    padding: "20px",
    borderRadius: "5px",
  },
};

const Product = (props) => {
  const [inCart, setinCart] = useState(false);
  const { data } = props; //getting Data from Props
  useEffect(() => {
    // changes Product in Cart or Not using flag
    if (props.cart.length) {
      for (let i = 0; i < props.cart.length; i++) {
        if (props.cart[i].id === data.id) {
          setinCart(true);
          break;
        } else {
          setinCart(false);
        }
      }
    } else {
      setinCart(false);
    }
  }, [props.cart, data.id]);

  // star rating detail
  const Rating = {
    size: 34,
    count: 5,
    isHalf: false,
    value: data.rating,
    color: "#efefef",
    activeColor: "#f5d04b",
    edit: false,
  };

  return (
    <>
      {/* Product Card */}
      <div className="card" style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src={data.filename}
            className="card-img-top"
            alt={data.title}
            style={styles.image}
          />
        </div>
        <div className="card-body">
          <div className="card-title" style={styles.title}>
            {data.title}
          </div>

          <div className="card-text" style={styles.description}>
            {data.description}
          </div>
          <div className="card-text" style={styles.price}>
            <div>
              <i className="fa fa-inr" style={styles.itemPrice}>
                {"  "}
                {data.price}
              </i>
            </div>
          </div>
          <div className="card-text" style={styles.rating}>
            <ReactStars {...Rating} />
          </div>
          <div style={styles.buttonContainer}>
            {inCart ? (
              <>
                <button
                  className="btn btn-primary"
                  style={styles.cartButton}
                  onClick={() => {
                    let newArray = [...props.cart];
                    newArray = newArray.filter((u) => {
                      return u.id !== data.id;
                    });
                    props.RemoveCart(newArray); // Setting new Data into Cart
                    setinCart(false);
                  }}
                >
                  Remove from cart
                </button>
                <button
                  className="btn btn-primary"
                  style={styles.cartButton}
                  onClick={() => {
                    props.setopen();
                  }}
                >
                  View Cart
                </button>
              </>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                style={styles.cartButton}
                onClick={() => {
                  data.quntity = 1;
                  props.AddCart(data); // Setting new Data into Cart
                }}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps, { AddCart, RemoveCart })(Product);
