import React from "react";
import Layout from "../../components/layout/Layout";
import Sidebar from "../../components/navbar/Sidebar";
import HomeCategories from "../../components/homecategories/HomeCategories";
import FeatureCollection from "../../components/featurecollection/FeatureCollection";
import FeatureProduct from "../../components/featureProduct/FeatureProduct";
import Video from "../../components/video/Video";
import OutLet from "../../components/outlet/OutLet";
import Header from "../../components/header/Header";

const Home = () => {
  const hrStyle = "w-[100%] h-[1px] bg-[#363636]";
  return (
    <Layout>
      <Header />
      <HomeCategories />
      <FeatureCollection />
      <hr className={hrStyle} />
      <FeatureProduct />
      <hr className={hrStyle} />
      <Video />
      <hr className={hrStyle} />
      <OutLet />
    </Layout>
  );
};


export default React.memo(Home);

