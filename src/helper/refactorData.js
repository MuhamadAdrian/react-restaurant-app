export default function filterByCategory(products) {
  const types = [];
  products.forEach((product) => {
    let isThere = types.some((type) => type.id === product.type.id);
    if (!isThere) {
      types.push(product.type);
    }
  });

  let newData = [];

  types.forEach((type) => {
    let data = {
      type: type,
      data: products.filter((product) => product.type.id === type.id),
    };
    newData.push(data);
  });

  return newData;
}
