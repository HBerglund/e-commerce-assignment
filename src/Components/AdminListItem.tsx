import {
  createStyles,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Product } from "../Context/ProductListContext";

interface Props {
  product: Product;
}

function AdminListItem(props: Props) {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "2rem",
      },
      propsWrapper: {
        maxWidth: "600px",
        display: "flex",
        justifyContent: "space-between",
      },
      mapWrapper: {
        display: "flex",
        flexDirection: "column",
      },
      image: {
        width: "80px",
      },
    })
  );
  const classes = useStyles();

  const { product } = props;
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1" gutterBottom>
          {product.description}
        </Typography>
      </div>
      <div className={classes.mapWrapper}>
        <Typography variant="body2" gutterBottom>
          Colors
        </Typography>
        <div className={classes.propsWrapper}>
          {product.colorProps.map(({ color, img }) => (
            <div>
              <img src={img} alt={product.name} className={classes.image} />
              <Typography variant="body1" gutterBottom>
                {color}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.mapWrapper}>
        <Typography variant="body2" gutterBottom>
          Size and price
        </Typography>
        <div className={classes.propsWrapper}>
          {product.sizeProps.map(({ size, price }) => (
            <div>
              <Typography variant="body1" gutterBottom>
                {size}
              </Typography>
              <Typography variant="body1" gutterBottom>
                ${price}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default AdminListItem;
