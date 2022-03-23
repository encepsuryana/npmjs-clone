import { combineReducers } from "redux";

import { reducer as packageReducer } from "./packageReducer";
import { reducer as packageDetailsReducer } from "./packageDetailsReducer";

const reducers = combineReducers({
  packageReducer,
  packageDetailsReducer,
});

export default reducers;

// for typing/typescript
export type RootState = ReturnType<typeof reducers>;
