import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // for validation schema
import "./style.css";
import { useAuth } from "../../context/AuthContext";

const AuthForm = () => {
  const [register, setRegister] = useState(false);

  const { registerUser } = useAuth();

  // Define validation schema for email and password
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  // Define validation schema for all fields
  const registerValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: register ? registerValidationSchema : loginValidationSchema,
    onSubmit: (values) => {
      if (register) {
        // Handle registration logic
        registerUser(values);
      } else {
        // Handle login logic
      }
    },
  });

  return (
    <div className="flex w-[400px] justify-center items-center flex-col">
      {/* ... your JSX ... */}
      <form onSubmit={formik.handleSubmit} className="w-[100%]">
        {register && (
          <>
            <div className="w-[100%] mb-[20px] h-[50px] ">
              <input
                type="text"
                placeholder="first name"
                className="h-[100%] w-[100%] px-2 outline-none"
                name="firstName"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="error">{formik.errors.firstName}</div>
              ) : null}
            </div>
            {/* ... */}
          </>
        )}
        {/* ... other input fields ... */}
        <button type="submit" className="__button uppercase w-[100%]">
          <span>{register ? "create account" : "login"}</span>
        </button>
      </form>
      {/* ... */}
    </div>
  );
};

export default AuthForm;
