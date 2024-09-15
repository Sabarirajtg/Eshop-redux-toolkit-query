import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function CategoryCard({ categoryData }) {
  const { strCategory, strCategoryThumb } = categoryData;
  return (
    <Card sx={{ maxWidth: 345 }} className="category-card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={strCategoryThumb}
          alt={strCategory}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {strCategory}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Click on this category for menu.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
