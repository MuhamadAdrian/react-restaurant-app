import ProductList from "../components/product/ProductList";
import Container from "../components/ui/Container";
import { dummy_product } from "../data/dummy_data";
import groupByType from "../helper/refactorData";
import BgDrink from "../img/bg-drink.png";
import Superior from "../components/product/Superior";
import { motion } from "framer-motion";
import {
  fadeVariants,
  slideLeftChildrenVariants,
  slideLeftVariants,
  slideRightVariants,
} from "../animation/animation";

function Drink() {
  const drinks = dummy_product.filter((data) => data.category === "drink");
  const newData = groupByType(drinks);
  const superiorDrink = drinks.find((drink) => drink.superior === true);

  return (
    <motion.section
      variants={fadeVariants}
      initial="from"
      animate="to"
      exit="from"
      className="py-28 bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${BgDrink})` }}
    >
      <Container>
        <div className="grid grid-cols-2 grid-flow-row gap-x-5">
          <div className="col-span-1">
            <div className="fixed w-4/12">
              <motion.h1
                variants={slideRightVariants}
                className="font-bold text-2xl mb-5"
              >
                Drink.
              </motion.h1>
              <Superior superior={superiorDrink} />
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

export default Drink;
