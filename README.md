# E-Shop Application

## Overview

This document describes the implementation of a dynamic and interactive E-Shop application using React, Redux Toolkit, and RTK Query. The application features a centralized state for categories and items, user navigation, cart management, and order placement. Material-UI is used throughout the application for responsive design and to achieve a shimmer effect for loading states.

## State Management

- **Centralized State**: 
  - Managed using **Redux Toolkit**.
  - Contains a list of categories, each with a list of items.
  - RTK Query is used for API calls to fetch categories and items.

## Layout

- **Header**:
  - Includes a cart button with the quantity of items in the cart displayed on top of the cart icon.
  - Clicking the cart icon navigates to the cart page.

## Home Page

- **Category List**:
  - Displays a list of categories.
  - Clicking on a category navigates to the items listing page for that category.

## Item Card

- **Functionality**:
  - Allows users to add individual products to the cart.
  - Clicking on an item card navigates to the item description page, where users can also update the cart.

## Cart Page

- **Layout**:
  - Left Section: Displays a list of items in the cart.
  - Right Section: Shows a summary of the cart.
- **Interactions**:
  - Users can change the quantity of items. If reduced to less than 1, the item is removed from the cart.
  - Includes a "Place Order" button that generates a unique order ID and navigates to the orders listing page.

## Orders Listing Page

- **Display**:
  - By clicking on profile icon in the Header, a My Order Menu will be displayed, clicking on this will bring to My Orders
  - Lists all orders, each containing the items included in the order.

## Implementation Details

- **Pricing**:
  - Prices for products are generated using `Math.random()` to simulate dynamic pricing.

- **Material-UI**:
  - Used throughout the application to achieve responsiveness and enhance UI with components like buttons, cards, and grids.
  - Implemented a shimmer effect for loading states to improve user experience.

## API Integration

- **API Source**: [The Meal DB API](https://www.themealdb.com/api.php)
  - Utilized RTK Query to fetch data from the API, including categories and items.

## Technologies Used

- **React**: For building the user interface and managing state.
- **Redux Toolkit**: For state management and handling global state.
- **RTK Query**: For API data fetching and caching.
- **Material-UI**: For UI components and responsive design.
- **JavaScript**: For generating random prices and handling other logic.