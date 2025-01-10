
// import React, { createContext, useContext, useReducer } from "react";


// const CartContext = createContext();


// const ADD_TO_CART = "ADD_TO_CART";
// const UPDATE_ITEM_QUANTITY = "UPDATE_ITEM_QUANTITY"; 


// const initialState = {
//   cartItems: [],
// };

// // Reducer to manage cart state
// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return {
//         ...state,
//         cartItems: [...state.cartItems, { ...action.item, count: 1 }], 
//       };
//       case "UPDATE_ITEM_QUANTITY":
//         return {
//           ...state,
//           cartItems: state.cartItems.map((item) => {
//             if (item.id === action.payload.itemId) {
//               const newCount = action.payload.action === "increment" 
//                 ? item.count + 1 
//                 : Math.max(item.count - 1, 0); 
//               return { ...item, count: newCount };
//             }
//             return item; 
//           }),
//         };
   
//       default:
//         return state;
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
