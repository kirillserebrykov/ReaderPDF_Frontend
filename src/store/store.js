import { configureStore } from '@reduxjs/toolkit'
import selectSlice from './selectSlice'
import uploadDocSlice from './uploadDocSlice'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { getRequestsAPI } from './data-layer-level/getRequests'
import { postRequestsAPI } from './data-layer-level/postRequests'

export const store = configureStore({
  reducer: {
    uploadDocSlice: uploadDocSlice,
    selectState : selectSlice,
    [getRequestsAPI.reducerPath]: getRequestsAPI.reducer,
    [postRequestsAPI.reducerPath]: postRequestsAPI.reducer,
   },
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware({
    serializableCheck: false
  }).concat(getRequestsAPI.middleware, postRequestsAPI.middleware)
})

setupListeners(store.dispatch)