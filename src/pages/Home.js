import BgHome from "../img/bg-home.png";
import Container from "../components/ui/Container";
import Tagline from "../components/home/Tagline";
import Product from "../components/home/Product";
import { slideRightVariants, fadeVariants } from "../animation/animation";
import { motion } from "framer-motion";

function Home() {
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
          <motion.div variants={slideRightVariants} className="left md:w-6/12">
            <Tagline />
          </motion.div>
          <div className="right md:w-6/12 ml-40">
            <Product />
          </div>
        </div>
      </Container>
    </motion.section>
  );
}

export default Home;
