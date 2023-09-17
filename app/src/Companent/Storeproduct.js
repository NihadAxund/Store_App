import React, { useEffect } from 'react';
import Product from './Product';
import { useSelector, useDispatch } from "react-redux";

function Storeproduct() {
 //const [books, setBooks] = useImmer([]);
  const value = useSelector((state) => state.books.value);
  const dispatch=useDispatch();


  function List(){
    return value.map((item) => {
      if (item != null) {
        alert("a")
        return <Product product={item} />;
      }
    });
  }

  // useEffect(() => {
  //   async function fetchMyAPI(){
      
  //     const data  = await GetBookData();
  //     setBooks(data);
  //     console.log(data);

  //   }
  //   fetchMyAPI()
  
  // }, []);

  

  return (
    
    <div className='Book-List'>
      <h1>A</h1>
    </div>
  );
}

export default Storeproduct;
