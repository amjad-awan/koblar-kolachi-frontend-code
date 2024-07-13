import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Celibirties from "../pages/celibirties/Celibirties";
import UserRoute from "../pages/acount/UserRoute"
import  Home from "../pages/home/Home";
import  Auth from  "../pages/auth/Auth"
import  DetailsPage from "../pages/detailsPage/DetailsPage"
import  Acount from "../pages/acount/Acount"
import  Products from "../pages/products/Products"
import  Checkouts from "../pages/checkouts/Checkouts"
import ProductByCategory from "../pages/productByCategory/ProductByCategory"
const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/auth" element={<Auth />} />
        <Route path="/checkouts" element={<Checkouts />} />
        <Route path="/collections/:cId" element={<ProductByCategory />} />
        <Route path="/pages/celebrity-style-file" element={<Celibirties />} />
        <Route
          path="/collection/:category/products/:pId"
          element={<DetailsPage />}
        />
        <Route path="/collections/all" element={<Products />} />
        <Route path="/account" element={<UserRoute />}>
          <Route path="" element={<Acount />} />
        </Route>
      </Routes>
 
  );
};

export default AppRoutes;
