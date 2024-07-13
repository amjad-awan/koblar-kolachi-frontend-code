import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

const PrductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [featuresProducts, setFeaturesProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const [loading, setLoading] = useState(false);
  const [specificCategoryProducts, setSpecificCategoryProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const [filters, setFilters] = useState({
    sale: false, // Initialize the sale filter to false (not selected)
    featured: false, // Initialize the featured filter to false (not selected)
    priceSort: "lowtohigh", // Initialize the sorting order
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [cartData, setCartData] = useState({
    showSize: "",
    quantity: 1,
  });
  console.log('cartData',cartData)

  const [cartStepper, setCartStepper] = useState({
    paymentMethod: null,
  });

  const getFeaturesproducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/v1/product/get-featured-products");
      setFeaturesProducts(data?.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getSingleProduct = async (pId) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/get-single-product/${pId}`);
      setSingleProduct(data?.product);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const getSpecificCategoryProducts = async (cId) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `/api/v1/product/get-specific-category-products/${cId}`
      );
      setSpecificCategoryProducts(data?.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const addToCart = async (product,shoesSize) => {
    const newCartItem = {
      ...cartData,
      ...product,
      showSize:shoesSize // Assuming 'product' is an object you want to add to the cart
    };
    console.log("product", product);
    setCart([...cart, newCartItem]);
    localStorage.setItem("cart", JSON.stringify([...cart, newCartItem]));
  };
  // Function to remove a product from the cart
  const removeFromCart = (productToRemove) => {
    // Filter out the product to be removed
    const updatedCart = cart.filter(
      (product) => product._id !== productToRemove._id
    );
    // Update the state
    setCart(updatedCart);

    // Update the data in localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Load cart data from Local Storage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = new URLSearchParams({
        ...filters,
        page: currentPage,
      });
      try {
        const { data } = await axios.get(
          `/api/v1/product/filter-and-pagination?${queryParams}`
        );

        if (data) {
          setProducts(data.products);
        } else {
          // Handle errors
        }
      } catch (error) {
        // Handle network errors
      }
    };

    fetchData();
  }, [filters, currentPage]);

  useEffect(() => {
    getFeaturesproducts();
  }, []);

  return (
    <PrductsContext.Provider
      value={{
        featuresProducts,
        cartData,
        setCartStepper,
        cartStepper,
        setCartData,
        loading,
        addToCart,
        cart,
        setCart,
        removeFromCart,
        getSpecificCategoryProducts,
        specificCategoryProducts,
        setFeaturesProducts,
        getSingleProduct,
        singleProduct,
        filters,
        setFilters,
        currentPage,
        setCurrentPage,
        products,
        setProducts,
      }}
    >
      {children}
    </PrductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => {
  return useContext(PrductsContext);
};
