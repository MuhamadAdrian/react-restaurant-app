import ProductList from "../components/product/ProductList";
import Container from "../components/ui/Container";
import { dummy_product } from "../data/dummy_data";
import groupByType from "../helper/refactorData";
import Superior from "../components/product/Superior";
import BgDesserts from "../img/bg-desserts.png";
import { motion } from "framer-motion";
import {
  fadeVariants,
  slideLeftChildrenVariants,
  slideLeftVariants,
  slideRightVariants,
} from "../animation/animation";

function Desserts() {
  const desserts = dummy_product.filter((data) => data.category === "desserts");
  const newData = groupByType(desserts);
  const superiorDesserts = desserts.find(
    (dessert) => dessert.superior === true
  );

  return (
    <motion.section
      variants={fadeVariants}
      initial="from"
      animate="to"
      exit="from"
      className="py-28 bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${BgDesserts})` }}
    >
      <Container>
        <div className="grid grid-cols-2 grid-flow-row gap-x-5">
          <div className="col-span-1">
            <div className="fixed w-4/12">
              <motion.h1
                variants={slideRightVariants}
                className="font-bold text-2xl mb-5"
              >
                Desserts.
              </motion.h1>
              <Superior superior={superiorDesserts} />
            </div>
          </div>
          <div className="col-span-1">
            {newData.map((data) => {
              return (
                <motion.div
                  variants={slideLeftVariants}
                  key={data.type.id}
                  className="mb-8"
                >
                  <h1>{data.type.name}</h1>
                  <ProductList
                    animation={slideLeftChildrenVariants}
                    products={data.data}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </motion.section>
  );
}

export default Desserts;
