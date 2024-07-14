import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross1 } from "react-icons/rx";
import { useProducts } from "../../context/ProductContext";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const SideOverLay = ({ open, setOpen }) => {
  const { cart, removeFromCart } = useProducts();
  console.log("cart", cart)


  const handleRemove = (producToRemove) => {
    try {
      removeFromCart(producToRemove);
      toast.success("Product Removed Successfully!");
    } catch (error) {
      toast.error("Error While Removing Successfully!");
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll overflow-x-hidden bg-white pb-6 shadow-xl">
                    <div className="px-4 sm:px-6 py-6 border-b-[1px] border-[#5c5c5c3b]">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          Cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                            onClick={() => setOpen(false)}
                          >
                            {/* <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span> */}
                            <RxCross1 className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex flex-col flex-1 px-4 sm:px-6 overflow-y-auto overflow-x-hidden ">
                      <div className="flex flex-col flex-1  gap-5">
                        {cart.length === 0 ? (
                          <div className="py-[30px]">
                            <p className="text-[20px] font-[500] text-[#5c5c5c] text-center">
                              Cart is empty{" "}
                            </p>
                          </div>
                        ) : (
                          cart.map((data) => {
                            return (
                              <div className="flex gap-5">
                                <div className="h-[140px] w-[140px]">
                                  <img
                                    src={`${process.env.REACT_APP_BASE_URI}product/get-featured-product-photos/${data._id}/photos/0`}
                                    className="w-[100%] h-[100%] object-cover"
                                    alt=""
                                  />
                                </div>
                                <div className="flex flex-col flex-1">
                                  <p className="text-[17px] font-[500]">
                                    {data.productname}
                                  </p>
                                  <p className="text-[15px] text-[#5c5c5c] font-[500] mt-2">
                                  {data.showSize.value}
                                  </p>
                                  <p className="text-[15px] text-[#5c5c5c] font-[500] mt-2">
                                    Rs.{data.newprice} PKR
                                  </p>
                                  <button
                                    className="text-[16px] text-[#5c5c5c] font-[500] underline mt-9 ml-auto"
                                    onClick={() => handleRemove(data)}
                                  >
                                    remove
                                  </button>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                      <div className="py-[30px]">
                        <div className="w-[150%] mb-[20px] relative left-[-50px] bg-[#5c5c5c5b] h-[1px]"></div>
                        <p className="text-[#5c5c5c] text-[20px] font-[500]">Shipping & taxes calculated at checkout</p>

                        <div className="w-[100%] mt-[20px]">
                          <button to="/checkouts" className="__button w-[100%]">
                          <Link to="/checkouts" >
                            <span className="uppercase">check out</span>
                            <span className="uppercase">check out</span>{" "}
                          </Link>
                          </button>

                        
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};


export default React.memo(SideOverLay);

