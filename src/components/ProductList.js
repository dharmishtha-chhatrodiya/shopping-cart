import React from "react";
import { productListData } from "./ProductListData.js";
import Product from "./Product";
import { Grid } from "semantic-ui-react";

const styles = {
  productList: {
    margin: "0px 36px",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
};

function ProductList(props) {
  return (
    <Grid style={styles.productList}>
      {/* Rendering Product List */}

      {productListData &&
        productListData.map((product) => {
          return (
            <Grid.Column key={product.id} mobile={16} tablet={8} computer={5}>
              <Product
                data={product}
                key={product.id}
                setopen={() => props.setopen()}
              />
            </Grid.Column>
          );
        })}
    </Grid>
  );
}
export default ProductList;
