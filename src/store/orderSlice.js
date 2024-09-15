import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: { items: [] },
  reducers: {
    placeOrder: (state, action) => {
      state.items.push(action.payload);
    },
    clearOrders: (state) => {
      state.total = 0;
      state.items = [];
    },
  },
});

export const { placeOrder, clearOrders } = orderSlice.actions;

export default orderSlice.reducer;
