import { createStore, applyMiddleware, compose } from "redux";

// middleware
import thunk from "redux-thunk";
import reducers from "./reducers";

// for redux dev tools
const composeEnhancers =
  ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
