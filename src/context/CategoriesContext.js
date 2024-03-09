import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCategories = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get("/api/v1/category/get-categories");
      setCategories(data?.categories);
      setLoading(false)
    } catch (error) {
      console.log("error", error);
      setLoading(false)
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories,
        loading,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;

export const useCategories = () => {
  return useContext(CategoriesContext);
};
