import { Link } from "react-router-dom";
import ProductList from "../product/ProductList";
import { dummy_product } from "../../data/dummy_data";
import { motion } from "framer-motion";
import {
  slideUpVariants,
  slideUpChildrenVariants,
  scaleOnHover,
} from "../../animation/animation";

function Product() {
  const superior = dummy_product.filter((product) => product.superior === true);
  return (
    <motion.div variants={slideUpVariants}>
      <motion.div variants={slideUpChildrenVariants} className="button mb-10">
        <Link to="/food">
          <motion.button
            whileHover={scaleOnHover}
            className="bg-indigo-500 ml-auto py-4 px-6 ring ring-indigo-500 ring-offset-4 ring-offset-black text-lg rounded-full"
          >
            Start Order
          </motion.button>
        </Link>
      </motion.div>
      <motion.p variants={slideUpChildrenVariants} className="mb-5">
        The Superior Product
      </motion.p>
      <ProductList products={superior} animation={slideUpChildrenVariants} />
    </motion.div>
  );
}

export default Product;
