import { motion } from "framer-motion";
import {
  slideUpChildrenVariants,
  slideUpVariants,
} from "../../animation/animation";

function Superior({ superior }) {
  return (
    <motion.div
      variants={slideUpVariants}
      className="p-16 rounded-6xl relative min-h-screen bg-indigo-500 text-white"
    >
      <motion.h3
        variants={slideUpChildrenVariants}
        className="mb-10 font-bold text-xl"
      >
        Superior
      </motion.h3>
      <motion.div
        variants={slideUpChildrenVariants}
        className="bg-white bg-opacity-10 h-screen rounded-5xl  p-8 relative"
      >
        <div className="relative">
          <div className="relative w-full mb-5 h-60 rounded-3xl">
            <img
              src={superior.img}
              alt="chicken steak"
              className="absolute w-full h-full object-contain object-center "
            />
          </div>
          <div className="">
            <p className=" text-2xl">{superior.name}</p>
            <p className=" text-3xl font-bold mt-10 text-right text-gray-900">
              {superior.price}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Superior;
