import ProductItem from "./ProductItem";
import { motion } from "framer-motion";

function ProductList({ products }) {
  const slideUpChildrenVariants = {
    from: {
      opacity: 0,
      y: 60,
    },
    to: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <ul className="flex flex-row flex-wrap gap-4 list-none">
      {products.map((product) => (
        <motion.li key={product.id} variants={slideUpChildrenVariants}>
          <ProductItem id={product.id} product={product} />
        </motion.li>
      ))}
    </ul>
  );
}

export default ProductList;
