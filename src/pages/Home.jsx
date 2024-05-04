import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Box, Button } from "@mui/material";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const getProduct = async () => {
    setLoading(true);
    try {
      const URL = `https://fakestoreapi.com/products `;
      const res = await axios(URL);
      // console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProduct();
  }, [category]);

  const filterProduct = () => {
    if (category === "") {
      return products;
    } else {
      return products.filter((product) => product.category === category);
    }
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "inline-flex",
          gap: "10px",
          p: "24px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            border: "2px solid violet",
            width: "120px",
            p: "3px",
            color: "violet",
          }}
          onClick={() => setCategory("")}
        >
          ALL
        </Button>
        <Button
          sx={{
            border: "2px solid violet",
            width: "150px",
            p: "3px",
            color: "violet",
          }}
          onClick={() => setCategory("electronics")}
        >
          ELECTRONICS
        </Button>
        <Button
          sx={{
            border: "2px solid violet",
            width: "150px",
            p: "3px",
            color: "violet",
          }}
          onClick={() => setCategory("jewelery")}
        >
          JEWELERY
        </Button>
        <Button
          sx={{
            border: "2px solid violet",
            width: "150px",
            p: "3px",
            color: "violet",
          }}
          onClick={() => setCategory("men's clothing")}
        >
          MEN
        </Button>
        <Button
          sx={{
            border: "2px solid violet",
            width: "150px",
            p: "3px",
            color: "violet",
          }}
          onClick={() => setCategory("women's clothing")}
        >
          WOMEN
        </Button>
      </Box>

      <Box>
        {loading ? (
          <img src="./loading.gif" alt="loading.." width="200" height="200" />
        ) : (
          filterProduct().map((item) => <ProductCard key={item.id} {...item} />)
        )}
      </Box>
    </Box>
  );
};

export default Home;
