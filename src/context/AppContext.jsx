import { createContext, useReducer } from "react";

const initialState = {
balance: 8000,
transactionList: [
    {id: 1, name: 'shopping', cost: 500},
    {id: 2, name: 'grocery', cost: 200},
 ],
};

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactionList: [...state.transactionList, action.payload],
            }
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactionList: state.transactionList.filter((transaction)=> transaction.id !== action.payload)
            }
        default:
            return state;
    }
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
    <AppContext.Provider value={{
        balance: state.balance,
        transactionList: state.transactionList,
        dispatch,
    }}>
     {props.children}
    </AppContext.Provider>
    )
};

