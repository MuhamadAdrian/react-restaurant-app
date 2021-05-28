import BgHome from "../img/bg-home.png";
import Container from "../components/ui/Container";
import { Link } from "react-router-dom";
import ProductList from "../components/product/ProductList";
import { dummy_product } from "../data/dummy_data";
import { motion } from "framer-motion";
import fadeVariants from "../animation/fadeVariants";

function Home() {
  const superior = dummy_product.filter((product) => product.superior === true);

  return (
    <motion.section
      variants={fadeVariants}
      initial="from"
      animate="to"
      className="bg-no-repeat"
      style={{ backgroundImage: `url(${BgHome})` }}
    >
      <Container>
        <div className="flex flex-row items-center h-screen">
          <div className="left md:w-6/12">
            <h1 className="text-8xl font-semibold leading-tight mb-3">
              Welcome To Our Menus
            </h1>
            <p className=" text-2xl">
              Lots of menus you can choose! Eat now! or just Drink it's fine
            </p>
          </div>
          <div className="right md:w-6/12 ml-40">
            <div className="button mb-10">
              <Link to="/food">
                <button className="bg-indigo-500 ml-auto py-4 px-6 ring ring-indigo-500 ring-offset-4 ring-offset-black text-lg rounded-full">
                  Start Order
                </button>
              </Link>
            </div>
            <p className="mb-5">The Superior Product</p>
            <ProductList superiorProduct={superior} />
          </div>
        </div>
      </Container>
    </motion.section>
  );
}

export default Home;
