import React from "react";
import Layout from "../../components/layout/Layout";
import FilterActions from "../../components/filterActions/FilterActions";
import { useProducts } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import FeatureCard from "../../components/featurecard/FeatureCard";
import FilterDropDown from "../../components/filterDropDown/FilterDropDown";
const Products = () => {
  const { currentPage, setCurrentPage, products, loading } = useProducts();

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage === 0 ? 1 : newPage);
  };
  return (
    <Layout>
      <div className="mt-[133px] container md:max-w-[1380px] px-[20px] mx-auto">
        <h1 className="text-center text-[24px] capitalize text-[#5c5c5c]  my-[70px] font-[600]">
          All Products
        </h1>

        <div className="flex flex-col lg:flex-row gap-[20px]">
          <div className="flex flex-row lg:flex-col justify-between lg:justify-start gap-[40px] items-center md:items-start w-[100%] lg:w-[25%]">
            <p className="text-[20px] text-[#5c5c5c] font-[400]">
              Filters
            </p>
            <div className="hidden lg:block ">
            <FilterActions />
            </div>
            <div className="block lg:hidden ">
              <FilterDropDown/>
            </div>
         
          </div>
          <div className="w-[100%] mt-[40px] lg:mt-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            {loading ? (
              <p className="text-[22px] font-[700]">Loading ....</p>
            ) : (
              products.map((data, index) => {
                return (
                  <div key={index} className="col-span-1 w-[100%]" >
                    <Link
                      to={`/collection/${data.productcategory.name}/products/${data._id}`}
                    >
                      <FeatureCard
                        data={data}
                        index={index}
                        //   scrollCard={scrollCard}
                      />
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className=" mt-12 flex justify-end gap-8 items-center">
        
          <button
            className="text-[16px]"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </button>
          <button
            className="text-[16px]"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
};


export default React.memo(Products);

