import { slideRightVariants } from "../../animation/animation";
import { motion } from "framer-motion";

function Tagline() {
  return (
    <>
      {" "}
      <motion.h1
        variants={slideRightVariants}
        className="text-8xl font-semibold leading-tight mb-3"
      >
        Welcome To Our Menus
      </motion.h1>
      <motion.p variants={slideRightVariants} className=" text-2xl">
        Lots of menus you can choose! Eat now! or just Drink it's fine
      </motion.p>
    </>
  );
}

export default Tagline;
