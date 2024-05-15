import Banner from "@/components/banner";
import NavbarCategory from "@/components/nav";
import React from "react";
import banner from '../assets/images/Image [w-full].svg'
import Discount from "@/components/discounts";
import Interested from "@/components/interested";




const Home = () => {
  return <div>

<NavbarCategory/>
    <Banner />
    <Discount/>
    <Interested/>
  </div>;
};

export default Home;
