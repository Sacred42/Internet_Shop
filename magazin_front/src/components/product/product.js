import React from 'react';
import { Link } from 'react-router-dom';
import {ConsumerToCart} from '../context/context';
import {Addtocart} from '../../actions/actionCart';
import {useDispatch} from 'react-redux';

const Product = ({elem}) =>{
    const dispatch = useDispatch();
    return          (<div>
                    <Link to={"/products/" + elem._id} ><img className="img_product" src={elem.image} /></Link>
                    <span>{elem.title}</span>
                    <div className = "price_product">{elem.price}$</div>
                    <Link to="/" onClick = {()=> dispatch(Addtocart(elem._id))}>добавить в корзину</Link>
                    </div>)
}

export default Product;