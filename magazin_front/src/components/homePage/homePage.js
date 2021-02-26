import React from 'react';
import ProductList from '../products-list/products-list';
import Advertising from '../advertising/advertising';
import Slider from '../slider/slider';

const HomePage = () =>{
    return(
        <div>
        <Advertising/>
        <Slider/>
        <ProductList/>
        </div>
    )
}

export default HomePage;