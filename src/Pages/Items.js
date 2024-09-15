import Grid from "@mui/material/Grid2";
import React from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../Components/ItemCard";
import Shimmer from "../Components/Shimmer/GridCardShimmer";
import { useGetItemsQuery } from "../store/foodsApi";

const Items = () => {
  let { category } = useParams();
  const { data, error, isLoading } = useGetItemsQuery(category);

  if (isLoading) {
    return (
      <>
        <Shimmer />
      </>
    );
  }

  if (!!error) {
    return "Something went wrong!";
  }

  return (
    <>
      <div>
        <h1>Items</h1>
        <Grid
          container
          spacing={4}
          sx={{
            alignItems: "center",
          }}
        >
          {data.meals.map((meal) => (
            <Grid size="auto" key={meal.idMeal}>
              <ItemCard itemData={meal} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Items;
