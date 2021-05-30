import { useContext } from "react";
import OrderContext from "../store/order-context";
import Container from "../components/ui/Container";
import ProductList from "../components/product/ProductList";
import { motion } from "framer-motion";
import { fadeVariants, slideRightVariants } from "../animation/animation";

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
            <ProductList products={orderCtx.orderItems} />
          </div>
          <div className="col-span-1">
            <div className=" rounded-xl bg-gray-800 shadow-lg text-white p-5">
              <h2 className="mb-5">Detail Order</h2>
              {orderedListByCategory.map((orderedItem) => {
                return (
                  <div key={orderedItem.category} className="mt-5">
                    <h3 className="ml-3 text-sm text-gray-400 mb-2 uppercase font-semibold">
                      {orderedItem.category}
                    </h3>
                    <table className="table table-fixed w-full text-sm">
                      <tbody>
                        {orderedItem.data.map((data) => {
                          return (
                            <tr key={data.id}>
                              <td>
                                - {data.name} {data.quantity} x
                              </td>
                              <td className="text-right w-2/6">
                                {data.price * data.quantity}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}

export default Order;
