import React, { useContext } from "react";
import Header from "../components/MapSection/Header";
import Footer from "../components/Footer";
import ImpactBody from "../components/ImpactSection/ImpactBody";
import { LanguageContext } from "../contexts/LanguageContext";
const Impact = () => {
  const { translations } = useContext(LanguageContext);
  return (
    <>
      {/* <Header/> */}
      <Header
        imageSrc="https://images.stockcake.com/public/8/d/0/8d0d7c77-40c4-4173-9fdf-ee8f86418cb6_large/elegant-water-droplet-stockcake.jpg"
        title={translations.impactSection.ourImpact}
      ></Header>
      <ImpactBody />
      <Footer />
    </>
  );
};

export default Impact;
