import { combineReducers } from "redux";

const dataFetch = (state = {}, action) => {
  switch (action.type) {
    case "GENERATE_INITIAL_DATA_REQUEST":
      return { ...state, loading: true };
      break;
    case "GENERATE_INITIAL_DATA_SUCCESS":
      return { ...state, allCountries: [...action.payload], loading: false };
      break;
    case "GENERATE_INITIAL_DATA_FAILED":
      return { ...state, error: { ...action.payload }, loading: false };
      break;
    default:
      return state;
  }
};
const rootReducer = combineReducers({ dataFetch });

export default rootReducer;
