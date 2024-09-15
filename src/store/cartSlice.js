import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0
  },
  reducers: {
    addItems: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.idMeal === action.payload.idMeal
      );
      if (existingItem) {
        existingItem.quantity += 1;
        state.total += existingItem.price;
      } else {
        let price = Math.floor(Math.random() * (100 - 60 + 1)) + 60
        state.items.push({
          ...action.payload,
          price,
          quantity: 1,
        });
        state.total += price;
      }
    },
    removeItems: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.idMeal === action.payload.idMeal
      );
      if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
        state.total -= state.items[itemIndex].price;
      } else {
        state.total -= state.items[itemIndex].price;
        state.items.splice(itemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.total = 0;
      state.items = [];
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
