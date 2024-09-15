import { styled } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CartOperation from "./CartOperation";
import { Link, useParams } from "react-router-dom";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "350px",
}));

export default function ItemCard({ itemData }) {
  const { strMeal, strMealThumb } = itemData;
  let { category } = useParams();
  
  return (
    <StyledCard sx={{ width: 345 }}>
      <Link to={`/${category}/${itemData.strMeal}`}>
        <CardMedia
          component="img"
          alt={strMeal}
          height="140"
          image={strMealThumb}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {strMeal}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Click to learn more about {strMeal}.
          </Typography>
        </CardContent>
      </Link>
      <CartOperation itemData={itemData} />
    </StyledCard>
  );
}
