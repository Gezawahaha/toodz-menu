import MenuReducer from "./MenuReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    menus: [],
    isFetching: false,
    error: false
};

export const MenuContext = createContext(INITIAL_STATE);

export const MenuContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MenuReducer, INITIAL_STATE);

    return(
        <MenuContext.Provider value={{
            menus: state.menus, 
            isFetching: state.isFetching, 
            error: state.error,
            dispatch
        }}>{children}</MenuContext.Provider>
    )
};