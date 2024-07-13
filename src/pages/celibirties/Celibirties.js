import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import CelebirityCard from "../../components/celebrityCard/CelebirityCard";
import axios from "axios";

const Celibirties = () => {
  const [CelebiritiesCard, setCelebiritiesCard] = useState([]);
  useEffect(() => {
    const getCelebirities = async () => {
      try {
        const { data } = await axios.get("/api/v1/celibiriest/get-celibirties");

        setCelebiritiesCard(data?.Celibirties);
      } catch (error) {
        console.log("error", error);
      }
    };

    getCelebirities();
  }, []);

  return (
    <Layout>
      <div className="container flex justify-center items-center flex-col mx-auto mt-[113px] py-[40px] ">
        {CelebiritiesCard?.map((data, index) => {
          return <CelebirityCard data={data} key={index} />;
        })}
      </div>
    </Layout>
  );
};

export default React.memo(Celibirties);

