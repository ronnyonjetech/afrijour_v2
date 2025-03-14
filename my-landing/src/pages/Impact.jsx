import React from "react";
import Header from "../components/MapSection/Header";
import Footer from "../components/Footer";
import ImpactBody from "../components/ImpactSection/ImpactBody";
const Impact = () => {
  return (
    <>
      {/* <Header/> */}
      <Header
        imageSrc="https://images.stockcake.com/public/8/d/0/8d0d7c77-40c4-4173-9fdf-ee8f86418cb6_large/elegant-water-droplet-stockcake.jpg"
        title="Our Impact"
      ></Header>
      <ImpactBody />
      <Footer />
    </>
  );
};

export default Impact;
