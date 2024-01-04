import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  const topRatedRestaurants = () => {
    const restaurant = resList.filter((res) => res.data.avgRating > 4);
    setListOfRestaurants(restaurant);
  };

  return (
    <div className="body">
      <button className="filter-btn" onClick={topRatedRestaurants}>
        Top Rated Restaurant
      </button>
      {/* <div className="search">Search</div> */}
      <div className="res-container">
        {!listOfRestaurants.length > 0
          ? "..loading"
          : listOfRestaurants.map((data, index) => (
              <RestaurantCard key={data.data.id} resData={data} />
            ))}
      </div>
    </div>
  );
};

export default Body;
