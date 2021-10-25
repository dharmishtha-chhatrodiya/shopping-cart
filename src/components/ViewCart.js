import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { placeOrder } from "../actions/index";
import { connect } from "react-redux";
import UpdateButton from "./UpdateButton";

const styles = {
  root: { padding: "10px" },
  totlaContainer: {
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    fontSize: "14px",
    fontWeight: 600,
  },
  noDataContainer: {
    padding: "20px",
  },
  imageContainer: {
    margin: "0 20px ",
    width: "10%",
  },
  image: { height: "100%", width: "100%" },
};

// calculate total price (according to update quantity of the product)
const productTotalPrice = (cart) => {
  let totalItem = 0;
  cart.map((item) => {
    // eslint-disable-next-line operator-assignment
    return (totalItem = totalItem + item.quntity * item.price);
  });
  return totalItem.toFixed(2);
};

const ViewCart = (props) => {
  const { open, setOpen, cart } = props;
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
    >
      <Modal.Header>Your Cart</Modal.Header>

      {cart && cart.length <= 0 ? (
        <div style={styles.noDataContainer}>
          Please add something to make order.....
        </div>
      ) : (
        <Modal.Content scrolling>
          <div style={styles.contentContainer}>
            {cart &&
              cart.map((item, i) => {
                return (
                  <div className="container py-3 row" style={styles.root}>
                    <div className="card-main col-md-12" style={styles.card}>
                      <div className="main-section ">
                        <div className="col-md-2" style={styles.imageContainer}>
                          <img
                            src={item.filename}
                            className="w-100"
                            alt={item.title}
                            style={styles.image}
                          />
                        </div>
                        <div className="col-md-8 px-3">
                          <div className="card-block px-3">
                            <h4 className="card-title">{item.title}</h4>
                            <h4 className="card-title">
                              <i className="fa fa-inr" style={styles.itemPrice}>
                                {"  "}
                                {(item.quntity * item.price).toFixed(2)}
                              </i>
                            </h4>
                            {/* Update Button Component For Updating Item Quntity */}
                            <UpdateButton
                              quntity={item.quntity}
                              id={item.id}
                              cart={cart}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div style={styles.totlaContainer}>
            Total Amount: {productTotalPrice(cart)}
          </div>
        </Modal.Content>
      )}

      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          disabled={cart.length < 1}
          content="Place Order"
          labelPosition="right"
          icon="checkmark"
          onClick={async () => {
            props.placeOrder();
            setOpen(false);
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

const mapStateToProps = (state) => {};
export default connect(mapStateToProps, { placeOrder })(ViewCart);
