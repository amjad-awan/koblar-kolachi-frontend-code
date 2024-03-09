import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { BiSearch } from "react-icons/bi";
import "./style.css";
import axios from "axios";
import FeatureCard from "../featurecard/FeatureCard";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
const SearchProducts = ({ setOpenSearch, openSearch }) => {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleChange = async (searchTerm) => {
    try {
      if (searchTerm) {
        setLoading(true);
        const { data } = await axios.get(
          `/api/v1/product/search-products/${searchTerm}`
        );
        setSearch(data);
        setLoading(false);
      }
    } catch (error) {
      console.log("error ==== 9", error);
      setLoading(false);
    }
  };
  return (
    <Transition.Root show={openSearch} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpenSearch}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed right-0 flex w-[100%]">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-y-full"
                enterTo="-translate-y-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="-translate-y-0"
                leaveTo="-translate-y-full"
              >
                <Dialog.Panel className="pointer-events-auto w-[100%]">
                  <div className="flex w-[100%] flex-col  overflow-x-hidden bg-white  px-[50px] shadow-xl">
                    <div className="border-b-[1px] flex justify-between items-center  py-[70px]">
                      <div className="w-[80%] flex justify-start items-center">
                        <BiSearch className="text-[28px] text-[#5c5c5c94]" />
                        <input
                          type="text"
                          className="w-[100%] ml-4 pr-6 py-4 border-none outline-none placeholder-text-2xl search-input"
                          placeholder="Search ..."
                          onChange={(e) => handleChange(e.target.value)}
                        />
                      </div>
                      <button
                        type="button"
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                        onClick={() => setOpenSearch(false)}
                      >
                        {/* <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span> */}
                        <RxCross1 className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="overflow-y-auto">
                    <div className="grid grid-cols-1 h-[50vh]  overflow-y-auto gap-10 lg:grid-cols-4 items-center border-[#96959559] py-[50px]">
                      {loading ? (
                        <h2 className="font-[600] text-[22px] pb-11 text-[#5c5c5c94]">
                          Loading ...
                        </h2>
                      ) : search.length === 0 ? (
                        <div className="">
                          <p className="text-[22px] uppercase">
                            No product found
                          </p>
                        </div>
                      ) : (
                        search?.map((data, index) => {
                          return (
                            <Link
                              key={data._id}
                              to={`/collection/${data.productcategory.name}/products/${data._id}`}
                            >
                              {" "}
                              <FeatureCard data={data} />
                            </Link>
                          );
                        })
                      )}
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

export default React.memo(SearchProducts);
