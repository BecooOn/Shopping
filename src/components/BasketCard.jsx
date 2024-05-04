import React from "react";
import { useSelector } from "react-redux";
import FilledBasketTotal from "./FilledBasketTotal";
import EmptyBasket from "./EmptyBasket";

const BasketCard = () => {
  const basket = useSelector((state) => state.basket);
  return (
    <div>{basket.length > 0 ? <FilledBasketTotal /> : <EmptyBasket />}</div>
  );
};

export default BasketCard;
