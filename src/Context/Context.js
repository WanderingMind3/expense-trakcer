import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const intialState = [];

export const ExpenseTrackerContext = createContext(intialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, intialState);

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  console.log(transactions);

  return (
    <ExpenseTrackerContext.Provider
      value={{transactions, deleteTransaction, addTransaction }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
