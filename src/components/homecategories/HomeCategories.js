import React from "react";
import HomeCategory from "../homecategory/HomeCategory";
import { useCategories } from "../../context/CategoriesContext";
import Loader from "../loader/Loader";


const HomeCategories = () => {
  const {categories,loading}=useCategories()
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 py-[50px] text-center'>
      {loading?<Loader/>:categories && categories?.map((data, index) => {
        return <HomeCategory data={data} key={index} />;
      })}
    </div>
  );
}


export default React.memo(HomeCategories);

