import { configureStore } from "@reduxjs/toolkit";
import selectSlice from "./selectSlice";
import uploadDocSlice from "./uploadDocSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { getRequestsAPI } from "./data-layer-level/getRequests";
import { postRequestsAPI } from "./data-layer-level/postRequests";
import { deleteRequestsAPI } from "./data-layer-level/deleteRequests";

export const store = configureStore({
	reducer: {
		uploadDocSlice: uploadDocSlice,
		selectState: selectSlice,
		[getRequestsAPI.reducerPath]: getRequestsAPI.reducer,
		[postRequestsAPI.reducerPath]: postRequestsAPI.reducer,
		[deleteRequestsAPI.reducerPath]: deleteRequestsAPI.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(getRequestsAPI.middleware, postRequestsAPI.middleware, deleteRequestsAPI.middleware),
});

setupListeners(store.dispatch);
