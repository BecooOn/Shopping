import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { addBasket } from "../redux/action/basketAction";

const ProductCard = ({ image, title, price, category, description, id }) => {
  const dispatch = useDispatch();

  const handleProduct = () => {
    dispatch(addBasket({ image, description, title, category, price, id }));
  };

  return (
    <Box
      sx={{
        display: "inline-flex",
        flexWrap: "wrap",
        flexDirection: "col",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "350px",
        height: "400px",
        margin: "24px 5px",
      }}
    >
      <Card sx={{ maxWidth: 345, width: "250px", height: "380px", p: "10px" }}>
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt={title}
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
          <Typography>{price} $</Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: "center",
            // border: "2px solid black",
            gap: "4px",
          }}
        >
          <Typography>{category}</Typography>
          <IconButton
            aria-label="add to cart"
            onClick={handleProduct}
            sx={{ "&:hover": { color: "pink" } }}
          >
            <ShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductCard;
