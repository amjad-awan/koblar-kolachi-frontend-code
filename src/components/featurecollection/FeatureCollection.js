import React, { useState } from "react";
import FeatureCard from "../featurecard/FeatureCard";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

// import required modules
import { Mousewheel, Navigation } from "swiper/modules";
import { useProducts } from "../../context/ProductContext";
import { Link } from "react-router-dom";



const FeatureCollection = () => {
  const [scrollCard, setScrollCard] = useState(0);

  const { featuresProducts } = useProducts();

  return (
    <div className="container mx-auto pb-[100px]">
      <div className="flex flex-col justify-center items-center pb-[70px]">
        <p>Featured collection</p>
        <h2 className="font-[500] mt-[15px] text-[24px] text-[#5c5c5c]">
          Handmade leather shoes
        </h2>
      </div>
      <Swiper
        mousewheel={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Mousewheel, Navigation]}
        className="mySwiper"
      >
        {featuresProducts?.map((data, index) => {
          return (
            <SwiperSlide key={data._id}>
              <Link
                to={`/collection/${data.productcategory.name}/products/${data._id}`}
              >
                <FeatureCard
                  data={data}
                  index={index}
                  scrollCard={scrollCard}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-center mt-[70px]">
        <button className="__button w-[300px] mx-auto ">
          <Link to={`/collections/all`}>
          <span>view products</span>
          <span> view products</span>
          </Link>
        
        </button>
      </div>
    </div>
  );
};

export default React.memo(FeatureCollection);

