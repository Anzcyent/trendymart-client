import React, { useEffect, useState } from "react";
import { Product } from "../components";
import axios from "axios";

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/product?category=${category}`
            : "http://localhost:5000/api/product"
        );

        setProducts(res.data.products);
      } catch (err) {}
    };

    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="p-3 font-urbanist mt-5">
      <h1 className="font-bold text-4xl text-center">Popular Products</h1>

      <div className="flex flex-wrap justify-evenly mt-3">
        {category 
          ? filteredProducts.map((product) => (
              <Product key={product._id} image={product.image} _id={product._id} />
            ))
          : products
              .slice(0, 8)
              .map((product) => (
                <Product key={product._id} image={product.image} _id={product._id} />
              ))}
      </div>
    </div>
  );
};

export default Products;
