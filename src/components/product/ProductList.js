import ProductItem from "./ProductItem";

function ProductList({ superiorProduct }) {
  return (
    <ul className="flex flex-row flex-wrap gap-4 list-none">
      {superiorProduct.map((product) => (
        <ProductItem key={product.id} id={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;
