import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {logger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

let middleWare = [logger, thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)));
export {store};
