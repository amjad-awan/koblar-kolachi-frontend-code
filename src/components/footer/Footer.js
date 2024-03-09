import React, { useEffect, useState } from "react";

import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";
import { AiOutlineGoogle, AiOutlineInstagram } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { BsHeadphones } from "react-icons/bs";
import { RxCaretRight } from "react-icons/rx";

// import footerLogo from "../../assets/images/footer-logotype-min-1.png";
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-[#fff] pt-[100px] w-[100%] relative ">
      {isVisible && (
        <button
          className="bg-[#d01818] w-[50px] h-[50px] fixed right-2 bottom-2 uppercase text-[22px] mt-[30px] text-[#fff]"
          onClick={scrollToTop}
        >
          {/* You can add a top-scrolling icon or any other content here */}
          <span>&uarr;</span>
        </button>
      )}

      <div className="container mx-auto px-[20px]">
      

        <div className="grid sm:grid-cols-1 lg:grid-cols-12 gap-8 mt-[80px]">
          <div className="w-[100%] lg:col-span-4 ">
            <h2 className="text-[15px] font-[700] text-[#5c5c5c] mb-[30px]">
              QUESTIONS?
            </h2>
            <p className="text-[#5c5c5c] font-[500]">
              We're here to help! Visit our Contact us page to submit a question
              or email us at <strong>cobblerandkolachi@gmail.com</strong> and we'll get back to
              you as soon as possible.{" "}
            </p>
            <div className="flex justify-between mt-[40px] items-center gap-20">
          {/* <Image
            src={footerLogo}
            width={150}
            height={150}
            style={{ objectFit: "contain" }}
          /> */}
          <div className="flex gap-3">
            <a
              href="#"
              className="h-[35px] w-[35px] rounded-full text-[#a9aeb3] hover:text-[#fff] bg-[#253241] hover:bg-[#d01818] flex justify-center items-center"
            >
              <BiLogoFacebook />
            </a>
            <a
              href="#"
              className="h-[35px] w-[35px] rounded-full text-[#a9aeb3] hover:text-[#fff] bg-[#253241] hover:bg-[#d01818] flex justify-center items-center"
            >
              <BiLogoTwitter />
            </a>
            <a
              href="#"
              className="h-[35px] w-[35px] rounded-full text-[#a9aeb3] hover:text-[#fff] bg-[#253241] hover:bg-[#d01818] flex justify-center items-center"
            >
              <BiLogoLinkedin />
            </a>
            <a
              href="#"
              className="h-[35px] w-[35px] rounded-full text-[#a9aeb3] hover:text-[#fff] bg-[#253241] hover:bg-[#d01818] flex justify-center items-center"
            >
              <TfiYoutube />
            </a>
            <a
              href="#"
              className="h-[35px] w-[35px] rounded-full text-[#a9aeb3] hover:text-[#fff] bg-[#253241] hover:bg-[#d01818] flex justify-center items-center"
            >
              <AiOutlineGoogle />
            </a>
            <a
              href="#"
              className="h-[35px] w-[35px] rounded-full text-[#a9aeb3] hover:text-[#fff] bg-[#253241] hover:bg-[#d01818] flex justify-center items-center"
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
          </div>
          <div className="w-[100%] lg:col-span-2">
          <h2 className="text-[15px] font-[700] text-[#5c5c5c] mb-[30px]">
            Information
            </h2>
            <div className="w-[100%] flex flex-col gap-3">
                <a
                  href="#"
                  className=" text-[#5c5c5c] capitalize mb-2 text-[17px] font-[400] hover:text-[#a9aeb3]"
                >
                 Search
                </a>
                <a
                  href="#"
                  className=" text-[#5c5c5c] capitalize mb-2 text-[17px] font-[400] hover:text-[#a9aeb3]"
                >
                 Contact Us
                </a>
                <a
                  href="#"
                  className=" text-[#5c5c5c] capitalize mb-2 text-[17px] font-[400] hover:text-[#a9aeb3]"
                >
                 FAQs
                </a>
                <a
                  href="#"
                  className=" text-[#5c5c5c] capitalize mb-2 text-[17px] font-[400] hover:text-[#a9aeb3]"
                >
                 Terms Of Service
                </a>
                <a
                  href="#"
                  className=" text-[#5c5c5c] capitalize mb-2 text-[17px] font-[400] hover:text-[#a9aeb3]"
                >
                 Refund policy
                </a>
              
           
           
            </div>
          </div>
          <div className="w-[100%] lg:col-span-2">
          <h2 className="text-[15px] font-[700] text-[#5c5c5c] mb-[30px]">
          Our Policy

            </h2>
            <div className="w-[100%] flex flex-col gap-3">
                <a
                  href="#"
                  className=" text-[#5c5c5c] capitalize mb-2 text-[17px] font-[400] hover:text-[#a9aeb3]"
                >
                 Privacy Policy
                </a>
                <a
                  href="#"
                  className=" text-[#5c5c5c] capitalize mb-2 text-[17px] font-[400] hover:text-[#a9aeb3]"
                >
                 Refund Policy
                </a>
                <a
                  href="#"
                  className=" text-[#5c5c5c] capitalize mb-2 text-[17px] font-[400] hover:text-[#a9aeb3]"
                >
                 Shipping Policy
                </a>
                <a
                  href="#"
                  className=" text-[#5c5c5c] capitalize mb-2 text-[17px] font-[400] hover:text-[#a9aeb3]"
                >
                 Terms Of Service
                </a>
             
              
           
           
            </div>
          </div>
          <div className="w-[100%] lg:col-span-4">
            <h3 className="text-[22px] font-[700] text-[#fff] mb-[30px]">
            Newsletter
            </h3>
            <p className="text-[#a9aeb3]">
            Subscribe to receive updates, access to exclusive deals, and more.


            </p>

            <form action="" className="mt-[20px]">
              <input
                type="text"
                className="py-[15px] px-5 bg-[#fff] w-[100%] border-2 border-[#e7e7e7]"
                placeholder="Enter your email address*"
              />
            </form>
            <button className="bg-[#5c5c5c] uppercase text-[18px] mt-[30px] px-[20px] py-[15px] text-[#fff]">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className=" container mx-auto w-[100%] flex justify-between items-center mt-[100px] border-t-[1px] border-t-[#a9aeb31a] py-[50px] ">
        <p className="text-[#a9aeb3] text-center  capitalize mb-2 text-[18px] font-[400] hover:text-[#a9aeb3]">
          @Cobbler & Colachi <br></br> (Pvt. Ltd.)
        </p>
      </div>
    </div>
  );
};

export default React.memo(Footer);


