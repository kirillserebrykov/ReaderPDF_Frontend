import { configureStore } from '@reduxjs/toolkit'
import selectSlice from './selectSlice'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { getRequestsAPI } from './data-layer-level/getRequests'
export const store = configureStore({
  reducer: {
    selectState : selectSlice,
    [getRequestsAPI.reducerPath]: getRequestsAPI.reducer,
   },
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(getRequestsAPI.middleware),
})

setupListeners(store.dispatch)