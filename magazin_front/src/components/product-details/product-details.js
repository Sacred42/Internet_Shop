import React from 'react';
import {useEffect , useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ProductDetails} from '../../actions/actions';

const ProductDetail = ({match}) =>{
    //  console.log(match.params.id)
   const Details = useSelector( state => state.ProductsDetailsReducer);
   const {product, loading, error} = Details;
   console.log(Details);
   const dispatch = useDispatch();

   useEffect(()=>{
       dispatch(ProductDetails(match.params.id));
       return ()=>{

       }
   } , [])
   console.log(product);
    return(
        <div>
            <img className="img_product_detail" src={product.image}/>
            <div>{product.title}</div>
            <div>{product.taste}</div>
            <div>{product.price}$</div>
        </div>
    )
}

export default ProductDetail;