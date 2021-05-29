import ProductItem from "./ProductItem";
import { motion } from "framer-motion";

function ProductList({ products, animation }) {
  return (
    <ul className="flex flex-row flex-wrap gap-4 list-none">
      {products.map((product) => (
        <motion.li key={product.id} variants={animation}>
          <ProductItem id={product.id} product={product} />
        </motion.li>
      ))}
    </ul>
  );
}

export default ProductList;
