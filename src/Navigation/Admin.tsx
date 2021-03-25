import { useContext, useState } from "react";
import Section from "../Components/Section";
import { ProductsContext, Product } from "../Context/ProductListContext";
import AdminListItem from "../Components/AdminListItem";
import { Collapse, Divider, Typography } from "@material-ui/core";
import NewProductForm from "../Components/NewProductForm";

function Admin() {
  const productsContext = useContext(ProductsContext);
  const products: Product[] = productsContext.list;

  const [showForm, setShowForm] = useState<boolean>(false);

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
          <NewProductForm />
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
