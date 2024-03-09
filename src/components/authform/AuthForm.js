import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // for validation schema
import "./style.css";
import { useAuth } from "../../context/AuthContext";

const AuthForm = () => {
  const [register, setRegister] = useState(false);


  const { registerUser, loginUser } = useAuth();

  // Define validation schema for email and password
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  // Define validation schema for all fields
  const registerValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    },
    validationSchema: register
      ? registerValidationSchema
      : loginValidationSchema,
    onSubmit: async (values) => {
      if (register) {
        const ok = await registerUser(values);
        ok && setRegister(false);
      } else {
        const { email, password } = values;
        await loginUser({ email, password });
      }
    },
  });

  return (
    <div className="flex w-[400px] justify-center items-center flex-col">
      <form onSubmit={formik.handleSubmit} className="w-[100%]">
        {register && (
          <>
            <div className="w-[100%] mb-[20px] h-[50px] ">
              <input
                type="text"
                placeholder="first name"
                className="h-[100%] w-[100%] px-2 outline-none auth_input"
                name="firstname"
                {...formik.getFieldProps("firstname")}
              />
              {formik.touched.firstname && formik.errors.firstname ? (
                <div className="error">{formik.errors.firstname}</div>
              ) : null}
            </div>
            <div className="w-[100%] mb-[20px] h-[50px] ">
              <input
                type="text"
                placeholder="last name"
                className="h-[100%] w-[100%] px-2 outline-none auth_input"
                name="lastname"
                {...formik.getFieldProps("lastname")}
              />
              {formik.touched.lastname && formik.errors.lastname ? (
                <div className="error">{formik.errors.lastname}</div>
              ) : null}
            </div>
          </>
        )}

        <div className="w-[100%] mb-[20px] h-[50px] ">
          <input
            type="text"
            placeholder="email"
            className="h-[100%] w-[100%] px-2 outline-none auth_input"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="w-[100%] mb-[20px] h-[50px] ">
          <input
            type="text"
            placeholder="password"
            className="h-[100%] w-[100%] px-2 outline-none auth_input"
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit" className="__button uppercase w-[100%]">
          <span>{register ? "create account" : "login"}</span>
          <span>{register ? "create account" : "login"}</span>
        </button>
      </form>
      <p
        className="text-[20px] font-[500] cursor-pointer text-[#363636] mt-6"
        onClick={() => setRegister(!register)}
      >
        {register
          ? "have an account? Login"
          : " Don't have an account? Create one"}
      </p>

    
    </div>
  );
};

export default React.memo(AuthForm);
