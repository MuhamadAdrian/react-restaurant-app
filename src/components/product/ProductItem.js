import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { scaleOnHover } from "../../animation/animation";
import { useContext } from "react";
import OrderContext from "../../store/order-context";
import QuantityPopup from "./QuantityPopup";

function ProductItem({ product }) {
  const orderCtx = useContext(OrderContext);
  const itemIsInOrderList = orderCtx.isItemInOrderList(product.id);
  const [quantity, setQuantity] = useState(null);

  const addToOrderList = () => {
    orderCtx.addOrder(product);
    setQuantity((prevValue) => {
      return prevValue + 1;
    });
  };

  return (
    <motion.div
      whileHover={scaleOnHover}
      className={
        itemIsInOrderList
          ? "bg-gray-900 rounded-2xl  relative w-48 xl:mb-0 mr-3 mt-16 border-2 border-indigo-500 cursor-pointer"
          : "bg-gray-900 rounded-2xl  relative w-48 xl:mb-0 mr-3 mt-16 border-2 border-transparent cursor-pointer"
      }
    >
      <div onClick={addToOrderList}>
        <div className="absolute transform -translate-y-16 w-full">
          <img src={product.img} className="mx-auto" alt="chicken-steak" />
        </div>
        <div className="p-5 pt-28">
          <h2 className=" truncate">{product.name}</h2>
          <p className="text-right mt-3 text-indigo-400 text-lg">
            {product.price}
          </p>
        </div>
      </div>
      <AnimatePresence>
        {itemIsInOrderList && (
          <QuantityPopup
            id={product.id}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ProductItem;
