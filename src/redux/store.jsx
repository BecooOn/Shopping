import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension"
import basketReducer from "./reducer/basketReducer";

export const store = createStore(basketReducer, composeWithDevTools())