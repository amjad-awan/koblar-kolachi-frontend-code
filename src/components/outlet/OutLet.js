import React from "react";
import fp from "../../assets/images/out-let.JPG";

const OutLet = () => {
  return (
    <div className="container mx-auto py-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-12 mx-auto gap-[40px]">
        <div className="w-[100%] sm:col-span-12 md:col-span-7">
          <img src={fp} className="w-[100%] h-[100%] object-contain" alt="" />
        </div>
        <div className="sm:col-span-12 md:col-span-5">
          <strong className="ftext-[#5c5c5c] text-[22px]">Our outlet</strong>

          <h1 className="font-[800] my-[22px] text-[22px] text-[#5c5c5c]">
            Cobbler & Kolachi
          </h1>
          <h1 className="font-[500] my-[22px] text-[22px] text-[#939393]">
            Plot No.6-C, Zamzama commercial Lan No.2,phose- V situated in
            pakistan defence officers housing authority karachi, 75500
          </h1>

          <div className="mt-[30px]">
            <h1 className="font-[800] text-[26px] mb-[10px] text-[#5c5c5c]">Phone</h1>
            <p>+92 21 38920904 / +92 300 0071355</p>
          </div>
          <div className="mt-[30px]">
            <h1 className="font-[800] text-[26px] mb-[30px] text-[#5c5c5c]">TIMINGS</h1>
            <p className="text-[22px] mb-[15px]">Mon-Thur 1 – 9:30pm</p>
            <p className="text-[22px] mb-[15px]">Friday 3 – 9:30pm</p>

            <p className="text-[22px] mb-[15px]">Saturday 1 – 9:30pm</p>

            <p className="text-[22px] mb-[15px]">Sunday Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(OutLet);

