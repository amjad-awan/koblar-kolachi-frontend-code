// src/components/Sidebar.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, initTE } from "tw-elements";
import { BsPlus, BiMinus } from "react-icons/bs";
import { useCategories } from "../../context/CategoriesContext";
// ...

const Sidebar = ({ setOpenSideBar, openSideBar }) => {
  const [categoryOPen, setCategoryOPen] = useState(false);
  const [categoryListOPen, setCategoryListOPen] = useState(false);
  const [openAboutUs, setOpenAboutUs] = useState(false);
  const { categories } = useCategories();
  useEffect(() => {
    initTE({ Collapse });
  }, []);

  return (
    <>
      <div
        className={`fixed overlay inset-0 bg-[rgba(0,0,0,.65)] ${
          openSideBar ? "translate-x-[0%]" : "translate-x-[-100%]"
        } z-50`}
        onClick={() => setOpenSideBar(false)}
      ></div>
      <div
        className={`fixed left-0 top-0 ${
          openSideBar ? "translate-x-[0%]" : "translate-x-[-100%]"
        } sidebar`}
      >
        <div className="with-fading-shadow">
        <div className="w-[100%] h-[80vh] overflow-y-scroll pr-[20px] ">
          <div className="w-[100%] border-b-[1px] py-[20px]  border-[#5c5c5c36]">
            <div
              className="flex justify-between cursor-pointer items-center w-[100%]"
              onClick={() => {
                setCategoryListOPen(false)
                setCategoryOPen((prev) => !prev);
              }}
            >
              <p className="text-[20px] font-[500] text-[#5c5c5c] ">
                Shop By Category
              </p>
              <BsPlus
                className={`text-[20px] font-[600] text-[#5c5c5c] transition-all duration-500 transform ${
                  categoryOPen ? "rotate-90" : ""
                }`}
              />
            </div>
            {categoryOPen && (
              <>
                <div
                  className="flex justify-between cursor-pointer mt-[20px] pl-3 items-center w-[100%]"
                  onClick={() => setCategoryListOPen((prev) => !prev)}
                >
                  <p className="text-[17px] font-[500] text-[#5c5c5c] ">
                    Men's Shoes
                  </p>
                  <BsPlus
                    className={`text-[20px] font-[600] text-[#5c5c5c] transition-all duration-500 transform ${
                      categoryListOPen ? "rotate-90" : ""
                    }`}
                  />
                </div>
                {categoryListOPen && (
                  <div className="ml-[20px] pl-[20px] border-l-[1px] mt-[20px] border-[#5c5c5c36]">
                    <ul className="submenu-child">
                      {
                        categories?.map((category, index)=>{
                          return  <li key={index} className="flex items-center justify-between text-[#5c5c5c80] pb-[10px] capitalize">
                          <Link to={`/collections/${category?._id}`}>
                          
                          {category.name}</Link>
                        </li>
                        })
                      }
                     
                    

                    </ul>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="w-[100%] border-b-[1px] py-[20px] border-[#5c5c5c36]">
            <Link className="w-[100%]" to="/pages/celebrity-style-file">
              <p className="text-[17px] font-[500] text-[#5c5c5c] ">
           
                Celebrity Style File{" "}
              </p>
            </Link>
          </div>
          <div className="w-[100%] border-b-[1px] py-[20px] border-[#5c5c5c36]">
            <Link className="w-[100%]" to="/pages/celebrity-style-file">
              <p className="text-[17px] font-[500] text-[#5c5c5c]">
           
              All Products
              </p>
            </Link>
          </div>
          <div className="w-[100%] border-b-[1px] py-[20px]  border-[#5c5c5c36]">
  <div
    className="flex justify-between cursor-pointer items-center w-[100%]"
    onClick={() => {
      setOpenAboutUs((prev) => !prev);
    }}
  >
    <p className="text-[20px] font-[500] text-[#5c5c5c] ">
      About Us
    </p>
    <BsPlus
      className={`text-[20px] font-[600] text-[#5c5c5c] transition-all duration-500 transform ${
        openAboutUs ? "rotate-90" : ""
      }`}
    />
  </div>
  {openAboutUs && (
    <div
      className={`pl-[20px] mt-[20px]`} // Add a CSS class for the fade-in effect
    >
      <ul className="submenu-child">
        <li className="flex items-center justify-between text-[#5c5c5c80] pb-[10px] capitalize">
          <Link>Exford</Link>
        </li>
        <li className="flex items-center justify-between text-[#5c5c5c80] py-[10px] capitalize">
          <Link>Loafers</Link>
        </li>
      </ul>
    </div>
  )}
</div>

       
        </div>
        </div>
    
      </div>
    </>
  );
};


export default React.memo(Sidebar);


// ...
