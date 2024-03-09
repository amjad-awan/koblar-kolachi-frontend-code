// src/components/RviewsSection.js

import React, { useEffect, useState } from "react";
import { Collapse, initTE } from "tw-elements";
// ...
import "./style.css";
import { BsFillStarFill } from "react-icons/bs";
import ReviewForm from "../reviewform/ReviewForm";
import moment from "moment"
const RviewsSection = ({ reviews }) => {

const [showReviewForm,setShowReviewForm]= useState(false)

  useEffect(() => {
    initTE({ Collapse });
  }, []);

  return (
    <>
      <div id="accordionExample">
        <div className="rounded-t-lg border-b border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 py-[50px]">
          <h2 className="mb-0 text-[#5c5c5c]" id="headingOne">
            <button
              className="group relative flex w-full items-center rounded-t-[15px]bg-white py-4 text-left text-bas transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary  dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
              type="button"
              data-te-collapse-init
              data-te-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              
            >
              Reviews ({reviews?.length})
              <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="!visible"
            data-te-collapse-item
            data-te-collapse-show
            aria-labelledby="headingOne"
            data-te-parent="#accordionExample"
          >
            <div className="pt-[50px]">
              {reviews?.map((review) => {
                return (
                  <div className="py-[50px] border-b-2 border-[rgba(128, 128, 128, 0.336)]">
                    <div className="flex justify-start gap-2">
                      {[1, 2, 3, 4, 5].map((el) => {
                        return el <= review?.rating ? (
                          <BsFillStarFill
                            fill="#5c5c5c"
                            key={el}
                            className=" text-[13px]"
                          />
                        ) : (
                          <BsFillStarFill
                            fill="#36363688"
                            opacity={0.5}
                            key={el}
                            className=" text-[13px]"
                          />
                        );
                      })}
                    </div>

                    <h1 className="uppercase mt-[15px] text-[#5c5c5c]">
                      {review.title}
                    </h1>
                    <p className="lowercase mt-[15px] text-[#5c5c5c] text-[22px]">
                      {review.body}
                    </p>

                    <p className="lowercase mt-[15px] text-[#5c5c5ccb] text-[22px]">
                      {review.username}
                    </p>

                    <p className="lowercase text-[#5c5c5ccb] mt-[20px] text-[18px]">
                      {}
                      {moment(review.timestamp).format('LL')}
                    </p>
                    

                  </div>
                );
              })}

              {
                showReviewForm&& <ReviewForm/>
              }

             {showReviewForm?"":<div className="w-[300px] mt-[50px]">
                <button className="__button w-[100%]" onClick={()=>setShowReviewForm(true)}>
                  <span className="uppercase">write a review </span>
                  <span className="uppercase">write a review </span>
                </button>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default React.memo(RviewsSection);

// ...
