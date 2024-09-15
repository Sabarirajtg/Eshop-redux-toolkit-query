import Grid from "@mui/material/Grid2";
import React from "react";
import CategoryCard from "../Components/CategoryCard";
import Shimmer from "../Components/Shimmer/GridCardShimmer";
import { useGetCategoriesQuery } from "../store/foodsApi";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, error, isLoading } = useGetCategoriesQuery();

  if (isLoading) {
    return (
      <>
        <Shimmer width={235}/>
      </>
    );
  }

  if (!!error) {
    return "Something went wrong!";
  }

  return (
    <>
      <div>
        <h1>Categories</h1>
        <Grid container spacing={4}>
          {data.categories.map((category) => (
            <Grid size="auto" key={category.idCategory}>
              <Link to={`/items/${category.strCategory}`}>
                <CategoryCard categoryData={category} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Home;
