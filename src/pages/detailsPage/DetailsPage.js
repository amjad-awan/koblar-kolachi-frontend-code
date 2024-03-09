import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import AddToCardForm from "../../components/addToCardForm/AddToCardForm";
import Layout from "../../components/layout/Layout";
import "./style.css";
import RviewsSection from "../../components/reviewssection/ReviewsSection";
const DetailsPage = () => {
  const { pId } = useParams();
  const { getSingleProduct, singleProduct,loading } = useProducts();
  const photoContainerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const photosRef = useRef([]);

  const handleDotClick = (index) => {
    setActiveDot(index);
    scrollToPhoto(index);
  };
  const scrollToPhoto = (index) => {
    const photos = photoContainerRef.current.querySelectorAll(".photo");

    if (photos[index]) {
      const photoPosition = photos[index].offsetTop;
      window.scrollTo({
        top: photoPosition,
        behavior: "smooth", // Add smooth scrolling effect
      });
    }
  };

  const handleScroll = () => {
    const container = photoContainerRef.current;
    const scrollTop = container.scrollTop;
    const activeIndex = photosRef.current.findIndex(
      (photo) => photo.offsetTop <= scrollTop
    );

    setActiveDot(activeIndex);
  };

  useEffect(() => {
    const container = photoContainerRef.current;
    photosRef.current = Array.from(container.querySelectorAll(".photo"));

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    getSingleProduct(pId);
  }, [pId]);

  return (
    <Layout>
      <div className="container mx-auto mt-[160px]">
        <div className="w-[100%] grid grid-cols-1 md:grid-cols-12 mx-auto gap-[20px]">
          {loading ? (
            <p className="text-[22px] font-[700]">Loading ....</p>
          ) : (
            <>
              <div className="w-[100%] flex flex-col sm:col-span-12 md:col-span-7">
                <div className="dots">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${index === activeDot ? "active" : ""}`}
                      onClick={() => handleDotClick(index)}
                    ></span>
                  ))}
                </div>

                <div className="photo-container" ref={photoContainerRef}>
                  {[1, 2, 3, 4].map((data, index) => {
                    return (
                      <img
                        src={`/api/v1/product/get-featured-product-photos/${pId}/photos/${index}`}
                        className="w-[100%] photo h-[100%] object-cover"
                        alt=""
                      />
                    );
                  })}
                </div>

                <RviewsSection reviews={singleProduct.reviews} />
              </div>
              <div className="sm:col-span-12 md:col-span-5 md:px-[50px]">
                <AddToCardForm />
                <div className="sticky top-[113px]">
                  <p className="mt-[30px] font-[500] text-[19px] text-[#5c5c5c]">
                    {singleProduct.productdescription}
                  </p>

                  <p className="font-[600] text-[22px] text-[#5c5c5c] my-[40px]">
                    Features
                  </p>

                  {singleProduct?.productfeatures?.map((data, index) => {
                    return (
                      <p
                        key={index}
                        className="mt-[10px] block font-[500] text-[19px] text-[#5c5c5c]"
                      >
                        {data}
                      </p>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default React.memo(DetailsPage);

