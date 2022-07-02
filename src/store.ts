import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {applyMiddleware, combineReducers, compose, Dispatch, MiddlewareAPI} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {appReducer} from 'src/modules/app/reducer';
import {RootAction} from './types/actions';

/*
 *--------------------------------------------------*
 * Persist config documentation
 * https://github.com/rt2zz/redux-persist/blob/master/src/types.js#L13-L27
 *--------------------------------------------------*
 */

const appPersistConfig = {
  storage: AsyncStorage,
  key: 'app',
};

export const reducers = {
  app: persistReducer(appPersistConfig, appReducer),
};

export const rootReducer = combineReducers(reducers);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const appMiddleware = (_store: MiddlewareAPI) => (next: Dispatch) => (action: RootAction) => {
  //   var state = store.getState()
  //   switch (action.type) {
  //     case actions.ADD_TASK:
  //       *do something*
  //       break;
  //   }
  next(action);
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, appMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

export const store = configureStore({
  reducer: rootReducer,
  enhancers: compose(...enhancers),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// sagaMiddleware.run(sagas);

export const persistor = persistStore(store);

/*
 *--------------------------------------------------*
 * Reset persist store: persistor.purge()
 *--------------------------------------------------*
 */
