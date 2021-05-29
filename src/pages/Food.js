import ProductList from "../components/product/ProductList";
import Container from "../components/ui/Container";
import { dummy_product } from "../data/dummy_data";

function Food() {
  const food = dummy_product.filter((data) => data.category === "food");
  return (
    <section className="py-28">
      <Container>
        <h1 className="font-bold text-2xl mb-5">Food.</h1>
        <ProductList products={food} />
      </Container>
    </section>
  );
}

export default Food;
