import React from "react";
import { useSelector } from "react-redux";
import FilledBasketTotal from "../components/FilledBasketTotal";
import EmptyBasket from "../components/EmptyBasket";

const BasketCard = () => {
  const basket = useSelector((state) => state.basket);
  return (
    <div>{basket.length > 0 ? <FilledBasketTotal /> : <EmptyBasket />}</div>
  );
};

export default BasketCard;
