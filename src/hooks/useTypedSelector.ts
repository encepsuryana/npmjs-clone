//for typing/typescript

import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store";

//custom use selector hook with typed selector(RootState from reducers)
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
