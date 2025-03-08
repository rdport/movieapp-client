import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer, favoriteReducer, pathReducer, navbarReducer, movieDetailReducer } from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  homeReducer,
  favoriteReducer,
  pathReducer,
  navbarReducer,
  movieDetailReducer
})

// Persist config
const persistConfig = {
  key: 'root',          // Key used for localStorage
  storage,              // Default: uses localStorage
  whitelist: ['homeReducer', 'favoriteReducer', 'pathReducer', 'navbarReducer', 'movieDetailReducer'], // Only persist these reducers
  blacklist: [],        // Or exclude reducers you don't want persisted
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
