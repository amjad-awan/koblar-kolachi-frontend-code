import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import CheckOutSteps from "../../components/checkoutSteps/CheckoutStep";
import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";

const Checkouts = () => {
  const { cart, removeFromCart } = useProducts();

  const totalPrice = cart?.reduce((total, item) => total + item.newprice*item.quantity, 0);

  const steps = [
    // { title: "Cart" },
    { title: "Information " },
    { title: "Shipping" },
    { title: "Payment" },
  ];
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="min-h-screen py-[70px] border-[#5c5c5c27] md:px-[50px] border-[1px] flex flex-col items-center ">
            <Link className="text-[24px]  font-[600] mb-[40px]">
              Cobbler & Kolachi
            </Link>
            <CheckOutSteps steps={steps} />
          </div>
          <div className="min-h-screen px-[50px] py-[50px] bg-[#FAFAFA]">
            <div className="flex flex-col flex-1 pr-[70px] gap-5">
              {cart.length === 0 ? (
                <div className="py-[30px]">
                  <p className="text-[20px] font-[500] text-[#5c5c5c] text-center">
                    Cart is empty{" "}
                  </p>
                </div>
              ) : (
                cart.map((data) => {
                  return (
                    <div className="flex justify-between items-center gap-5">
                      <div className="h-[70px] relative border-[2px] border-[#5c5c5c25] rounded-[10px] w-[70px]">
                       
                        <p className="absolute h-[22px] text-[#fff] rounded-full w-[22px] flex justify-center items-center bg-[rgb(108,108,108)] top-[-10px] right-[-10px]">{data.quantity}</p>

                      
                        <img
                          src={`${process.env.REACT_APP_BASE_URL}product/get-featured-product-photos/${data._id}/photos/0`}
                          className="w-[100%] rounded-[10px] h-[100%] object-cover"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col flex-1">
                        <p className="text-[22px] font-[600]">
                          {data.productname}
                        </p>

                        <p className="text-[16px] text-[#5c5c5c] font-[500] mt-2">
                          PK 5 | UK 5 | US 5
                        </p>
                      </div>
                      <p className="text-[16px] text-[#5c5c5c] ml-auto font-[500] mt-2">
                        Rs.{data.newprice} PKR
                      </p>
                    </div>
                  );
                })
              )}
              <div className="flex justify-between">
                <p className="text-[24px] font-[600]">Total</p>
                <p className="text-[24px] font-[600]">  <span className="text-[16px] font-[400]">PKR</span> RS {totalPrice} </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default React.memo(Checkouts);

