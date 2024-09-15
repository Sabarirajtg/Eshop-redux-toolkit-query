import { createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./Components/Error";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Toolbar } from "@mui/material";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import Items from "./Pages/Items";
import ItemDescription from "./Pages/ItemDescription";
import Cart from "./Pages/Cart";
import { PersistGate } from "redux-persist/integration/react";
import MyOrders from "./Pages/MyOrders";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="content">
          <Header />
          <Toolbar />
          <Outlet />
        </div>
      </PersistGate>
    </Provider>
  );
};

export let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/items/:category",
        element: <Items />,
      },
      { path: "/:category/:item", element: <ItemDescription /> },
      { path: "/cart", element: <Cart /> },
      { path: "/myorders", element: <MyOrders /> },
    ],
  },
]);
