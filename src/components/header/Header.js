import React, { useCallback, useEffect, useState } from "react";

import pic1 from "../../assets/images/hero-image-1.jpg";
import pic2 from "../../assets/images/hero-image-2.jpg";
import pic3 from "../../assets/images/hero-image-3.jpg";
import "./style.css";
import NavBar from "../navbar/NavBar";
import { Link, useNavigate } from "react-router-dom";
const carouselData = [
  {
    id: 1,
    imageUrl: pic1,
    heading: "Hand made shoes",
    paragraph:
      "Comfort and style combined into a pair of handmade leather shoes",
  },
  {
    id: 2,
    imageUrl: pic2,
    heading: "The Hand made shoes",
    paragraph: "Handcrafted Premium Shoes",
  },
  {
    id: 3,
    imageUrl: pic3,
    heading: "The Hand made leather shoes",
    paragraph: "Cobbler & Kolachi bringing the designing wonders into Reality",
  },
  // Add more slides
];

function Header() {
  const [activeIndex, setActiveIndex] = useState(1);
const navigate=useNavigate()
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervel = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
      );
    }, 6000);
    return () => clearInterval(intervel);
  }, [handleNext, handlePrev]);

  return (
    <div className="carousel">
      {carouselData.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide ${index === activeIndex ? "active" : ""}`}
        >
          <div className="slide-content">
            <h2 className="text-[#fff]">{slide.heading}</h2>
            <p className="text-[#fff] text-[18px] font-300">
              {slide.paragraph}
            </p>

            <button onClick={()=>navigate("/collections/all")} className="bg-[#030035] text-[#fff] font-[400] cursor-pointer px-10 py-4 mt-10">
              {" "}
            SHOP NOW 
            </button>
          </div>
          <div
            className="slide-background"
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              opacity: index === activeIndex ? 1 : 0,
            }}
          ></div>
        </div>
      ))}
      <button className="prev-button" onClick={handlePrev}>
        Prev
      </button>
      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}



export default React.memo(Header);

