import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducers/app';
import usersReducer from './reducers/users';
import sagas from './sagas';

export const reducers = {
  app: appReducer,
  users: usersReducer,
};

export const rootReducer = combineReducers(reducers);

/*
 *--------------------------------------------------*
 * Persist config documentation
 * https://github.com/rt2zz/redux-persist/blob/master/src/types.js#L13-L27
 *--------------------------------------------------*
 */
const persistConfig = {
  storage: AsyncStorage,
  key: 'root',
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// tslint:disable-next-line: no-shadowed-variable
const appMiddleware = (store: any) => (next: (arg0: any) => void) => (
  action: any,
) => {
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

export const store = createStore(persistedReducer, compose(...enhancers));

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);

/*
 *--------------------------------------------------*
 * Reset persist store: persistor.purge()
 *--------------------------------------------------*
 */
