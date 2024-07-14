import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import CelebirityCard from "../../components/celebrityCard/CelebirityCard";
import axios from "axios";
import Loader from "../../components/loader/Loader";

const Celibirties = () => {
  const [CelebiritiesCard, setCelebiritiesCard] = useState([]);
  const [isLoading, setIsLoading]= useState(true)
  useEffect(() => {
    const getCelebirities = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URI}celibiriest/get-celibirties`);

        setCelebiritiesCard(data?.Celibirties);
      } catch (error) {
        console.log("error", error);
      }finally{
        setIsLoading(false)
      }
    };

    getCelebirities();
  }, []);

  return (
    <Layout>
      <div className="container flex justify-center items-center flex-col mx-auto mt-[113px] py-[40px] ">
        {isLoading?<Loader/>:CelebiritiesCard?.map((data, index) => {
          return <CelebirityCard data={data} key={index} />;
        })}
      </div>
    </Layout>
  );
};

export default React.memo(Celibirties);

