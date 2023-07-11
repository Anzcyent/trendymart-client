import React from "react";
import { Carousel, Navbar, Categories, Products } from "../containers";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
