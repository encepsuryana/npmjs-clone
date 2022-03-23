import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchNpmPackages = (query: string) => {
  const url = `https://api.npms.io/v2/search?q=${query}`;

  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_PACKAGE });

    try {
      const response = await axios.get(url);

      dispatch({
        type: ActionType.SEARCH_PACKAGE_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_PACKAGE_FAILURE,
        payload: error.message,
      });
    }
  };
};

// get individual package details

export const fetchPackageData = (packageName: string) => {
  const url = `https://api.npms.io/v2/package/${packageName}`;

  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.FETCH_PACKAGE });

    try {
      const response = await axios.get(url);

      dispatch({
        type: ActionType.FETCH_PACKAGE_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.FETCH_PACKAGE_FAILURE,
        payload: error.message,
      });
    }
  };
};
