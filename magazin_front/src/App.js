import React from 'react';
import {products} from './data';
import Header from './components/header/header';
import DropMenu from './components/drop-down-menu/drop-down-menu';
import Slider from './components/slider/slider';
import Advertising from './components/advertising/advertising';
import ProductList from './components/products-list/products-list';
import ProductDetail from './components/product-details/product-details';
import ProductCart from './components/cart/cart';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signUp/SignUp';
import HomePage from './components/homePage/homePage';
import Cart from './components/cart/cart';
import Profile from './components/profile/profile';
import Footer from './components/footer/footer';
import {ProviderToCart} from './components/context/context';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {

  return (

    <BrowserRouter>
    <div >
      <Header/>
      <div className="container">
        <DropMenu/>
        <Route exact path= "/" component={HomePage}/>
        <Route path="/products/:id" component={ProductDetail}/>
        <Route path="/productcart" component={ProductCart}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/profile" component={Profile}/>
      </div>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
