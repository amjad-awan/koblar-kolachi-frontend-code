import React from "react";

const CelebirityCard = ({ data }) => {

  return (
    <div className="max-w-[700px] flex w-[100%] flex-col justify-start items-start mb-[100px] ">
      <h1 className="text-[22px] capitalize font-[600] mb-[30px] text-[#5c5c5c]">
        {data.name}
      </h1>
{[1, 2].map((_, index) => {
        return (
          <div className="h-[100%] w-[100%] text-center mb-[40px] ">
            <img
              src={`/api/v1/celibiriest/get-celibirty-photos/${data._id}/photos/${index}`}
              alt=""
              key={index}
              className="h-[100%] w-[100%] mx-auto object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(CelebirityCard);

