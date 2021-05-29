import Navigation from "../components/Navigation";
import ToastOrder from "../components/order/ToastOrder";
import { useContext, useEffect, useState } from "react";
import OrderContext from "../store/order-context";
import { AnimatePresence } from "framer-motion";

function Layout({ children }) {
  const orderCtx = useContext(OrderContext);
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <Navigation />
      <main className=" bg-gradient-to-br from-black to-gray-900 min-h-screen">
        <div className="content text-white">{children}</div>
      </main>
      <AnimatePresence>{orderCtx.showModal && <ToastOrder />}</AnimatePresence>
    </div>
  );
}

export default Layout;
