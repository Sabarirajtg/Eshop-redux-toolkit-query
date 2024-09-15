import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import uniqid from "uniqid";
import CartOperation from "../Components/CartOperation";
import Toaster from "../Components/Toaster";
import { clearCart } from "../store/cartSlice";
import { placeOrder } from "../store/orderSlice";

const Cart = () => {
  const [toaster, setToaster] = useState(false);
  const [toastMsg, setToasterMsg] = useState("");

  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const dispatch = useDispatch();

  const order = () => {
    setToasterMsg("Order Placed Successfully!");
    setToaster(true);
    dispatch(placeOrder({ menu: cartItems, total: total, id: uniqid() }));
    dispatch(clearCart());
  };

  const clearCartItems = () => {
    setToasterMsg("Cart Cleared!");
    setToaster(true);
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: "center" }}>
        <Toaster open={toaster} setOpen={setToaster} msg={toastMsg} />
        <h1>Your Cart is Empty.</h1>
        <h2>Keep Shopping!</h2>
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            navigate("/");
          }}
        >
          Shop by category
        </Button>
      </div>
    );
  }

  return (
    <>
      <h1>Cart</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} lg={8} xl={8}>
          {cartItems.map((item) => (
            <Card key={item.idMeal} className="card-container">
              <Grid container spacing={3}>
                <Grid item xs={12} md={2} lg={1}>
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    width={"70px"}
                  />
                </Grid>
                <Grid item xs={12} md={4} lg={8}>
                  <Typography variant="h6">{item.strMeal}</Typography>
                  <div style={{ marginTop: "20px" }}>₹{item.price}</div>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <CartOperation itemData={item} />
                </Grid>
              </Grid>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {"Summary"}
              </Typography>
              {cartItems.map((item) => (
                <div className="summary" key={item.idMeal}>
                  <div>{item.strMeal}</div>
                  <div style={{ minWidth: "100px" }}>
                    {item.price} x {item.quantity} =
                    {" " + item.quantity * item.price}
                  </div>
                </div>
              ))}
              <hr />
              <div className="summary" style={{ marginTop: "10px" }}>
                <Typography gutterBottom variant="h6" component="div">
                  Total:
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {total}/-
                </Typography>
              </div>
              <hr />
              <div className="summary">
                <Button
                  // className="place-order-btn"
                  variant="contained"
                  onClick={order}
                  color="success"
                >
                  Place Order
                </Button>
                <Button
                  variant="contained"
                  onClick={clearCartItems}
                  color="warning"
                >
                  Clear Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
