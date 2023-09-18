import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { StoreProductApi } from './services/storeproduct'
import productsReducer from '../src/features/storeProductSlice'

export const store = configureStore({
  reducer: {
    [StoreProductApi.reducerPath]: StoreProductApi.reducer,
    products:productsReducer
  },


  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(StoreProductApi.middleware),
})



setupListeners(store.dispatch)