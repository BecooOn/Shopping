import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const EmptyBasket = () => {
  return (
    <Box
      component="section"
      sx={{
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        height: "90vh",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2" color="red" textAlign="center">
        No items!
      </Typography>
      <Link to="/">
        <Button
          variant="outlined"
          sx={{
            color: "violet",
            borderColor: "violet",
            "&:hover": { color: "violet" },
          }}
        >
          Products
        </Button>
      </Link>
    </Box>
  );
};

export default EmptyBasket;
