import { motion } from "framer-motion";
import { useState } from "react";

function ProductItem({ product }) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleToOrderList = () => {
    setIsClicked(!isClicked);
  };
  return (
    <motion.div
      onClick={toggleToOrderList}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 150 }}
      className={
        isClicked
          ? "bg-gray-900 rounded-2xl  relative w-48 xl:mb-0 mr-3 mt-16 border-2 border-indigo-500"
          : "bg-gray-900 rounded-2xl  relative w-48 xl:mb-0 mr-3 mt-16 border-2 border-transparent"
      }
    >
      <div className="absolute transform -translate-y-16 w-full">
        <img src={product.img} className="mx-auto" alt="chicken-steak" />
      </div>
      <div className="p-5 pt-28">
        <h2>{product.name}</h2>
        <p>{product.price}</p>
      </div>
    </motion.div>
  );
}

export default ProductItem;
