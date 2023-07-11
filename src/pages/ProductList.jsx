import React from "react";
import { Announcement, Filter, Footer, Navbar, Newsletter } from "../components";
import { Products } from "../containers";

const ProductList = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Filter />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
