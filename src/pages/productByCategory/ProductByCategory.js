import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { Link, useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import FeatureCard from "../../components/featurecard/FeatureCard";
import Loader from "../../components/loader/Loader";

const ProductByCategory = () => {
  const { cId } = useParams();
  const { specificCategoryProducts, loading, getSpecificCategoryProducts } =
    useProducts();

  useEffect(() => {
    getSpecificCategoryProducts(cId);
  }, [cId]);

  return (
    <Layout>
      <div className="container mx-auto mt-[113px] py-[56px]">
        {loading ? (
          <Loader />
        ) : specificCategoryProducts.length > 0 ? (
          <>
            <h1 className="text-center text-[24px] capitalize text-[#5c5c5c] font-[600]">
              {specificCategoryProducts &&
                specificCategoryProducts[0]?.productcategory.name}
            </h1>
            <div className="grid sm:grid-cols-12 lg:grid-cols-4 gap-8 mt-[50px]">
              {specificCategoryProducts &&
                specificCategoryProducts.map((data, index) => {
                  return (
                    <Link 
                    key={index}
                      to={`/collection/${data.productcategory.name}/products/${data._id}`}
                    >
                      <FeatureCard data={data} key={index} />;
                    </Link>
                  );
                })}
            </div>
          </>
        ) : (
          <div className="container mx-auto flex justify-center h-[60vh] items-center">
            <div className="border-[5px] text-center border-dashed max-[300px] p-[50px]">
              <h1 className="text-[26px] font-[700] text-[#5c5c5c9a] uppercase">
                No product found in this category!
              </h1>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default React.memo(ProductByCategory);

