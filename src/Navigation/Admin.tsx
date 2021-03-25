import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Section from "../Components/Section";
import { ProductsContext, Product } from "../Context/ProductListContext";
import AdminListItem from "../Components/AdminListItem";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

function Admin() {
  const productsContext = useContext(ProductsContext);
  const products: Product[] = productsContext.list;

  const [showForm, setShowForm] = useState<boolean>(false);
  const [category, setCategory] = useState<string>(products[0].category);

  let newProduct = {
    id: String(products.length + 1),
    category: category,
    name: "",
    fabric: "",
    colorProps: { img: "", color: "" },
    sizeProps: { size: "", price: "" },
    description: "",
  };

  const handleNewProductInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    newProduct = {
      ...newProduct,
      [e.target.name]: value,
    };
  };

  const handleNewColorInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    newProduct = {
      ...newProduct,
      colorProps: {
        ...newProduct.colorProps,
        [e.target.name]: value,
      },
    };
  };

  const handleNewSizeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    newProduct = {
      ...newProduct,
      sizeProps: {
        ...newProduct.sizeProps,
        [e.target.name]: value,
      },
    };
  };

  const handleClose = () => {
    setShowForm(false);
  };

  const handleOpen = () => {
    setShowForm(true);
  };

  const handleCategoryInput = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.target.value as string;
    console.log(value);
    setCategory(value);
  };

  return (
    <Section>
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Typography
          style={{ cursor: "pointer", marginBottom: "1rem" }}
          variant="body1"
          onClick={() => {
            setShowForm((prevState) => !prevState);
          }}
        >
          Add new product
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            minWidth: "600px",
          }}
        >
          <FormControl>
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              value={category}
              open={showForm}
              onOpen={handleOpen}
              onClose={handleClose}
              onChange={handleCategoryInput}
            >
              {products.map(({ category }) => (
                <MenuItem value={category}>{category}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            name="name"
            onChange={handleNewProductInputs}
            style={{ minWidth: "600px" }}
            label="Product name"
          />
          <TextField
            name="fabric"
            onChange={handleNewProductInputs}
            style={{ minWidth: "600px" }}
            label="Fabric"
          />
          <TextField
            name="color"
            onChange={handleNewColorInputs}
            style={{ minWidth: "600px" }}
            label="Color"
          />
          <TextField
            name="img"
            onChange={handleNewColorInputs}
            style={{ minWidth: "600px" }}
            label="Image source"
          />
          <TextField
            name="size"
            onChange={handleNewSizeInputs}
            style={{ minWidth: "600px" }}
            label="Size"
          />
          <TextField
            name="price"
            onChange={handleNewSizeInputs}
            style={{ minWidth: "600px" }}
            label="Price"
          />
          <TextField
            name="description"
            onChange={handleNewProductInputs}
            style={{ minWidth: "600px" }}
            multiline
            label="Description"
          />
          <Button
            onClick={() => console.log(newProduct)}
            variant={"contained"}
            style={{ margin: "1rem 0" }}
          >
            Save
          </Button>
        </div>
      </div>
      <Divider style={{ marginBottom: "1rem" }} />
      {products.map((product: Product) => (
        <AdminListItem product={product} />
      ))}
    </Section>
  );
}

export default Admin;
