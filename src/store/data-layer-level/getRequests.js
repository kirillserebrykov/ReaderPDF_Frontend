import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
const BASE_URL = "http://127.0.0.1:5000"

export const getRequestsAPI = createApi({
    reducerPath: 'getRequestsAPI',
    tagTypes: ['Get'],  
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
      GetCatalog: builder.query({
        query: () => `/BooksAll`,
      }),
      GetBookForReading: builder.query({
        query: (fileName) => `BooksForRead?fileName=${fileName}`,
      }),
      GetBookInfo: builder.query({
        query: (fileName) => `BookInfo?fileName=${fileName}`,
      }),
    }),
  }) 



export const { useGetCatalogQuery,useGetBookForReadingQuery,useGetBookInfoQuery, usePrefetch } = getRequestsAPI