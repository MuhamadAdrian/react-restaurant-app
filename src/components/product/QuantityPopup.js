import { useContext, useEffect } from "react";
import OrderContext from "../../store/order-context";
import { zoomInOut } from "../../animation/animation";
import { motion } from "framer-motion";

function QuantityPopup({ id, quantity, setQuantity }) {
  const orderCtx = useContext(OrderContext);
  const thisProduct = orderCtx.orderItems.find((item) => item.id === id);

  useEffect(() => {
    if (thisProduct) {
      setQuantity(thisProduct.quantity);
    }
  }, [setQuantity, thisProduct]);

  return (
    <motion.div
      onClick={() => {
        orderCtx.decreaseOrder(id);
        setQuantity((prevValue) => {
          return prevValue - 1;
        });
      }}
      variants={zoomInOut}
      initial="from"
      animate="to"
      exit="from"
      className="w-8 h-8 absolute flex items-center justify-center -bottom-3 -left-3 rounded-xl bg-indigo-500 text-white"
    >
      <p className="text-center self-center m-auto">{quantity}x</p>
    </motion.div>
  );
}

export default QuantityPopup;
