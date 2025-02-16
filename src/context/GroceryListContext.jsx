import { createContext, useState, useContext } from "react";

// Create Context
const GroceryListContext = createContext();

// Custom hook for using GroceryListContext
export const useGroceryList = () => {
    return useContext(GroceryListContext);
};

// Provider Component
export const GroceryListProvider = ({ children }) => {
    const [groceryLists, setGroceryLists] = useState([]);

    // Function to add a new list
    const addGroceryList = (newList) => {
        setGroceryLists((prevLists) => [...prevLists, newList]);
    };

    // Function to delete a list
    const deleteGroceryList = (id) => {
        setGroceryLists((prevLists) => prevLists.filter((list) => list.id !== id));
    };

    return (
        <GroceryListContext.Provider value={{ groceryLists, addGroceryList, deleteGroceryList }}>
            {children}
        </GroceryListContext.Provider>
    );
};
