import React from 'react'
import { allBooks,AddFovarite,DeleteFovarite } from "../features/bookSlice";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Product({ product }) {
    const dispatch = useDispatch();
    const value1 = useSelector((state) => state.books.FovariteList);
    function FavClick(e) {
        e.preventDefault();

        console.log(e.target.Tag);
        if ( e.target.Tag=="True") {
            e.target.style.backgroundColor = "red";
            e.target.Tag="False"
            dispatch(DeleteFovarite(product));

        
            
        }
        else{
            e.target.style.backgroundColor = "blue";
            e.target.Tag="True"
            dispatch(AddFovarite(product));
        }
      }

      function CheckFav(){
        for (let index = 0; index < value1.length; index++) {
            if(value1[index].Id==product.Id){
                return true;
            }
            
        }
        return false;
      }



    if(CheckFav()){
        return (
            <section className='product'>
                <section className='product_src'>
                    <section>
                        <button onClick={FavClick} Tag="True" style={{backgroundColor:"blue"}}>
                        </button>
                    </section>
                    <img src={product.CoverUrl}></img>
                </section>
                <section className='productName'>
                    {product.Title}
                </section>
                
                <span>
                    {product.Publisher}
                </span>
                <section className='ProductPrice'>
                </section>
    
    
            </section>
        )
    }
    else{
        return (
            <section className='product'>
                <section className='product_src'>
                    <section>
                        <button onClick={FavClick} style={{backgroundColor:"red"}} Tag="False">

                        </button>
                    </section>
                    <img src={product.CoverUrl}></img>
                </section>
                <section className='productName'>
                    {product.Title}
                </section>
                <Link className='spanLink' to="/DetalUser">
                    {product.Publisher}
                </Link>
                <section className='ProductPrice'>
                </section>
    
    
            </section>
        )
    }
}
