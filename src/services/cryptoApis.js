import { createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '07bbb27456mshcb52d9c96938a9cp1f4525jsn60f67f2e53c2'
} 

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetail: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timeperiod}) => createRequest(`/coin/${coinId}/history/${timeperiod}`),
        })
    })
});

export const{ useGetCryptosQuery, useGetCryptoDetailQuery, useGetCryptoHistoryQuery } = cryptoApi;