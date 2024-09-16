import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

function ItemDescShimmer() {
  return (
    <>
      <Skeleton
        variant="text"
        height={50}
        sx={{ fontSize: "1rem", maxWidth: "200px", margin: "30px 0" }}
      />
      <Grid container spacing={4}>
        <Grid item xs={12} md={12} lg={12} xl={5}>
          <Box
            sx={{
              "@media (max-width: 539px)": {
                "& .skeleton": {
                  width: "340px",
                  height: "340px",
                },
              },
              "@media (min-width: 540px)": {
                "& .skeleton": {
                  width: "600px",
                  height: "600px",
                },
              },
            }}
          >
            <Skeleton className="skeleton" variant="rectangular" />
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={7}>
          <Skeleton variant="text" width="80%" height={40} />
          <Skeleton
            variant="text"
            width="60%"
            height={30}
            style={{ marginTop: 16 }}
          />
          <Skeleton
            variant="text"
            width="60%"
            height={30}
            style={{ marginTop: 8 }}
          />
          <Skeleton
            variant="text"
            width="60%"
            height={30}
            style={{ marginTop: 8 }}
          />
          <Skeleton
            variant="text"
            width="60%"
            height={30}
            style={{ marginTop: 8 }}
          />
          <Box mt={2}>
            <Skeleton variant="rectangular" width={200} height={50} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default ItemDescShimmer;
