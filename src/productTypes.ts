interface Product {
  id: string;
  category: string;
  name: string;
  fabric?: string;
  colorProps: Array<{ img: string; color: string }>;
  sizeProps: Array<{ size: string; price: string }>;
  description: string;
}

export default Product;
