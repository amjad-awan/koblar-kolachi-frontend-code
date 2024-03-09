import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
const HomeCategory = ({ data }) => {
  return (
    <div className="cat-card relative cursor-pointer h-[700px] overflow-hidden">
      <img
        src={`/api/v1/category/get-category-photo/${data._id}`}
        className={`h-[100%] w-[100%]  object-cover }`}
        alt=""
      />
      <div className="w-[100%] flex justify-center items-center flex-col gap-[20px] absolute bottom-3 left-[50%] right-[50%] translate-y-[-50%] translate-x-[-50%] ]">
        <h3 className="text-center text-[#fff] text-[36px] font-[700] ">
          {data.name}
        </h3>

        <button className="button-style">
          <Link target="_blank" to={`/collections/${data?._id}`}>
            <span>view products</span>
            <span> view products</span>
          </Link>

          {/* <p className="z-50 text-[#36363]">  View </p> */}
        </button>
      </div>
    </div>
  );
};


export default React.memo(HomeCategory);

