import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import Swal from "sweetalert2";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../redux/action/basketAction";
import ProductCardModal from "./ProductCardModal";

const ProductCard = ({ image, title, price, category, description, id }) => {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const modal = { image, title, price, category, description, id }; //? modal'a buradaki verileri gönderebilmek için oluşturdum.

  const handleProduct = () => {
    if (!basket.find((item) => item.id === id)) {
      return dispatch(
        addBasket({ image, description, title, category, price, id })
      );
    } else {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Already in basket!",
      });
    }
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
          <Typography sx={{ fontWeight: "bold", color: "orange" }}>
            {price} $
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: "center",
            // border: "2px solid black",
            gap: "4px",
          }}
        >
          {/* <Typography>{category}</Typography>
           */}
          <Button
            variant="outlined"
            sx={{
              color: "black",
              borderColor: "black",
              "&:hover": { color: "orange", border: "1px solid orange" },
            }}
            startIcon={<SendIcon />}
            onClick={() => setOpen(true)}
          >
            Detail
          </Button>
          <IconButton
            aria-label="add to cart"
            onClick={handleProduct}
            sx={{ "&:hover": { color: "orange" } }}
          >
            <AddShoppingCartIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </CardActions>
      </Card>
      <ProductCardModal
        open={open}
        setOpen={setOpen}
        handleProduct={handleProduct}
        {...modal}
      />
    </Box>
  );
};

export default ProductCard;
