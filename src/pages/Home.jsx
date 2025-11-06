// ✅ All imports must be at the top
import React from "react";

// Global styles
import "../App.css";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/styles.css";
import "../css/animate.css";
import "../icon/icomoon/style.css";

// Components
import Slider from "../components/Slider";
import CollectionSlider from "../components/CollectionSlider";
import ShopByCategories from "../components/ShopByCategories";
import Cloth from "../components/Cloth";
import InstagramSection from "../components/InstagramSection";
import ArtificialJewellery from "../components/ArtificialJewellery";
import Testimonial from "../components/Testimonial";
import Policies from "../components/Policies";
import Injila from "../components/Injila";
import SaleBanner from "../components/SaleBanner";
import BannerV05 from "../components/BannerV05";
import TrendingSection from "../components/TrendingSection";

function Home() {
  return (
    <>
      <Slider />
      <CollectionSlider />
      
<TrendingSection />
      <ShopByCategories />
      <Injila />
      
      <SaleBanner />
      <BannerV05
  backgroundImage="/images/Gold-jwellery/bannerV05.jpg"
  circularText="Injila Store Fashion Style"
  title="Injila. Store"
  subtitle="Up to 50% off latest collection"
  subText="Explore our stunning jewellery collection crafted for every occasion."
  btnText="Shop Now"
  btnLink="/product"
/>
      <ArtificialJewellery />
      <Cloth />
      <Testimonial /> 
      <Policies /> 
      <InstagramSection />
    </>
  );
}

export default Home;
