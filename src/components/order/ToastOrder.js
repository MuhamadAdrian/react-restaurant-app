import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  scaleOnHover,
  slideUpChildrenVariants,
} from "../../animation/animation";

function ToastOrder() {
  return (
    <motion.div
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      className="fixed bottom-0 right-0 p-4"
      variants={slideUpChildrenVariants}
      initial="from"
      animate="to"
      exit="from"
    >
      <div className="bg-gray-800 shadow-lg p-4 rounded-lg text-white flex items-center">
        <p className="mr-5">Cofirm your order ?</p>
        <div className="mr-2">
          <motion.button
            whileHover={scaleOnHover}
            className="bg-indigo-500 px-3 py-2 rounded-lg"
          >
            Confirm
          </motion.button>
        </div>
        <div>
          <Link to="/order">
            <motion.button
              whileHover={scaleOnHover}
              className="bg-gray-700 px-3 py-2 rounded-lg"
            >
              See My Orders
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ToastOrder;
