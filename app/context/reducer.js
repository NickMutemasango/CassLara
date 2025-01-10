// export const actionType = {
//     SET_USER: "SET_USER",
//     SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
//     SET_CART_SHOW: "SET_CART_SHOW",
//     SET_CARTITEMS: "SET_CARTITEMS",
//   };
  
//   const reducer = (state, action) => {
//     // console.log(action);
  
//     switch (action.type) {
//       case actionType.SET_USER:
//         return {
//           ...state,
//           user: action.user,
//         };
  
//       case actionType.SET_FOOD_ITEMS:
//         return {
//           ...state,
//           foodItems: action.foodItems,
//         };
  
//       case actionType.SET_CART_SHOW:
//         return {
//           ...state,
//           cartShow: action.cartShow,
//         };
  
//       case actionType.SET_CARTITEMS:
//         return {
//           ...state,
//           cartItems: action.cartItems,
//         };
  
//       default:
//         return state;
//     }
//   };
  
//   export default reducer;

// reducer.js

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       // Find the product already in the cart
//       const existingItemIndex = state.cart.findIndex(item => item.id === action.item.id);
      
//       if (existingItemIndex >= 0) {
//         // If item already exists in the cart, update the quantity and total price
//         const updatedCart = state.cart.map((item, index) =>
//           index === existingItemIndex
//             ? { ...item, quantity: item.quantity + 1, totalPrice: item.price * (item.quantity + 1) }
//             : item
//         );
//         const updatedTotalItems = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
//         const updatedTotalPrice = updatedCart.reduce((acc, item) => acc + item.totalPrice, 0);

//         return {
//           ...state,
//           cart: updatedCart,
//           totalItems: updatedTotalItems,
//           totalPrice: updatedTotalPrice,
//         };
//       } else {
//         // If item is not already in the cart, add it
//         const updatedCart = [...state.cart, { ...action.item, quantity: 1, totalPrice: action.item.price }];
//         const updatedTotalItems = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
//         const updatedTotalPrice = updatedCart.reduce((acc, item) => acc + item.totalPrice, 0);

//         return {
//           ...state,
//           cart: updatedCart,
//           totalItems: updatedTotalItems,
//           totalPrice: updatedTotalPrice,
//         };
//       }

//     case "REMOVE_FROM_CART":
//       const filteredCart = state.cart.filter(item => item.id !== action.item.id);
//       const newTotalItems = filteredCart.reduce((acc, item) => acc + item.quantity, 0);
//       const newTotalPrice = filteredCart.reduce((acc, item) => acc + item.totalPrice, 0);
      
//       return {
//         ...state,
//         cart: filteredCart,
//         totalItems: newTotalItems,
//         totalPrice: newTotalPrice,
//       };

//     case "CLEAR_CART":
//       return {
//         ...state,
//         cart: [],
//         totalItems: 0,
//         totalPrice: 0,
//       };

//     default:
//       return state;
//   }
// };

// // cartProvider.js (or wherever you manage your cart state)

