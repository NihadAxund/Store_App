import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { StoreProductApi } from './services/storeproduct'
import bookReducer from '../src/features/storeProductSlice'

export const store = configureStore({
  reducer: {
    [StoreProductApi.reducerPath]: StoreProductApi.reducer,
    books:bookReducer
  },


  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(StoreProductApi.middleware),
})



setupListeners(store.dispatch)