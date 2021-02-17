import {combineReducers} from "redux";
import * as githubReducer from '../redux/githubSearch/githubSearch.reducer';
const rootReducer = combineReducers({
    [githubReducer.githubFeatureKey]: githubReducer.reducer
});

export {rootReducer}
