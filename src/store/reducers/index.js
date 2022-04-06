import { combineReducers } from "redux";
import productos from "./productosReducer";

const reducers = combineReducers({
    productos,
});

export default reducers;
