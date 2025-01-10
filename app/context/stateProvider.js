
// import React, { createContext, useContext, useReducer } from "react";

// // Create a Context for the Global State
// const StateContext = createContext();

// // Action Types (example)
// const SET_USER = "SET_USER";
// const SET_THEME = "SET_THEME";

// // Initial State
// const initialState = {
//   user: null,
//   theme: "light",
// };

// // Reducer to manage global state
// const globalReducer = (state, action) => {
//   switch (action.type) {
//     case SET_USER:
//       return {
//         ...state,
//         user: action.user,
//       };
//     case SET_THEME:
//       return {
//         ...state,
//         theme: action.theme,
//       };
//     default:
//       return state;
//   }
// };

// // State Provider component to wrap the app
// export const StateProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(globalReducer, initialState);

//   return (
//     <StateContext.Provider value={{ state, dispatch }}>
//       {children}
//     </StateContext.Provider>
//   );
// };

// // Custom Hook to use the Global State
// export const useStateValue = () => useContext(StateContext);
