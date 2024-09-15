import { Box, Button, CardActions } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../store/cartSlice";

const CartOperation = ({ itemData }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const quantity = cartItems.find(
    (item) => item.idMeal === itemData.idMeal
  )?.quantity;

  const addToCart = () => {
    dispatch(addItems(itemData));
  };

  const removeFromCart = () => {
    dispatch(removeItems(itemData));
  };
  return (
    <CardActions sx={{ margin: "auto auto auto auto" }}>
      {quantity > 0 ? (
        <>
          <Button
            variant="contained"
            onClick={removeFromCart}
            style={{ fontWeight: "bolder" }}
          >
            {quantity > 1 ? <>&#8722;</> : <DeleteIcon />}
          </Button>
          <Box
            variant="outlined"
            component={"div"}
            sx={{
              px: 4,
              py: 1,
              border: "1px solid rgba(25, 118, 210, 0.5)",
              fontWeight: "bolder",
            }}
          >
            {quantity}
          </Box>
          <Button
            variant="contained"
            style={{ fontWeight: "bolder" }}
            onClick={addToCart}
          >
            &#x2b;
          </Button>
        </>
      ) : (
        <Button color="primary" variant="contained" onClick={addToCart}>
          Add To Cart
        </Button>
      )}
    </CardActions>
  );
};

export default CartOperation;
