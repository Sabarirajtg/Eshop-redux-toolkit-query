import { Card, CardContent, Grid2 } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import * as React from "react";

export default function Shimmer({width}) {
  return (
    <>
      <Skeleton
        variant="text"
        height={50}
        sx={{ fontSize: "1rem", maxWidth: "200px", margin: "30px 0" }}
      />
      <Grid2 container spacing={4}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => (
          <Grid2 size="auto" key={item}>
            <Card sx={{ width: width }}>
              <Skeleton variant="rectangular" width={345} height={140} />
              <CardContent>
                <Skeleton variant="text" height={30} width="80%" />
                <Skeleton
                  variant="text"
                  height={20}
                  width="60%"
                  style={{ marginTop: 8 }}
                />
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}
