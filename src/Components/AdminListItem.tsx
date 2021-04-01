import {
  Button,
  createStyles,
  Divider,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Product, ProductsContext } from "../Context/ProductListContext";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { ChangeEvent, FocusEvent, useContext, useState } from "react";

interface Props {
  product: Product;
}

function AdminListItem(props: Props) {
  const [editNameActive, setEditNameActive] = useState(false);
  const [productName, setProductName] = useState(props.product.description);
  const [editDescActive, setEditDescActive] = useState(false);
  const [productDesc, setProductDesc] = useState(props.product.description);

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

  const handleEditNameClick = () => {
    setEditNameActive(true);
  };

  const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setProductName(value);
  };

  const handleNameFocusOut = (e: FocusEvent<HTMLInputElement>) => {
    setEditNameActive(false);
    productsContext.editProductName(product, productName);
  };

  const handleEditDescClick = () => {
    setEditDescActive(true);
  };

  const handleDescInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setProductDesc(value);
  };

  const handleDescFocusOut = (e: FocusEvent<HTMLInputElement>) => {
    setEditDescActive(false);
    productsContext.editProductDesc(product, productDesc);
  };

  const { product } = props;
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="body2" color="primary" gutterBottom>
          Product name
        </Typography>
        {editNameActive ? (
          <TextField
            onChange={handleNameInputChange}
            value={productName}
            autoFocus
            onBlur={handleNameFocusOut}
          />
        ) : (
          <Typography variant="body1" gutterBottom>
            {product.name}
            <IconButton onClick={handleEditNameClick} size="small">
              <EditIcon fontSize="small" />
            </IconButton>
          </Typography>
        )}
        <Typography variant="body2" color="primary" gutterBottom>
          Description
        </Typography>
        {editDescActive ? (
          <TextField
            multiline
            style={{ width: "100%" }}
            onChange={handleDescInputChange}
            value={productDesc}
            autoFocus
            onBlur={handleDescFocusOut}
          />
        ) : (
          <Typography variant="body1" gutterBottom>
            {product.description}
            <IconButton onClick={handleEditDescClick} size="small">
              <EditIcon fontSize="small" />
            </IconButton>
          </Typography>
        )}
      </div>
      <div className={classes.mapWrapper}>
        <Typography variant="body2" color="primary" gutterBottom>
          Colors
        </Typography>
        <div className={classes.propsWrapper}>
          {product.colorProps.map(({ color, img }) => (
            <div className={classes.propItem} key={color}>
              <img src={img} alt={product.name} className={classes.image} />
              <Typography variant="body1" gutterBottom>
                {color}
              </Typography>
              <IconButton
                onClick={() => productsContext.deleteColor(product, color)}
                size="small"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.mapWrapper}>
        <Typography variant="body2" color="primary" gutterBottom>
          Size and price
        </Typography>
        <div className={classes.propsWrapper}>
          {product.sizeProps.map(({ size, price }) => (
            <div className={classes.propItem} key={size}>
              <Typography variant="body1" gutterBottom>
                {size}
                <IconButton
                  onClick={() => productsContext.deleteSize(product, size)}
                  size="small"
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Typography>
              <Typography variant="body1" gutterBottom>
                ${price}
              </Typography>
            </div>
          ))}
        </div>
        <Button
          onClick={() => productsContext.deleteProduct(product)}
          size="small"
          color="primary"
        >
          Delete Product
        </Button>
      </div>
      <Divider />
    </div>
  );
}

export default AdminListItem;
