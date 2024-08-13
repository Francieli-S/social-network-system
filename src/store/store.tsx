'use client';

import * as React from 'react';
import { Store, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducerUser from './reducers/user-reducer';
import reducerAuth from './reducers/auth-reducer';

const rootReducer = combineReducers({ reducerUser, reducerAuth });

// from chatGPT - check later how it works
export type RootState = ReturnType<typeof rootReducer>;

// const store: Store<RootState, UserAction | AuthAction> = configureStore({ rootReducer });
const store: Store<RootState> = configureStore({ reducer: rootReducer });

const StoreWrapper = ({children}: React.PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>
} 

export default StoreWrapper