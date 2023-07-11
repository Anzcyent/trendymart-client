import React from "react";
import { Carousel, Navbar, Categories, Products } from "../containers";
import { Footer, Newsletter } from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
