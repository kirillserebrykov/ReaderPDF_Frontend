import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { getRequestsAPI } from './data-layer-level/getRequests'
export const store = configureStore({
  reducer: {
    appReducer : appReducer,
    [getRequestsAPI.reducerPath]: getRequestsAPI.reducer,
   },
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(getRequestsAPI.middleware),
})

setupListeners(store.dispatch)