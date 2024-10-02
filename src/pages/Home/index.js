import React from "react";
import HomeSlider from "./slider/index";
import CatSlider from "../../components/catSlider";
import Banners from "../../components/banners";

const Home = () => {
  return (
    <>
      <HomeSlider />

      <CatSlider />
      <Banners />
    </>
  );
};
export default Home;
