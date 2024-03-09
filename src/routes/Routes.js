import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Auth = lazy(() => import("../pages/auth/Auth"));
const DetailsPage = lazy(() => import("../pages/detailsPage/DetailsPage"));
const UserRoute = lazy(() => import("../pages/acount/UserRoute"));
const Acount = lazy(() => import("../pages/acount/Acount"));
const Home = lazy(() => import("../pages/home/Home"));
const Products = lazy(() => import("../pages/products/Products"));
const Checkouts = lazy(() => import("../pages/checkouts/Checkouts"));
const ProductByCategory = lazy(() =>
  import("../pages/productByCategory/ProductByCategory")
);
const Celibirties = lazy(() => import("../pages/celibirties/Celibirties"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<p>loading ....</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acount/auth" element={<Auth />} />
        <Route path="/checkouts" element={<Checkouts />} />
        <Route path="/collections/:cId" element={<ProductByCategory />} />
        <Route path="/pages/celebrity-style-file" element={<Celibirties />} />
        <Route
          path="/collection/:category/products/:pId"
          element={<DetailsPage />}
        />
        <Route path="/collections/all" element={<Products />} />
        <Route path="/acount" element={<UserRoute />}>
          <Route path="" element={<Acount />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
