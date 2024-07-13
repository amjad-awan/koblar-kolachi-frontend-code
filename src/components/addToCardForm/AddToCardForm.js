import React, { useEffect, useState } from "react";
import { customStyle } from "../../helper";
import Select from "react-select";
import { LiaMinusSolid } from "react-icons/lia";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { useProducts } from "../../context/ProductContext";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
const AddToCardForm = () => {
  const [size, setSize] = useState("");
  const { singleProduct, addToCart, setCartData, cartData } = useProducts();
  const validationSchema = Yup.object({
    showSize: Yup.object().required("Shoe size is required"),
  });
  const initialValues = {
    showSize: "", // Initial value for showSize
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: ({showSize}) => {
      console.log('24',showSize)
      setCartData({ ...cartData, showSize });
      handleCartCart(singleProduct,showSize);
    },
  });

  //Function to add a product to the cart
  const handleCartCart = (product,showSize) => {
    try {
      addToCart(product,showSize);
      toast.success("Product Added Successfully!");
    } catch (error) {
      toast.error("error while adding product!");
    }
  };
  const options = [
    {
      value: "PK 5 | UK 5 | US 6 | EURO 38",
      label: "PK 5 | UK 5 | US 6 | EURO 38",
    },
    {
      value: "PK 6 | UK 6 | US 7 | EURO 39",
      label: "PK 6 | UK 6 | US 7 | EURO 39",
    },
    {
      value: "PK 6.5 | UK 6.5 | US 7.5 | EURO 39",
      label: "PK 6.5 | UK 6;5 | US 7.5 | EURO 39.5",
    },
    {
      value: "PK 7 | UK 7 | US 8 | EURO 40",
      label: "PK 7 | UK 7 | US 8 | EURO 40",
    },
    {
      value: "PK 7.5 | UK 7.5 | US 8.5 | EURO 40.5",
      label: "PK 7.5 | UK 7.5 | US 8.5 | EURO 40.5",
    },
    {
      value: "PK 8 | UK 8 | US 9 | EURO 41",
      label: "PK 8 | UK 8 | US 9 | EURO 41",
    },
    {
      value: "PK 8.5 | UK 8.5 | US 9.5 | EURO 41.5",
      label: "PK 8.5 | UK 8.5 | US 9.5 | EURO 41.5",
    },
    {
      value: "PK 9 | UK 9 | US 10 | EURO 42",
      label: "PK 9 | UK 9 | US 10 | EURO 42",
    },
  ];
  return (
    <>
      <p className="font-[500] text-[#5c5c5c] text-[24px]">Cobbler & Kolachi</p>

      <h1 className="font-[600] my-[22px] text-[22px] text-[#5c5c5c]">
        Product ID (CnK#000104)
      </h1>
      <h1 className="font-[500] my-[22px] text-[22px] text-[#939393]">
        {" "}
        Rs.28,500 PKR
      </h1>
      <form action="" onSubmit={formik.handleSubmit}>
        <Select
          name="showSize"
          options={options}
          isSearchable={true}
          className="rounded-[0px]"
          styles={customStyle}
          value={formik.values.showSize}
          onChange={(option) => formik.setFieldValue("showSize", option)}
          // value={options.find(option => option.value === formik.values.showSize)} // Ensure correct value is selected
  // onChange={(option) => formik.setFieldValue("showSize", option ? option.value : "")} // Handle option change correctly

        />
        {formik.touched.showSize && formik.errors.showSize ? (
          <div className="text-red-500">{formik.errors.showSize}</div>
        ) : null}
        <div className="w-[150px] h-[50px] mt-[15px] flex justify-between items-center border-2">
          <div
            className="w-[50px] h-[100%] cursor-pointer flex justify-center items-center text-center"
            onClick={() =>
              setCartData((prev) => ({
                ...cartData,
                quantity: prev.quantity === 1 ? 1 : --prev.quantity,
              }))
            }
          >
            <LiaMinusSolid />
          </div>
          <p>{cartData.quantity}</p>
          <div
            className="w-[50px] m-0 cursor-pointer h-[100%] flex justify-center items-center text-center"
            onClick={() =>
              setCartData((prev) => ({
                ...cartData,
                quantity: ++prev.quantity,
              }))
            }
          >
            <HiOutlinePlusSmall />
          </div>
        </div>

        <div className="flex justify-center mt-[25px]">
          <button
            type="submit"
            className="__button w-[100%] mx-auto uppercase"
          >
            <span>add to cart . rs 28500pkr</span>
            <span>add to cart . rs 28500pkr</span>
          </button>
        </div>
        {/* <div className="flex justify-center mt-[15px]">
          <button type="submit" className="__button w-[100%] mx-auto uppercase">
            <span> buy now</span>
            <span> buy now</span>
          </button>
        </div> */}
      </form>
    </>
  );
};

export default React.memo(AddToCardForm);
