import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://data.aykhan.net/data/general/';

function FetchData() {
    return fetch('https://data.aykhan.net/data/general/books.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('HTTP error');
        }
      })
      .then((data) => {
 
        return data;
      })
      .catch((error) => {
     
        throw error;
      });
  }
  
  export const GetBookData = async () => {
    try {
      const data1 = await FetchData();
      console.log(data1);
      return data1;
    } catch (error) {

      throw error;
    }
  };
  

export const bookApi = createApi({
    reducerPath: 'productApi',
    baseQuery: async () => {
        try {
            const response = await fetch(`${BASE_URL}books.json`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error(`Error fetching data: ${error.message}`);
        }
    },
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => 'books.json',
        }),
    }),
});

export const { GetBooksQuery } = bookApi;