import { ActionType } from "../action-types";

interface SearchPackageAction {
  type: ActionType.SEARCH_PACKAGE;
}

interface SearchPackageSuccessAction {
  type: ActionType.SEARCH_PACKAGE_SUCCESS;
  payload: string[];
}

interface SearchPackageFailureAction {
  type: ActionType.SEARCH_PACKAGE_FAILURE;
  payload: string | null;
}

interface GetpackageAction {
  type: ActionType.SEARCH_PACKAGE_DETAILS;
}

interface GetPackageSuccessAction {
  type: ActionType.SEARCH_PACKAGE_DETAILS_SUCCESS;
  payload: string[];
}

interface GetPackageFailureAction {
  type: ActionType.SEARCH_PACKAGE_DETAILS_FAILURE;
  payload: string | null;
}

interface FetchPackage {
  type: ActionType.FETCH_PACKAGE;
}

interface FetchPackageSuccess {
  type: ActionType.FETCH_PACKAGE_SUCCESS;
  payload: any | null;
}

interface FetchPackageFailure {
  type: ActionType.FETCH_PACKAGE_FAILURE;
  payload: string | null;
}

export type Action =
  | SearchPackageAction
  | SearchPackageSuccessAction
  | SearchPackageFailureAction
  | GetpackageAction
  | GetPackageSuccessAction
  | GetPackageFailureAction
  | FetchPackage
  | FetchPackageSuccess
  | FetchPackageFailure;
