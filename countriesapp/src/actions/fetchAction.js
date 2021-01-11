import { createAction } from "@reduxjs/toolkit";

const GENERATE_INITIAL_DATA_REQUEST = "GENERATE_INITIAL_DATA_REQUEST";
const GENERATE_INITIAL_DATA_SUCCESS = "GENERATE_INITIAL_DATA_SUCCESS";
const GENERATE_INITIAL_DATA_FAILED = "GENERATE_INITIAL_DATA_FAILED";

const generateInitialDataRequest = createAction(GENERATE_INITIAL_DATA_REQUEST);
const generateInitialDataSuccess = createAction(GENERATE_INITIAL_DATA_SUCCESS);
const generateInitialDataFailed = createAction(GENERATE_INITIAL_DATA_FAILED);

export const getInitialData = () => (dispatch) => {
  dispatch(generateInitialDataRequest());
  return fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => response.json())
    .then((data) => dispatch(generateInitialDataSuccess(data)))
    .catch((error) => {
      dispatch(generateInitialDataFailed(error));
    });
};
