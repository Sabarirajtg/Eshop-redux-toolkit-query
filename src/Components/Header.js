import { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";

function Header() {
  const [quantity, setQuantity] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    let count = 0;
    cartItems.forEach((item) => (count += item.quantity));
    setQuantity(count);
  }, [cartItems]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    navigate('/myorders')
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: "block" } }}
          >
            <Link to="/" style={{ color: "white" }}>
              E Shop
            </Link>
          </Typography>
          <Link to="/cart">
            <Button sx={{ color: "#fff" }}>
              <Badge badgeContent={quantity} color="error">
                <ShoppingCartIcon />
              </Badge>
            </Button>
          </Link>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>My Orders</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
