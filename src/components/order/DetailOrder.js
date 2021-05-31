import { motion } from "framer-motion";
import {
  slideLeftChildrenVariants,
  slideLeftVariants,
  slideUpChildrenVariants,
  slideUpVariants,
} from "../../animation/animation";

function DetailOrder({ orderedListByCategory }) {
  let newStructureDataOrderedList = orderedListByCategory.map((tes) => {
    let totalPriceArray = tes.data.map((d) => d.quantity * d.price);
    let totalPricePerCategory = totalPriceArray.reduce((a, b) => a + b, 0);
    return {
      category: tes.category,
      totalPriceCategory: totalPricePerCategory,
      data: tes.data,
    };
  });

  let totalPriceInArray = newStructureDataOrderedList.map((data) => {
    return data.totalPriceCategory;
  });

  let totalPrice = totalPriceInArray.reduce((a, b) => a + b, 0);

  return (
    <motion.div
      variants={slideUpVariants}
      className=" rounded-xl bg-gray-800 shadow-lg text-white p-5 sticky top-20"
    >
      <motion.h2 variants={slideUpChildrenVariants} className="mb-5">
        Detail Order
      </motion.h2>
      {newStructureDataOrderedList.map((orderedItem) => {
        return (
          <motion.div
            variants={slideLeftChildrenVariants}
            key={orderedItem.category}
            className="mt-5 divide-y  divide-y-reverse divide-gray-500"
          >
            <h3 className="ml-3 text-sm text-gray-400 mb-2 uppercase font-semibold">
              {orderedItem.category}
            </h3>
            <table className="table table-fixed w-full text-sm">
              <tbody>
                {orderedItem.data.map((data) => {
                  return (
                    <motion.tr
                      variants={slideLeftChildrenVariants}
                      key={data.id}
                    >
                      <td>
                        - {data.name} {data.quantity} x
                      </td>
                      <td className="text-right w-2/6">
                        {data.price * data.quantity}
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
            <p className="text-right text-sm">
              Total : {orderedItem.totalPriceCategory}
            </p>
          </motion.div>
        );
      })}
      <motion.p
        variants={slideLeftChildrenVariants}
        className="text-xl mt-5 text-right flex justify-between"
      >
        <span className="text-left">Total Price :</span>{" "}
        <span>{totalPrice}</span>
      </motion.p>
    </motion.div>
  );
}

export default DetailOrder;
