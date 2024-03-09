import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // for validation schema
import "./style.css";

import { useProducts } from "../../context/ProductContext";
// Initialization for ES Users
import {
  Rating,
  initTE,
} from "tw-elements";
import axios from "axios";
const ReviewForm = () => {
  const { singleProduct } = useProducts();
 const [rating, setRating]= useState(1)
 console.log("rating === 15", rating)
  // Define ReviewsSchema schema for all fields
  const ReviewsSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    username: Yup.string().required("Required"),
    title: Yup.string().required("Required"),
    body: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      title: "",
      body: "",
      username: "",
    },
    validationSchema: ReviewsSchema,
    onSubmit: async (values) => {
      console.log("values", values)
      try {
        await axios.post(
          `product/add-product-review/${singleProduct._id}`,
          {...values, rating}
        );
      } catch (error) {
        console.log("error", error);
      }
    },
  });

  useEffect(() => {
    initTE({ Rating });
  }, []);

  return (
    <div className="flex w-[100%] justify-center items-center flex-col mt-[50px] pt-[50px]">
      
      <form onSubmit={formik.handleSubmit} className="w-[100%]">
        <div className="w-[100%] mb-[40px] h-[50px] ">
          <input
            type="text"
            placeholder="enter your name"
            className="h-[100%] w-[100%] px-2 outline-none"
            name="username"
            {...formik.getFieldProps("username")}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="error text-red-600">{formik.errors.username}</div>
          ) : null}
        </div>

        <div className="w-[100%] mb-[40px] h-[50px] ">
          <input
            type="text"
            placeholder="enter your email"
            className="h-[100%] w-[100%] px-2 outline-none"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error text-red-600">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="w-[100%] mb-[40px] h-[50px] ">
          <input
            type="text"
            placeholder="give your review a title"
            className="h-[100%] w-[100%] px-2 outline-none"
            name="title"
            {...formik.getFieldProps("title")}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="error text-red-600">{formik.errors.title}</div>
          ) : null}
        </div>

        <div className="w-[100%] mb-[40px]">
        <ul className="my-1 flex list-none gap-1 p-0" data-te-rating-init>
  <li>
    <span
      className="text-[#5c5c5c] [&>svg]:h-5 [&>svg]:w-5"
      onClick={()=>setRating(1)}
      title="Bad"
      data-te-rating-icon-ref>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    </span>
  </li>
  <li>
    <span
      className="text-[#5c5c5c] [&>svg]:h-5 [&>svg]:w-5"
      onClick={()=>setRating(2)}
      title="Poor"
      data-te-rating-icon-ref>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    </span>
  </li>
  <li>
    <span
      className="text-[#5c5c5c] [&>svg]:h-5 [&>svg]:w-5"
      onClick={()=>setRating(3)}
      title="OK"
      data-te-rating-icon-ref>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    </span>
  </li>
  <li>
    <span
      className="text-[#5c5c5c] [&>svg]:h-5 [&>svg]:w-5"
      onClick={()=>setRating(4)}
      title="Good"
      data-te-rating-icon-ref>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    </span>
  </li>
  <li>
    <span
      className="text-[#5c5c5c] [&>svg]:h-5 [&>svg]:w-5"
      onClick={()=>setRating(5)}
      title="Excellent"
      data-te-rating-icon-ref>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    </span>
  </li>
</ul>
        </div>
        <div className="w-[100%] mb-[40px] h-[300px] ">
          <textarea
            type="text"
            placeholder="Write your comment here"
            className="h-[100%] w-[100%] px-2 outline-none p-[20px] border-2"
            name="body"
            {...formik.getFieldProps("body")}
          />
          {formik.touched.body && formik.errors.body ? (
            <div className="error text-red-600">{formik.errors.body}</div>
          ) : null}
        </div>
        <div className="w-[300px]">
          <button type="submit" className="__button uppercase w-[100%]">
            <span className="uppercase">write a review </span>
            <span className="uppercase">write a review </span>
          </button>
        </div>
      </form>
    </div>
  );
};



export default React.memo(ReviewForm);

