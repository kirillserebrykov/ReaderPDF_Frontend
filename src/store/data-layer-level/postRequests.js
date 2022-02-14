import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "http://127.0.0.1:5000";

const MetaDataHandler = Data => {
	if (!Data) return "Неизвeстно";
	return Data;
};

export const postRequestsAPI = createApi({
	reducerPath: "postRequestsAPI",
	tagTypes: ["Post"],
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: builder => ({
		UploadFile: builder.mutation({
			query: body => ({
				url: `/UploadFile?author=${MetaDataHandler(body.Author)}&description=${MetaDataHandler(
					body.Description
				)}&page=0`,
				method: "POST",
				body: body.formDataPDfFile,
			}),
		}),
	}),
});

export const { useUploadFileMutation, usePrefetch } = postRequestsAPI;
