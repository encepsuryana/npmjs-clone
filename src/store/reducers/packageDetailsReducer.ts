import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface PackageState {
  loading: boolean;
  error: string | null;
  packageData: any | null;
}

const initialState: PackageState = {
  loading: false,
  error: null,
  packageData: null,
};

export const reducer = (
  state: PackageState = initialState,
  action: Action
): PackageState => {
  switch (action.type) {
    case ActionType.FETCH_PACKAGE:
      return {
        ...state,
        loading: true,
        error: null,
        packageData: null,
      };

    case ActionType.FETCH_PACKAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        packageData: action.payload,
      };

    case ActionType.FETCH_PACKAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        packageData: null,
      };

    default:
      return state;
  }
};
