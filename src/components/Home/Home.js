import React from "react";
import Banner from "../HeroSection/Banner";
import "./Home.css";

import SecondBanner from "../Banner/SecondBanner";
import SliderOne from "../Sliders/SliderOne";
import InstagramFeed from "../InstagramFeed/InstagramFeed";
import BestSeller from "../BestSellerSection/BestSeller";
import ShopMenWomen from "../ShopMenWomen/ShopMenWomen";

function Home() {
  return (
    <div className="home">
      <Banner />
      <SliderOne />
      <SecondBanner />
      <BestSeller />
      <ShopMenWomen />
      <InstagramFeed />
    </div>
  );
}

export default Home;
