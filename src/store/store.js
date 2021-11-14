import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { GetCatalogApi } from './data-layer-level/getCatalog'
export const store = configureStore({
  reducer: {
    appReducer : appReducer,
    [GetCatalogApi.reducerPath]: GetCatalogApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(GetCatalogApi.middleware),
})

setupListeners(store.dispatch)