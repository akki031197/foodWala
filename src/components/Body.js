import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((data, index) => (
          <RestaurantCard key={data.data.id} resData={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
