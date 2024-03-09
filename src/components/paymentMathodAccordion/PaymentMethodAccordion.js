import React, { useEffect, useState } from "react";
import { Collapse, initTE } from "tw-elements";
import { useProducts } from "../../context/ProductContext";

function PaymentMethodAccordion() {
  const { setCartStepper,cartStepper } = useProducts();

  useEffect(() => {
    initTE({ Collapse });
  }, []);

  return (
    <div id="accordionExample">
      <div className="rounded-t-lg border border-neutral-200 bg-[#f6f6f6] dark:border-neutral-600 dark:bg-neutral-800">
        <h2 className="mb-0" id="headingOne">
          <button
            className="group relative flex w-full items-center rounded-none border-0 bg-[#f6f6f6] py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white  [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
            type="button"
            data-te-collapse-init
            data-te-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <div className="flex items-center px-5 mr-[20px]">
              <input
          id="COD"
          name="notification-method"
          type="radio"
          onChange={(e) => setCartStepper({ ...cartStepper, paymentMethod: "COD" })}
          defaultChecked={false} // Assuming you want it unchecked by default
          className="h-4 w-4 border-gray-300 text-[#000] focus:ring-[#000]"
              />
            </div>
            <label
              htmlFor="COD"
              className=" text-[18px] cursor-pointer w-[100%]  font-[500] leading-6 text-gray-900"
            >
              Cash on Delivery (COD){" "}
            </label>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="!visible"
          data-te-collapse-item
          data-te-collapse-show
          aria-labelledby="headingOne"
          data-te-parent="#accordionExample"
        >
          <div className="px-5 py-4">
            <p className="text-[18px] font-[500]">
              Since our shoes are handmade so, they are made to order. we take
              50% advance payment at the time of booking order and 50% at the
              time of delivery, this applies to every buying method whether it
              is cash on delivery or buying online, COD option is only available
              in pakistan.
            </p>
          </div>
        </div>
      </div>
      <div className="border border-t-0 border-neutral-200 bg-[#f6f6f6] dark:border-neutral-600 ">
        <h2 className="mb-0 " id="headingTwo">
          <button
            className="group relative flex w-full items-center rounded-none border-0 bg-[#f6f6f6] py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white  [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
            type="button"
            data-te-collapse-init
            data-te-collapse-collapsed
            data-te-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <div className="flex items-center px-5 mr-[20px]">
              <input
                id="BankDeposit"
                name="notification-method"
                type="radio"
                defaultChecked={false}
                onChange={(e) => setCartStepper({ ...cartStepper, paymentMethod: "Bank Deposit" })}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <label
              htmlFor="BankDeposit"
              className="text-[18px] cursor-pointer w-[100%]  font-[500] leading-6 text-gray-900"
            >
              Bank Deposit{" "}
            </label>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="!visible hidden"
          data-te-collapse-item
          aria-labelledby="headingTwo"
          data-te-parent="#accordionExample"
        >
          <div className="px-5 py-4 ">
            <div className="md:w-[60%] mx-auto ">
              <p className="text-[18px] text-[#000]">
                {" "}
                Habib Bank Limited account details
              </p>
              <p className="text-[18px] text-[#000]">
                Acc Title: Wali Muhammad
              </p>
              <p className="text-[18px] text-[#000]"> Branch code: 0012</p>
              <p className="text-[18px] text-[#000]">
                {" "}
                IBAN No: PK87 HABB 0000127900941103
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-[#f6f6f6]  dark:border-neutral-600 dark:bg-neutral-800">
        <h2 className="accordion-header  mb-0" id="headingThree">
          <button
            className="group relative flex w-full items-center rounded-none border-0 bg-[#f6f6f6] py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white  [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
            type="button"
            data-te-collapse-init
            data-te-collapse-collapsed
            data-te-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <div className="flex items-center px-5 mr-[20px]">
              <input
                id="JazzCash"
                name="notification-method"
                type="radio"
                defaultChecked={false}
                onChange={(e) => setCartStepper({ ...cartStepper, paymentMethod: "Jazz Cash" })}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <label
              htmlFor="JazzCash"
              className=" text-[18px] cursor-pointer w-[100%]  font-[500] leading-6 text-gray-900"
            >
              Jazz Cash
            </label>
          </button>
        </h2>
        <div
          id="collapseThree"
          className="!visible hidden"
          data-te-collapse-item
          aria-labelledby="headingThree"
          data-te-parent="#accordionExample"
        >
          <div className="px-5 py-4">
            <div className="md:w-[60%] mx-auto">
              <p className="text-[18px] text-[#000]"> Jazz Cash</p>
              <p className="text-[18px] text-[#000]">
                Acc Title: COBBLER KOLACHI
              </p>
              <p className="text-[18px] text-[#000]">
                Acc Number : 03337766090
              </p>
              <p className="text-[18px] text-[#000]"> Till ID : 0020 2352</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default React.memo(PaymentMethodAccordion);

