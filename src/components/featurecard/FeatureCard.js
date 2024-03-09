import React, { useState } from "react";

const FeatureCard = ({ data, scrollCard }) => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div
      className={`h-[320px] max-w-[300px]  relative translate-x-[${scrollCard}px]`}
      onMouseLeave={() => setMouseOver(false)}
      onMouseOver={() => setMouseOver(true)}
    >
      <div className="h-[70%] relative">
        {
          data.sale && <p className="absolute left-2 top-2 bg-[#ff0000] text-[#fff] p-2">
          on sale
        </p>
        }
        
        <img
          src={`/api/v1/product/get-featured-product-photos/${data._id}/photos/0`}
          alt=""
          className="h-[100%] w-[100%] object-cover"
        />
      </div>

      <h2 className={`font-400 text-[#5c5c5] text-[18px] py-[15px]`}>
        {data.productname}
      </h2>

      <div
        className={`transition flex justify-start gap-6 duration-1000 ease-in-out py-[15px] ${
          mouseOver ? "translate-y-[-40px] opacity-[1]" : "opacity-0"
        }`}
      >
        <h2
          className={`font-400 text-[#ff0000] text-[#5c5c5] text-[18px] py-[15px]`}>
          RS. {data.newprice}PKR
        </h2>
        <h2
          className={`font-400 text-[#5c5c5] stroke-[#5c5c5] text-[18px] py-[15px] line-through `}
        >
          RS. {data.oldprice}PKR
        </h2>
      </div>
    </div>
  );
};

export default React.memo(FeatureCard);

