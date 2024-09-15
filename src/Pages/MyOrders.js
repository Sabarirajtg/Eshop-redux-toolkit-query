import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const MyOrders = () => {
  const orders = useSelector((state) => state.order.items);

  return (
    <>
      <h1>My Orders</h1>
      {orders.map((order) => (
        <div key={order.id} className="order-container">
          <div className="summary">
            <h2>Order ID: {order.id}</h2>
            <h3>Total: ₹{order.total}</h3>
          </div>
          <h2>Items</h2>
          {order.menu.map((item) => (
            <Card key={item.idMeal} className="card-container">
              <Grid container spacing={1}>
                <Grid item xs={12} md={2} lg={1}>
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    width={"70px"}
                  />
                </Grid>
                <Grid item xs={12} md={4} lg={9}>
                  <Typography variant="h6">{item.strMeal}</Typography>
                  <div style={{ marginTop: "20px", fontWeight: "bold" }}>
                    ₹{item.price}
                  </div>
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                  <div className="card-total-price">
                    <div style={{ marginTop: "auto" }}>
                      {item.price} x {item.quantity} =
                      {" " + item.price * item.quantity}
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Card>
          ))}
        </div>
      ))}
    </>
  );
};

export default MyOrders;
