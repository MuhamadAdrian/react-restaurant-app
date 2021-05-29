import { useContext } from "react";
import OrderContext from "../store/order-context";
import Container from "../components/ui/Container";
import ProductList from "../components/product/ProductList";

function Order() {
  const orderCtx = useContext(OrderContext);

  return (
    <section className="py-28">
      <Container>
        <h1 className="font-bold text-2xl mb-5">My Order.</h1>
        <ProductList products={orderCtx.orderItems} />
      </Container>
    </section>
  );
}

export default Order;
