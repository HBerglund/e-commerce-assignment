import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  name?: string;
  imgUrl?: string;
  price?: string;
}

function ProductCard(props: Props) {
  return (
    <div>
      <Grid item>
        <Link to="/products">
          <Card>
            <CardContent>
              <img
                style={{ height: "200px", width: "150px" }}
                src={props.imgUrl}
                alt="product"
              />
              <Typography variant="h4">{props.name}</Typography>
              <Typography variant="h5">{props.price}</Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    </div>
  );
}

export default ProductCard;
