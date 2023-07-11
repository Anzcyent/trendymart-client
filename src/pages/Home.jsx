import React from "react";
import { Carousel, Navbar, Categories, Products } from "../containers";
import { Newsletter } from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
