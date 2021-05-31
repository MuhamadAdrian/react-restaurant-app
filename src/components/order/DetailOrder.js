function DetailOrder({ orderedListByCategory }) {
  let newStructureDataOrderedList = orderedListByCategory.map((tes) => {
    let totalPriceArray = tes.data.map((d) => d.quantity * d.price);
    let totalPricePerCategory = totalPriceArray.reduce((a, b) => a + b, 0);
    return {
      category: tes.category,
      totalPriceCategory: totalPricePerCategory,
      data: tes.data,
    };
  });

  let totalPriceInArray = newStructureDataOrderedList.map((data) => {
    return data.totalPriceCategory;
  });

  let totalPrice = totalPriceInArray.reduce((a, b) => a + b, 0);

  return (
    <div className=" rounded-xl bg-gray-800 shadow-lg text-white p-5 sticky top-20">
      <h2 className="mb-5">Detail Order</h2>
      {newStructureDataOrderedList.map((orderedItem) => {
        return (
          <div
            key={orderedItem.category}
            className="mt-5 divide-y  divide-y-reverse divide-gray-500"
          >
            <h3 className="ml-3 text-sm text-gray-400 mb-2 uppercase font-semibold">
              {orderedItem.category}
            </h3>
            <table className="table table-fixed w-full text-sm">
              <tbody>
                {orderedItem.data.map((data) => {
                  return (
                    <tr key={data.id}>
                      <td>
                        - {data.name} {data.quantity} x
                      </td>
                      <td className="text-right w-2/6">
                        {data.price * data.quantity}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="text-right text-sm">
              Total : {orderedItem.totalPriceCategory}
            </p>
          </div>
        );
      })}
      <p className="text-xl mt-5 text-right flex justify-between">
        <span className="text-left">Total Price :</span>{" "}
        <span>{totalPrice}</span>
      </p>
    </div>
  );
}

export default DetailOrder;
