import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetItemDetailQuery } from "../store/foodsApi";
import CartOperation from "../Components/CartOperation";
import ItemDescShimmer from "../Components/Shimmer/ItemDescShimmer";

const ItemDescription = () => {
  let { category, item } = useParams();

  const { data, error, isLoading } = useGetItemDetailQuery(item);

  if (isLoading) {
    return (
      <>
        <ItemDescShimmer />
      </>
    );
  }

  if (!!error) {
    return "Something went wrong!";
  }

  const { meals } = data;
  return (
    <>
      <h1>{category + " / " + item} </h1>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12} lg={12} xl={5}>
          <img
            src={meals[0].strMealThumb}
            alt={meals[0].strMeal}
            width={"700px"}
            height={"700px"}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={7}>
          <Typography variant="body1" mb={4}>
            {meals[0].strInstructions}
          </Typography>
          <Typography variant="h6">Key ingredients:</Typography>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((ing) => (
            <Typography variant="span" key={ing}>
              {meals[0]["strIngredient" + ing] &&
                meals[0]["strIngredient" + ing] + ", "}
            </Typography>
          ))}
          <Box mt={2} ml={-1}>
            <CartOperation
              itemData={{
                strMeal: meals[0].strMeal,
                strMealThumb: meals[0].strInstructions,
                idMeal: meals[0].idMeal,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ItemDescription;
