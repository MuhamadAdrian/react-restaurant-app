import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import OrderContext from "../store/order-context";

const slideDownVariants = {
  from: {
    opacity: 0,
    y: -60,
  },
  to: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideDownChildrenVariants = {
  from: {
    opacity: 0,
    y: -60,
  },
  to: {
    opacity: 1,
    y: 0,
  },
};

function Navigation() {
  const orderCtx = useContext(OrderContext);
  return (
    <motion.header
      variants={slideDownVariants}
      initial="from"
      animate="to"
      className="flex justify-between items-center w-full fixed top-0 left-0 text-white py-5 px-8 z-50"
    >
      <div className="logo">Logo</div>
      <ul className="list-none">
        <motion.li
          variants={slideDownChildrenVariants}
          className="inline-block ml-5 my-3"
        >
          <NavLink
            activeStyle={{
              fontWeight: "bold",
            }}
            className="p-5"
            exact
            to="/"
          >
            Home
          </NavLink>
        </motion.li>
        <motion.li
          variants={slideDownChildrenVariants}
          className="inline-block ml-5 my-3"
        >
          <NavLink
            activeStyle={{
              fontWeight: "bold",
            }}
            className="p-5"
            to="/food"
          >
            Food
          </NavLink>
        </motion.li>
        <motion.li
          variants={slideDownChildrenVariants}
          className="inline-block ml-5 my-3"
        >
          <NavLink
            activeStyle={{
              fontWeight: "bold",
            }}
            className="p-5"
            to="/drink"
          >
            Drink
          </NavLink>
        </motion.li>
        <motion.li
          variants={slideDownChildrenVariants}
          className="inline-block ml-5 my-3"
        >
          <NavLink
            activeStyle={{
              fontWeight: "bold",
            }}
            className="p-5"
            to="/desserts"
          >
            Desserts
          </NavLink>
        </motion.li>
        <motion.li
          variants={slideDownChildrenVariants}
          className="inline-block ml-5"
        >
          <NavLink
            activeStyle={{
              fontWeight: "bold",
            }}
            to="/order"
          >
            My Order
            <span className="rounded-lg w-8 h-8 bg-indigo-500 p-2 ml-3">
              {orderCtx.totalOrderItems}
            </span>
          </NavLink>
        </motion.li>
      </ul>
    </motion.header>
  );
}

export default Navigation;
