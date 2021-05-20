import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';

function configureAppStore(preLoadedState) {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
    preLoadedState
  });
}

export default configureAppStore();