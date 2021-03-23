import {
  createStyles,
  Divider,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Product, ProductsContext } from "../Context/ProductListContext";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useContext } from "react";

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
      },
      mapWrapper: {
        display: "flex",
        flexDirection: "column",
      },
      propItem: {
        marginRight: "2rem",
      },
      image: {
        width: "80px",
      },
    })
  );
  const classes = useStyles();

  const productsContext = useContext(ProductsContext);

  const { product } = props;
  return (
    <div className={classes.root}>
      <div>
        <Typography variant='h6'>
          {product.name}
          <IconButton
            onClick={() => productsContext.deleteProduct(product)}
            size='small'
          >
            <DeleteIcon fontSize='small' />
          </IconButton>
        </Typography>
        <Typography variant='body1' gutterBottom>
          {product.description}
          <IconButton size='small'>
            <EditIcon fontSize='small' />
          </IconButton>
        </Typography>
      </div>
      <div className={classes.mapWrapper}>
        <Typography variant='body2' gutterBottom>
          Colors
        </Typography>
        <div className={classes.propsWrapper}>
          {product.colorProps.map(({ color, img }) => (
            <div className={classes.propItem}>
              <img src={img} alt={product.name} className={classes.image} />
              <Typography variant='body1' gutterBottom>
                {color}
              </Typography>
              <IconButton
                onClick={() => productsContext.deleteColor(product, color)}
                size='small'
              >
                <DeleteIcon fontSize='small' />
              </IconButton>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.mapWrapper}>
        <Typography variant='body2' gutterBottom>
          Size and price
        </Typography>
        <div className={classes.propsWrapper}>
          {product.sizeProps.map(({ size, price }) => (
            <div className={classes.propItem}>
              <Typography variant='body1' gutterBottom>
                {size}
                <IconButton
                  onClick={() => productsContext.deleteSize(product, size)}
                  size='small'
                >
                  <DeleteIcon fontSize='small' />
                </IconButton>
              </Typography>
              <Typography variant='body1' gutterBottom>
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
