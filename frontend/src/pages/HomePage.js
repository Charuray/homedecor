import React from "react";
import NavigationBar from "../components/Navbar";
import Hero from "../components/Hero";
import TrendingProducts from "../components/TrendingProducts";
import MegaMenu from "../components/MegaMenu";
import Categories from "../components/Categories";
import CustomerReviews from "../components/CustomerReviews";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <MegaMenu />
      <Hero />
      <Categories />
      <TrendingProducts />
      <WhyChooseUs />
      <CustomerReviews />
      <Footer />
    </>
  );
};

export default HomePage;
