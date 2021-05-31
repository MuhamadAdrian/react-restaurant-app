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
    let temp_orderItems = [...orderItems];

    if (isItemInOrderList(selectedItem.id)) {
      let existItemIndex = temp_orderItems.findIndex(
        (item) => item.id === selectedItem.id
      );
      let temp_elm = { ...temp_orderItems[existItemIndex] };
      temp_elm.quantity += 1;
      temp_orderItems[existItemIndex] = temp_elm;
      setOrderItems(temp_orderItems);
    } else {
      let item = {
        ...selectedItem,
        quantity: 1,
      };
      let newItem = [...temp_orderItems, item];
      setOrderItems(newItem);
      if (newItem.length > 0) {
        setShowModal(true);
      }
    }
  };

  const decreaseOrderHandler = (id) => {
    let temp_orderItems = [...orderItems];
    if (isItemInOrderList(id)) {
      let existItemIndex = temp_orderItems.findIndex((item) => item.id === id);
      let temp_elm = { ...temp_orderItems[existItemIndex] };
      if (temp_elm.quantity > 1) {
        temp_elm.quantity -= 1;
        temp_orderItems[existItemIndex] = temp_elm;
        setOrderItems(temp_orderItems);
      } else if (temp_elm.quantity <= 1) {
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
