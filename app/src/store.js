import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { bookApi } from './services/storeproduct'
import bookReducer from '../src/features/storeProductSlice'

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    books:bookReducer
  },

  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
})



setupListeners(store.dispatch)