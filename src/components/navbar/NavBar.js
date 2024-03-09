import React, { useEffect, useState } from "react";
import "./style.css";
import { RxCaretRight } from "react-icons/rx";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { LiaShoppingBagSolid } from "react-icons/lia";

import { Link, useLocation } from "react-router-dom";
import { useCategories } from "../../context/CategoriesContext";
import { useProducts } from "../../context/ProductContext";

const NavBar = ({
  openSideBar,
  setOpenSideBar,
  setOpenSearch,
  openSearch,
  open,
  setOpen,
}) => {
  const { categories } = useCategories();
  const { pathname } = useLocation();
  const { cart } = useProducts();
  const [scrollBg, setScrollBg] = useState(false);

  const showSideBar = () => {
    setOpenSideBar(true);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 100) {
      setScrollBg(true);
    } else {
      setScrollBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`w-[100%] navbar-wrapper border-b-2 border-[${
          pathname !== "/" && "rgba(255, 255, 255, 0.25)"
        }]  fixed z-50 transition duration-500 ease-in-out  ${
          pathname !== "/" || scrollBg ? "bg-[#fff] z-50" : "bg-transparent"
        }  py-[20px]`}
      >
        <div className=" absolute z-50 right-[20px] md:right-[40px] top-[20px] md:top-[30px] flex justify-between gap-[20px] items-center">
          <div
            className={`text-[${
              pathname !== "/" || scrollBg ? "#5c5c5c" : "#fff"
            }] text-[30px] font-[500] border-1  border-[#fff] cursor-pointer`}
          >
            <Link to="/acount">
              <AiOutlineUser />
            </Link>
          </div>
          <div
            className={`text-[${
              pathname !== "/" || scrollBg ? "#5c5c5c" : "#fff"
            }] text-[30px] font-[500] cursor-pointer`}
            onClick={() => setOpenSearch((prev) => !prev)}
          >
            <FiSearch />
          </div>
          <div
            className={`relative text-[${
              pathname !== "/" || scrollBg ? "#5c5c5c" : "#fff"
            }] text-[30px] font-[500] cursor-pointer`}
          >
            {cart.length > 0 && (
              <div
                className={`w-[10px] h-[10px] border-[3px] border-[#ffff] bg-[${
                  pathname !== "/" || scrollBg ? "#5c5c5c" : "#fff"
                }] rounded-full absolute top-[0px] right-0`}
              ></div>
            )}
            <LiaShoppingBagSolid onClick={() => setOpen(true)} />
          </div>
        </div>
        <div className="container relative mx-auto flex justify-center items-center flex-col gap-[20px]">
          <button
            onClick={showSideBar}
            className={`absolute text-[${
              pathname !== "/" || scrollBg ? "#5c5c5c" : "#fff"
            }]  md:hidden flex justify-start items-center left-[20px] `}
          >
            <HiMiniBars3CenterLeft />
          </button>
          <h1
            className={`text-[${
              pathname !== "/" || scrollBg ? "#5c5c5c" : "#fff"
            }] font-400 text-[19px] mr-[50px] md:mr-0 capital link-styleize`}
          >
            Cobblar & Kolachi
          </h1>
          <ul className="hidden md:flex text-[#fff] bg-transparent justify-center items-center gap-[50px]">
            <li
              className={`text-[${
                pathname !== "/" || scrollBg ? "#5c5c5c" : "#fff"
              }] link-style`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`submenu-item capitalize text-[${
                pathname !== "/" || scrollBg ? "#5c5c5c" : "#fff"
              }] link-style`}
            >
              <Link to="/collections/all"> Shop by Category</Link>

              <ul className="submenu-list px-[10px] ">
                <li className="submenu-child-item uppercase flex items-center justify-between">
                  {" "}
                  <Link>Men's shoes </Link> <RxCaretRight />
                  <ul className="submenu-child">
                    {categories &&
                      categories?.map((category) => {
                        return (
                          <li
                            key={category?._id}
                            className="flex items-center justify-between py-[10px] capitalize"
                          >
                            <Link
                              target="_blank"
                              to={`/collections/${category?._id}`}
                            >
                              {category.name}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </li>
              </ul>
            </li>
            <li
              className={`text-[${
                pathname !== "/" || scrollBg ? "#5c5c5c" : "#fff"
              }] link-style`}
            >
              <Link to="/pages/celebrity-style-file">Celebirty Style File</Link>
            </li>
            <li
              className={`text-[${
                pathname !== "/" || scrollBg ? "#5c5c5c" : "#fff"
              }] link-style`}
            >
              <Link to="/collections/all">All Products</Link>
            </li>

            <li
              className={`submenu-item capitalize text-[${
                pathname !== "/" || scrollBg ? "#5c5c5c" : "#fff"
              }] link-style`}
            >
              About Us
              <ul className=" submenu-list flex flex-col gap-2">
                <li className="uppercase w-[400px] flex items-center justify-between">
                  {" "}
                  <Link>About </Link>
                </li>
                <li className="uppercase w-[400px] flex items-center justify-between">
                  {" "}
                  <Link>Our Story </Link>
                </li>
                <li className="uppercase w-[400px] flex items-center justify-between">
                  {" "}
                  <Link>Vision and Mission</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};


export default React.memo(NavBar);

