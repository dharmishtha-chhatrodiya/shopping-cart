import React from "react";
import { productListData } from "./ProductListData.js";
import Product from "./Product";
import { Grid } from "semantic-ui-react";

function ProductList(props) {
  return (
    <Grid container>
      {/* Rendering Product List */}
      {productListData &&
        productListData.map((u, i) => {
          return (
            <Grid.Column mobile={16} tablet={8} computer={5}>
              <Product data={u} key={u.id} setopen={() => props.setopen()} />
            </Grid.Column>
          );
        })}
    </Grid>
  );
}
export default ProductList;
