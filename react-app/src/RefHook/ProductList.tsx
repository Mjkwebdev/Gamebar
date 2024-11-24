import React, { useEffect, useState } from "react";
import { string } from "zod";
interface Props {
  category: string;
}
const ProductList = ({ category }: Props) => {
const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("Fetching Products in", category);
    setProducts(["Clothing", "HouseHold"]);
  }, [category]);
  return <div>product list</div>;
};

export default ProductList;
