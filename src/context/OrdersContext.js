import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

const OrdersContext = createContext();

const OrdersProvider = ({ children }) => {
  const [usersOrders, setUsersOrders] = useState([]);

  // create order
  const createOrders = async (orderData) => {
    const { products, ...others } = orderData;
    const productData = [];
    orderData.products.map((product) => {
      productData.push({
        productId: product._id,
        productcategory: product.productcategory._id,
        quantity: product.quantity,
        showSize: product.showSize.value,
      });
    });
    const user = JSON.parse(localStorage.getItem("user"));
    const combinedData = {
      ...others,
      country: others.country.value,
      products: productData,
      orderBy: user?.user?._id,
    };

    try {
      await axios.post("/api/v1/orders/create-order", combinedData);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getSpecificUsersOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      const { data } = await axios.get(`/api/v1/orders//user-orders/${user.user._id}`);
      setUsersOrders(data.orders);
    } catch (error) {}
  };
  // useEffect(()=>{
  //   getCategories()
  // },[])

  return (
    <OrdersContext.Provider
      value={{ createOrders, getSpecificUsersOrders, usersOrders }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersProvider;

export const useOrders = () => {
  return useContext(OrdersContext);
};
