import React from "react";
import { Carousel, Categories, Products } from "../containers";
import { Footer, Newsletter, Navbar, Announcement } from "../components";

const Home = () => {
  return (
    <div>
      <Announcement />
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
