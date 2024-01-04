import React from "react";
import { CON_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props?.resData?.data;
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    deliveryTime,
  } = props?.resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CON_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
