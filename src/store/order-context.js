import { createContext, useState } from "react";

const OrderContext = createContext({
  orderItems: [],
  showModal: false,
  totalOrderItems: 0,
  addOrder: (selectedItem) => {},
  decreaseOrder: () => {},
  isItemInOrderList: (itemId) => {},
});

export function OrderContextProvider({ children }) {
  const [orderItems, setOrderItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addOrderHandler = (selectedItem) => {
    let item = {
      ...selectedItem,
      quantity: 1,
    };
    let newItem = [...orderItems, item];

    if (isItemInOrderList(selectedItem.id)) {
      let existItem = orderItems.find((item) => item.id === selectedItem.id);
      existItem.quantity += 1;
    } else {
      setOrderItems(newItem);
      if (newItem.length > 0) {
        setShowModal(true);
      }
    }
  };

  const decreaseOrderHandler = (id) => {
    if (isItemInOrderList(id)) {
      let existItem = orderItems.find((item) => item.id === id);
      if (existItem.quantity > 1) {
        existItem.quantity -= 1;
      } else if (existItem.quantity <= 1) {
        setOrderItems((prevItem) => {
          if (prevItem.length === 1) {
            setShowModal(false);
          }
          return prevItem.filter((item) => item.id !== id);
        });
      }
    }
  };

  const isItemInOrderList = (itemId) => {
    return orderItems.some((item) => item.id === itemId);
  };

  const context = {
    orderItems: orderItems,
    totalOrderItems: orderItems.length,
    showModal: showModal,
    addOrder: addOrderHandler,
    decreaseOrder: decreaseOrderHandler,
    isItemInOrderList: isItemInOrderList,
  };

  return (
    <OrderContext.Provider value={context}>{children}</OrderContext.Provider>
  );
}

export default OrderContext;
