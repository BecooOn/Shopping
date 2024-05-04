import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CloseIcon from "@mui/icons-material/Close";
import Swal from "sweetalert2";

import {
  clearBasket,
  decrementBasket,
  incrementBasket,
  removeProduct,
} from "../redux/action/basketAction";
import { IconButton } from "@mui/material";

const FilledBasketTotal = () => {
  const basket = useSelector((state) => state.basket);
  console.log(basket);
  const dispatch = useDispatch();

  const handleBasket = (id, operation) => {
    if (operation === "plus") {
      console.log("plus");
      return dispatch(incrementBasket(id));
    } else if (operation === "minus") {
      // console.log("minus");
      const item = basket.find((item) => item.id === id);
      if (item.quantity > 1) {
        return dispatch(decrementBasket(id));
      }
    } else {
      dispatch(removeProduct(id));
    }
  };

  const handleRemove = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearBasket());
        Swal.fire({
          title: "Deleted!",
          text: "Your basket has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handlePrice = () => {
    let total = 0;
    basket.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        padding: "24px 5px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          padding: "24px 5px",
        }}
      >
        {basket.map((item) => (
          <Card
            key={item.id}
            sx={{
              maxWidth: 345,
              width: "280px",
              height: "380px",
              p: "10px",
              m: "20px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <CardActions sx={{ position: "absolute", top: 0, right: 0 }}>
              <IconButton
                onClick={() => handleBasket(item.id, "delete")}
                sx={{ border: "1px solid red", color: "red" }}
              >
                <CloseIcon />
              </IconButton>
            </CardActions>
            <CardMedia
              component="img"
              alt={item.image}
              height="200"
              image={item.image}
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.title}
              </Typography>
              <Typography variant="body1" color="orange">
                {item.price}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                sx={{ width: "40px", height: "50px" }}
                name="minus"
                onClick={() => handleBasket(item.id, "minus")}
              >
                <ArrowDropDownOutlinedIcon
                  sx={{ fontSize: "45px", m: "20px" }}
                />
              </Button>
              <Typography variant="h5" color="text.secondary">
                {item.quantity}
              </Typography>
              <Button
                sx={{ width: "40px", height: "50px" }}
                name="plus"
                onClick={() => handleBasket(item.id, "plus")}
              >
                <ArrowDropUpOutlinedIcon sx={{ fontSize: "45px", m: "20px" }} />
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          padding: "24px 5px",
        }}
      >
        <Typography sx={{ border: "1px solid #1976D2", px: "16px", py: "6px" }}>
          <span className="total">Subtotal :</span>
          <span className="total-price">{handlePrice()}$ </span>
        </Typography>
        <Button
          sx={{ width: "40px", height: "50px", "&:hover": { color: "red" } }}
          onClick={handleRemove}
        >
          <DeleteForeverIcon sx={{ fontSize: "45px", m: "20px" }} />
          <span>Clear all</span>
        </Button>
      </Box>
    </Box>
  );
};

export default FilledBasketTotal;
