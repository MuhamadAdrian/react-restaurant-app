import { useContext } from "react";
import OrderContext from "../store/order-context";
import Container from "../components/ui/Container";
import ProductList from "../components/product/ProductList";
import { motion } from "framer-motion";
import { fadeVariants, slideRightVariants } from "../animation/animation";
import DetailOrder from "../components/order/DetailOrder";

function Order() {
  const orderCtx = useContext(OrderContext);

  const orderedItems = orderCtx.orderItems;

  const categories = [];

  orderedItems.forEach((orderedItem) => {
    let category = categories.find((c) => c === orderedItem.category);
    if (!category) {
      categories.push(orderedItem.category);
    }
  });

  const orderedListByCategory = categories.map((category) => {
    return {
      category: category,
      data: orderedItems.filter(
        (orderedItem) => orderedItem.category === category
      ),
    };
  });

  return (
    <motion.section
      variants={fadeVariants}
      initial="from"
      animate="to"
      className="py-28"
    >
      <Container>
        <motion.h1
          variants={slideRightVariants}
          className="font-bold text-2xl mb-5"
        >
          My Order.
        </motion.h1>
        <div className="grid grid-cols-3 grid-flow-row gap-x-5">
          <div className="col-span-2">
            {orderedListByCategory.map((orderedItem) => {
              return (
                <div key={orderedItem.category} className="mt-5">
                  <h3 className="ml-3 text-sm text-gray-400 mb-2 uppercase font-semibold">
                    {orderedItem.category}
                  </h3>

                  <ProductList products={orderedItem.data} />
                </div>
              );
            })}
          </div>
          <div className="col-span-1">
            {orderedListByCategory.length > 0 && (
              <DetailOrder orderedListByCategory={orderedListByCategory} />
            )}
          </div>
        </div>
      </Container>
    </motion.section>
  );
}

export default Order;
