import React, { useState } from "react";
import fp from "../../assets/images/feature-p.jpg";
import { Link } from "react-router-dom";
import AddToCardForm from "../addToCardForm/AddToCardForm";

const FeatureProduct = () => {

 

  return (
    <div className="container mx-auto py-[100px]">
      <div className="flex flex-col justify-center items-center pb-[70px]">
        <h2 className="font-[500] mt-[15px] text-[24px] text-[#5c5c5c]">
          Featured product
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mx-auto gap-[60px] max-w-[1100px]">
        <div className="w-[100%] sm:col-span-12 md:col-span-5">
      
          <img src={fp} className="w-[100%] h-[100%] object-contain" alt="" />
        </div>
        <div className="sm:col-span-12 md:col-span-7 md:px-[50px]">
          <AddToCardForm />
          <div className="mt-[40px] text-[#5c5c5c] text-[22px]">
            <Link to={`/collection/:category/products/:pId`} className="mt-[50px] underline">View product details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default React.memo(FeatureProduct);

