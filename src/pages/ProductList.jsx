import React, { useState } from "react";
import {
  Announcement,
  Filter,
  Footer,
  Navbar,
  Newsletter,
} from "../components";
import { Products } from "../containers";

import { useParams } from "react-router-dom";

const ProductList = () => {
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const { category } = useParams();

  const handleFilters = (e) => {
    const { value, name } = e.target;
    setFilter({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div>
      <Navbar />
      <Announcement />
      <Filter category={category} handleFilters={handleFilters} setSort={setSort} />
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
