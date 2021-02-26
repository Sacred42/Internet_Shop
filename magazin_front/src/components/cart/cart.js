import React from 'react';
import {Addtocart, DeleteFromCart, ReduceFromCart} from '../../actions/actionCart' ;
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CartC extends React.Component{
   
    render(){
         const {cartItems, loading, error} = this.props;
         console.log(cartItems);
         if (cartItems.length === 0 ){
             return(
                <div>Cart is empty!</div>
             )    
         }
        return(
            <div>
                {cartItems.map((elem)=>{
                    return(
                     <span className="cart_items">
                         <img className="img_product_detail" src={elem.image}/>
                         <div className="cart_item">{elem.title}</div>
                         <div className="cart_item">{elem.price}</div>
                         <Link className="cart_item" to="/productcart" onClick={()=>this.props.Addtocart(elem._id)}>+</Link>
                         <Link className="cart_item" to="/productcart" onClick={()=>this.props.ReduceFromCart(elem._id)}>-</Link>
                         <Link className="cart_item" to="/productcart" onClick={()=>this.props.DeleteFromCart(elem._id)}>delete</Link>

                     </span>
                    ) 
                })}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        Addtocart : (elem)=> dispatch(Addtocart(elem)),
        DeleteFromCart : (elem)=> dispatch(DeleteFromCart(elem)),
        ReduceFromCart : (elem)=> dispatch(ReduceFromCart(elem))

    }
}

const mapStateToProps =({ProductCart : {cartItems}}) =>{
    
    return {
        cartItems
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartC);