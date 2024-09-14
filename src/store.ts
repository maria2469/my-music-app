import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  // Add other reducers here if needed
});

const store = createStore(
  rootReducer,
  devToolsEnhancer({}) // Keep this line if you use Redux DevTools
);

export default store;
