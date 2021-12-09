import { createStore } from "redux";
import Reducer from "./reducer/index";




export const store = createStore(
    Reducer,
    {}
)