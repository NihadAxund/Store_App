import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:3000/products';

function FetchData() {
    return fetch('http://localhost:3000/products')
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
      console.log("a"+data1);
      return data1;
    } catch (error) {

      throw error;
    }
};
  

export const StoreProductApi = createApi({
    reducerPath: 'productApi',
    baseQuery: async () => {
        try {
            const response = await fetch(`${BASE_URL}`);

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
            query: () => 'products.json',
        }),
    }),
});

export const { GetBooksQuery } = StoreProductApi;


