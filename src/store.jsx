import React, { createContext, useContext, useReducer } from 'react';

import sideMenu from './components/06-tree-view/data';

// Initial state
const initialState = {

   scrollIndicator: sideMenu[8].visible,

};

// Create the context
const StoreContext = createContext(initialState);

// Action types
const TOGGLE_SCROLL_INDICATOR = 'TOGGLE_SCROLL_INDICATOR';

// Reducer function
const reducer = (state, action) => {

   switch (action.type) {

      case TOGGLE_SCROLL_INDICATOR:

         return { ...state, scrollIndicator: state.scrollIndicator ? false : true };

      default:

         return state;

   };

};

// Store Provider component
export const StoreProvider = ({ children }) => {

   const [state, dispatch] = useReducer(reducer, initialState);

   return (

      <StoreContext.Provider value={{ state, dispatch }}>

         {children}

      </StoreContext.Provider>

   );

};

// Custom hook to use the store
export const useStore = () => {

   return useContext(StoreContext);
   
};