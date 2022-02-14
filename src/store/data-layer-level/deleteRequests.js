import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://127.0.0.1:5000";

export const deleteRequestsAPI = createApi({
	reducerPath: "deleteRequestsAPI",

	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: ["Delete"],
	endpoints: builder => ({
		DeleteFile: builder.mutation({
			query: body => ({
				url: `/DeleteFiles`,
				method: "DELETE",
				body: JSON.stringify({ files: body }),
			}),
		}),
	}),
});

export const { useDeleteFileMutation } = deleteRequestsAPI;
