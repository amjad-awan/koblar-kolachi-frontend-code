import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { countries, customStyle } from "../../helper";
import PaymentMethodAccordion from "../paymentMathodAccordion/PaymentMethodAccordion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useProducts } from "../../context/ProductContext";
import { useOrders } from "../../context/OrdersContext";
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  country: Yup.object().required("country/Region is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  address: Yup.string().required("Address Name is required"),
  city: Yup.string().required("City is required"),
  postalCode: Yup.string().required("Postal code is required"),
  phone: Yup.string().required("Phone No. is required"),
});
const CheckOutSteps = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const { setCartStepper,cartStepper, cart, cartData } = useProducts();
  const {createOrders}=useOrders()
  const [completedSteps, setCompletedSteps] = useState([]);
  const formik = useFormik({
    initialValues: {
      email: "",
      country: "",
      firstName: "",
      lastName: "",
      address: "",
      appartments: "",
      city: "",
      postalCode: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      try {
         // Handle form submission here
      setCartStepper({...values,...cartStepper});
      markStepAsCompleted(activeStep);
      handleNext();
      console.log(" 46",activeStep === steps.length - 1)

      if(activeStep === steps.length - 1){
        createOrders({...values,...cartData,products:cart})
      }
        
      } catch (error) {
        console.log("error in order placing")
      }
     
    },
  });
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
      setCompletedSteps(completedSteps.slice(0, -1)); // Remove the last completed step
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const markStepAsCompleted = (stepIndex) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
  };

  return (
    <div className="bg-white  w-[100%] p-4 rounded-lg">
      {/* <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">{steps[activeStep].title}</h1>
        </div> */}

      <div className="flex justify-between w-[80%] mx-auto items-center mb-[50px]">
      
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center cursor-pointer ${
              completedSteps.includes(index) || activeStep === index
                ? "text-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
            //   onClick={() => setActiveStep(index)}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center border-2 border-gray-300 mr-2 ${
                completedSteps.includes(index) || activeStep === index
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
            >
              {completedSteps.includes(index) || activeStep === index ? (
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              ) : (
                index + 1
              )}
            </div>
            <span>{step.title}</span>
          </div>
        ))}
      </div>

      {/* Form fields as content */}
      {activeStep === 0 &&  <form>
        <div className="mb-6 flex flex-col">
          <div className="flex justify-between mb-8">
            <label htmlFor="email" className="text-22 font-600">
              Contact
            </label>
            <p>
              Have an account{" "}
              <Link to="/acount/auth" className="underline mr-20">
                Login
              </Link>
            </p>
          </div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={` ${formik.errors.email ? "border-[3px] border-red-500" : "border-[2px] border-gray-300"} w-[100%] rounded-md px-2 py-3`}
            />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-6">
          <div className="flex justify-between mb-8">
            <label htmlFor="field1" className="text-22 font-600">
              Shipping address
            </label>
          </div>
          <Select
            name="country"
            options={countries}
            isSearchable={true}
            placeholder="Select Country/Region"
            className="rounded-0"
            styles={customStyle}
            value={formik.values.country}
            onChange={(option) => formik.setFieldValue("country", option)}
          />
          {formik.touched.country && formik.errors.country ? (
            <div className="text-red-500">{formik.errors.country}</div>
          ) : null}
        </div>

        <div className="mb-6 flex-col flex md:flex-row gap-10">
          <div className="flex-1">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={` ${formik.errors.firstName ? "border-[3px] border-red-500" : "border-[2px] border-gray-300"} w-[100%] rounded-md px-2 py-3`}
              />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="flex-1">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={` ${formik.errors.lastName ? "border-[3px] border-red-500" : "border-[2px] border-gray-300"} w-[100%] rounded-md px-2 py-3`}
              />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500">{formik.errors.lastName}</div>
            ) : null}
          </div>
        </div>

        <div className="mb-6 flex flex-col">
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={` ${formik.errors.address ? "border-[3px] border-red-500" : "border-[2px] border-gray-300"} w-[100%] rounded-md px-2 py-3`}
            />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-500">{formik.errors.address}</div>
          ) : null}
        </div>

        <div className="mb-6 flex gap-10">
          <input
            type="text"
            name="appartments"
            placeholder="Apartments, Suite, etc. (optional)"
            value={formik.values.appartments}
            onChange={formik.handleChange}
            className="border border-gray-300 flex-1 rounded-md px-2 py-3"
          />
        </div>

        <div className="mb-6 flex-col flex md:flex-row gap-10">
          <div className="flex-1">
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={` ${formik.errors.city ? "border-[3px] border-red-500" : "border-[2px] border-gray-300"} w-[100%] rounded-md px-2 py-3`}
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="text-red-500">{formik.errors.city}</div>
            ) : null}
          </div>
          <div className="all-inherit flex-1">
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              placeholder="Postal Code"
              value={formik.values.postalCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={` ${formik.errors.postalCode?"border-[3px] border-red-500" : "border-[2px] border-gray-300"} w-[100%] rounded-md px-2 py-3`}
              />
            {formik.touched.postalCode && formik.errors.postalCode ? (
              <div className="text-red-500">{formik.errors.postalCode}</div>
            ) : null}
          </div>
        </div>

        <div className="mb-6 flex flex-col">
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={` ${formik.errors.phone ? "border-[3px] border-red-500" : "border-[2px] border-gray-300"} flex-1 rounded-md px-2 py-3`}
            />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500">{formik.errors.phone}</div>
          ) : null}
        </div>
      </form>}

    

      {activeStep === 1 && (
        <>
          <div className="border-[2px] border-[#5c5c5c52] rounded-md px-[20px]">
            <div className="py-[15px] flex justify-between items-center border-b-[2px] border-[#5c5c5c52]">
              <p className="text-[20px] text-[#5c5c5c]">contact</p>
              <p className="text-[18px] text-[#000000] font-[500]">
                amjadmalikf53@gmail.com
              </p>
              <p
                className="underline cursor-pointer"
                onClick={() => setActiveStep(0)}
              >
                change
              </p>
            </div>
            <div className="py-[15px] flex justify-between items-center">
              <p className="text-[20px] text-[#5c5c5c]">Ship to</p>
              <p className="text-[18px] text-[#000000] font-[500]">
                lahore, Lahore 35004, Pakistan
              </p>
              <p
                className="underline cursor-pointer"
                onClick={() => setActiveStep(0)}
              >
                change
              </p>
            </div>
          </div>

          <div className="mt-[50px]">
            <div className="flex justify-between mb-[8px]">
              <label htmlFor="field1" className="text-[22px] font-[600]">
                Shipping method
              </label>
            </div>
            <div className="py-[15px] flex justify-between items-center border-[2px] bg-[#F6F6F6] border-[#000] rounded-md px-[20px]">
              <p className="text-[20px] text-[#000]">Standard</p>
              <p className="text-[20px] text-[#000000] font-[700]">Free </p>
            </div>
          </div>
        </>
      )}

      {activeStep === 2 && (
        <>
          <div className="border-[2px] border-[#5c5c5c52] rounded-md px-[20px]">
            <div className="py-[15px] flex justify-between items-center border-b-[2px] border-[#5c5c5c52]">
              <p className="text-[20px] text-[#5c5c5c]">contact</p>
              <p className="text-[18px] text-[#000000] font-[500]">
                amjadmalikf53@gmail.com
              </p>
              <p
                className="underline cursor-pointer"
                onClick={() => setActiveStep(0)}
              >
                change
              </p>
            </div>
            <div className="py-[15px] flex justify-between items-center border-b-[2px] border-[#5c5c5c52]">
              <p className="text-[20px] text-[#5c5c5c]">Ship to</p>
              <p className="text-[18px] text-[#000000] font-[500]">
                lahore, Lahore 35004, Pakistan
              </p>
              <p
                className="underline cursor-pointer"
                onClick={() => setActiveStep(0)}
              >
                change
              </p>
            </div>
            <div className="py-[15px] flex justify-between lg:w-[50%] items-center">
              <p className="text-[20px] text-[#5c5c5c]">Method</p>
              <p className="text-[18px] text-[#000000] font-[500]">
                Standard .{" "}
                <span className="text-[22px] text-[#000000] font-[700]">
                  Free{" "}
                </span>{" "}
              </p>
            </div>
          </div>

          <div className="mt-[40px]">
            <div className="flex flex-col justify-between mb-[8px]">
              <label htmlFor="field1" className="text-[22px] font-[600]">
                Payment
              </label>
              <p>All transactions are secure and encrypted.</p>
            </div>
            <PaymentMethodAccordion />
          </div>
        </>
      )}

      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          disabled={activeStep === 0}
          className={`px-4 py-2 rounded-lg ${
            activeStep === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Back
        </button>
        <button
          type="submit"
          onClick={() => {
            formik.handleSubmit();
            // Add any additional logic you want to perform when the button is clicked here
          }}
          className={`px-4 py-2 rounded-lg ${
            activeStep === steps.length - 1
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-[#5c5c5c] hover:bg-[#454545] text-white"
          }`}
          // disabled={activeStep === steps.length - 1}
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default React.memo(CheckOutSteps);

