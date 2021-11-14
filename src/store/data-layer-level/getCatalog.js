import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'

const BASE_URL = "http://127.0.0.1:5000"

export const GetCatalogApi = createApi({
    reducerPath: 'GetCatalogApi',
    tagTypes: ['Get'],  
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
      GetCatalog: builder.query({
        query: () => `/BooksAll`,
      }),
      GetBookForReading: builder.query({
        query: (fileName) => `Books?fileName=${fileName}`,
      }),
    }),
  }) 



export const { useGetCatalogQuery,useGetBookForReadingQuery, usePrefetch } = GetCatalogApi