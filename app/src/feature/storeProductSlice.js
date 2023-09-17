import {createSlice} from '@reduxjs/toolkit'
import { GetBooksQuery,GetBookData } from '../services/book';
import Favorite from '../Companent/Favorite';
import Cookies from 'js-cookie';

const initialState = {
    value: await GetBookData(),
    FovariteList:getcook()

};

function getcook(){
    const fovariteListCookie = Cookies.get('FovariteList');
    if(fovariteListCookie==null){
        return[]

    }
    else{
        const parsedFovariteList = JSON.parse(fovariteListCookie);
        console.log(parsedFovariteList);
        return parsedFovariteList;

    }
}


export const bookSlice= createSlice({
    name:'books',
    initialState,
    reducers:{
        allBooks:(state)=>{
            return state.value;
        },
        AddFovarite:(state,action)=>{
            const newFavorite = action.payload;
            state.FovariteList = [...state.FovariteList, newFavorite];
            
            // Log the updated FovariteList and the newFavorite object
            console.log("Updated FovariteList:", state.FovariteList);
            console.log("New Favorite Object:", newFavorite);
            
            // Set the "FovariteList" cookie with the updated array
            Cookies.set('FovariteList', JSON.stringify(state.FovariteList));

            // Read and log the "FovariteList" cookie
            const fovariteListCookie = Cookies.get('FovariteList');
            const parsedFovariteList = JSON.parse(fovariteListCookie);
            
            // Log the parsedFovariteList
            console.log("Parsed FovariteList Cookie:", parsedFovariteList);
        },
        DeleteFovarite: (state, action) => {
            const favoriteToDelete = action.payload;
      
            state.FovariteList = state.FovariteList.filter(
                (favorite) => favorite.id === favoriteToDelete
              );
            // Update the "FovariteList" cookie with the updated array
            Cookies.set('FovariteList', JSON.stringify(state.FovariteList));
          },

    }
})



export const {allBooks,AddFovarite,DeleteFovarite} = bookSlice.actions;
export default bookSlice.reducer
