// import React, { createContext, useContext, useReducer } from "react";

// export const StateContext = createContext();

// export const StateProvider = ({ reducer, initialState, children }) => (
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );

// export const useStateValue = () => useContext(StateContext);

// stateProvider.js

// import React, { createContext, useReducer, useContext } from "react";
// import { initialState } from "./initialState";
// import { reducer } from "./reducer";

// // Create context
// const CartContext = createContext();

// // StateProvider component to wrap your app with the context
// export const StateProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to access cart state and dispatch function
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a StateProvider");
//   }
//   return context;
// };

// import React, { createContext, useContext, useReducer } from "react";

// // Create a Context for the Cart
// const CartContext = createContext();

// // Action Types
// const ADD_TO_CART = "ADD_TO_CART";
// const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// // Initial State
// const initialState = {
//   cartItems: [],
// };

// // Reducer to manage cart state
// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return {
//         ...state,
//         cartItems: [...state.cartItems, action.item],
//       };
//     case REMOVE_FROM_CART:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(item => item.id !== action.id),
//       };
//     default:
//       return state;
//   }
// };

// // Cart Provider component to wrap the app
// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom Hook to use the Cart Context
// export const useCart = () => useContext(CartContext);

// import React, { createContext, useContext, useReducer } from "react";

// // Initial state
// const initialState = {
//   cart: [], // Initialize cart as an empty array
// };

// // Reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return {
//         ...state,
//         cart: [...state.cart, action.item], // Add item to cart
//       };
//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         cart: state.cart.filter((item) => item.id !== action.id), // Remove item from cart
//       };
//     default:
//       return state;
//   }
// };

// // Create context
// const CartContext = createContext();

// // Custom hook to use the cart context
// export const useCart = () => useContext(CartContext);

// // StateProvider component
// export const StateProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState); // Use useReducer to manage state

//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


import React, { createContext, useContext, useReducer } from "react";

// Create a Context for the Global State
const StateContext = createContext();

// Action Types (example)
const SET_USER = "SET_USER";
const SET_THEME = "SET_THEME";

// Initial State
const initialState = {
  user: null,
  theme: "light",
};

// Reducer to manage global state
const globalReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};

// State Provider component to wrap the app
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

// Custom Hook to use the Global State
export const useStateValue = () => useContext(StateContext);
