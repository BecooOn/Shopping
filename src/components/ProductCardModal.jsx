import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";

const ProductCardModal = ({
  open,
  setOpen,
  image,
  title,
  price,
  id,
  description,
  handleProduct,
}) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    height: isSmallScreen ? 520 : 600, 
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={style}>
        <CardActions sx={{ position: "absolute", top: 0, right: 0 }}>
          <IconButton aria-label="close" onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </CardActions>
        <CardMedia
          component="img"
          height="154"
          image={image}
          alt={title}
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.primary"
            fontWeight={"bold"}
            fontSize={"1rem"}
          >
            {title}
          </Typography>
          <Typography>{description}</Typography>
          <Typography sx={{ color: "black", fontWeight: "bold" }}>
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
          <IconButton
            aria-label="add to cart"
            onClick={handleProduct}
            sx={{
              color: "orange",
              "&:hover": { color: "violet" },
            }}
          >
            <AddShoppingCartIcon sx={{ fontSize: 36 }} />
          </IconButton>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default ProductCardModal;
