// Import necessary dependencies from React
import React, { createContext, useContext, useReducer } from 'react';

// Import side menu data from specified path
import sideMenu from './components/06-tree-view/data';

// Initial state for the application store
const initialState = {

   // Scroll indicator visibility is set based on data from the sideMenu
   scrollIndicator: sideMenu[8].visible,

};

// Create the context for the store, initializing it with the initial state
const StoreContext = createContext(initialState);

// Define action types for the reducer
const TOGGLE_SCROLL_INDICATOR = 'TOGGLE_SCROLL_INDICATOR';

// Reducer function that will manage state updates based on dispatched actions
const reducer = (state, action) => {

   switch (action.type) {

      // Handle the toggle action for the scroll indicator
      case TOGGLE_SCROLL_INDICATOR:

         // Toggle the current state of the scrollIndicator
         return { ...state, scrollIndicator: state.scrollIndicator ? false : true };

      // Default case - return the current state if action type doesn't match
      default:

         return state;

   };

};

// Store Provider component that will wrap around parts of the app which need access to the store
export const StoreProvider = ({ children }) => {

   // Utilize the useReducer hook to manage state and dispatch actions
   const [state, dispatch] = useReducer(reducer, initialState);

   // Provide the state and dispatch function to child components
   return (

      <StoreContext.Provider value={{ state, dispatch }}>

         {children}

      </StoreContext.Provider>

   );

};

// Custom hook to allow easy consumption of context (store) in components
export const useStore = () => {

   // Return the current context value (state and dispatch) by using useContext
   return useContext(StoreContext);

};