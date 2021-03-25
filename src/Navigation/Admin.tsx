import { useContext, useState } from "react";
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

  const [showForm, setShowForm] = useState(false);

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
            display: showForm ? "flex" : "none",
            flexDirection: "column",
            alignItems: "start",
            minWidth: "600px",
          }}
        >
          <FormControl>
            <InputLabel>Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={products[0].category}
              // onChange={handleChange}
            >
              {products.map(({ category }) => (
                <MenuItem value={category}>{category}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField style={{ minWidth: "600px" }} label="Product name" />
          <TextField style={{ minWidth: "600px" }} label="Fabric" />
          <TextField style={{ minWidth: "600px" }} label="Color and image" />
          <TextField style={{ minWidth: "600px" }} label="Size and price" />
          <TextField
            style={{ minWidth: "600px" }}
            multiline
            label="Description"
          />
          <Button variant={"contained"} style={{ margin: "1rem 0" }}>
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
