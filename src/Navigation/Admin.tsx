import { useContext } from "react";
import Section from "../Components/Section";
import { ProductsContext, Product } from "../Context/ProductListContext";
import AdminListItem from "../Components/AdminListItem";

function Admin() {
  const productsContext = useContext(ProductsContext);
  const products: Product[] = productsContext.list;

  return (
    <Section>
      {products.map((product: Product) => (
        <AdminListItem product={product} />
      ))}
    </Section>
  );
}

export default Admin;
