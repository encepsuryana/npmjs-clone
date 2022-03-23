import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface PackageState {
  packages: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: PackageState = {
  packages: [],
  loading: false,
  error: null,
};

export const reducer = (
  state: PackageState = initialState,
  action: Action
): PackageState => {
  switch (action.type) {
    case ActionType.SEARCH_PACKAGE:
      return {
        ...state,
        loading: true,
        error: null,
        packages: [],
      };

    case ActionType.SEARCH_PACKAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        packages: action.payload,
      };

    case ActionType.SEARCH_PACKAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        packages: [],
      };

    default:
      return state;
  }
};
