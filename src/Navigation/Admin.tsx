import { ChangeEvent, useContext, useState } from "react";
import Section from "../Components/Section";
import { ProductsContext, Product } from "../Context/ProductListContext";
import AdminListItem from "../Components/AdminListItem";
import {
  Button,
  Collapse,
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
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const [category, setCategory] = useState<string>(products[0].category);

  let newProduct: Product = {
    id: String(products.length + 1),
    category: category,
    name: "",
    fabric: "",
    colorProps: [{ img: "", color: "" }],
    sizeProps: [{ size: "", price: "" }],
    description: "",
  };

  let catArr: string[] = [];
  for (const product of productsContext.list) {
    catArr.push(product.category);
  }
  const categories: string[] = [...new Set(catArr)];

  const handleNewProductInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    newProduct = {
      ...newProduct,
      [e.target.name]: value,
    };
  };

  const handleNewColorInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const firstColor = newProduct.colorProps[0];
    newProduct = {
      ...newProduct,
      colorProps: [
        {
          ...firstColor,
          [e.target.name]: value,
        },
      ],
    };
  };

  const handleNewSizeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const firstSize = newProduct.sizeProps[0];
    newProduct = {
      ...newProduct,
      sizeProps: [
        {
          ...firstSize,
          [e.target.name]: value,
        },
      ],
    };
  };

  const handleShowCategories = () => {
    setShowCategories((prev) => !prev);
  };

  const handleCategoryInput = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.target.value as string;
    console.log(value);
    setCategory(value);
  };

  const handleAddNewProductClick = () => {
    productsContext.addNewProduct(newProduct);
    setShowForm(false);
  };

  const handleShowForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <Section>
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Typography
          style={{ cursor: "pointer", marginBottom: "1rem" }}
          variant="body1"
          onClick={handleShowForm}
        >
          Add new product
        </Typography>
        <Collapse in={showForm}>
          <form onSubmit={handleAddNewProductClick}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                minWidth: "600px",
              }}
            >
              <FormControl>
                <InputLabel onClick={handleShowCategories}>Category</InputLabel>
                <Select
                  name="category"
                  value={category}
                  open={showCategories}
                  onOpen={handleShowCategories}
                  onClose={handleShowCategories}
                  onChange={handleCategoryInput}
                >
                  {categories.map((category) => (
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
                type="submit"
                variant={"contained"}
                style={{ margin: "1rem 0" }}
              >
                Save
              </Button>
            </div>
          </form>
        </Collapse>
      </div>
      <Divider style={{ marginBottom: "1rem" }} />
      {products.map((product: Product) => (
        <AdminListItem product={product} />
      ))}
    </Section>
  );
}

export default Admin;
