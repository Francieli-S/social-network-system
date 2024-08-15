'use client';

import * as React from 'react';
import { Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer, { StateUsersAuth } from './reducers/reducer';

const store = configureStore({ reducer });

const StoreWrapper = ({children}: React.PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>
} 

export default StoreWrapper
