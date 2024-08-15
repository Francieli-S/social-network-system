'use client';

import * as React from 'react';
import { Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer, { StateUsersAuth } from './reducers/reducer';

// const rootReducer = combineReducers({ reducerUser, reducerAuth });
// from chatGPT - check later how it works
// export type RootState = ReturnType<typeof rootReducer>;
// const store: Store<RootState, UserAction | AuthAction> = configureStore({ rootReducer });

const store: Store<StateUsersAuth> = configureStore({ reducer });

const StoreWrapper = ({children}: React.PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>
} 

export default StoreWrapper
