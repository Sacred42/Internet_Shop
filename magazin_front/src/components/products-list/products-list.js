import React from 'react';
import Product from '../product/product';
import {BooksRequest } from '../../actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ProductList extends React.Component{

    componentDidMount(){
       this.props.BooksRequest();  
    }

     getDetailProduct = (id) =>{
        console.log(id);
    }
    
    
    render(){
        const {products, loading, error} = this.props;
        console.log(products);
       
        
        return loading? <div>...Loading</div>:
        error? <div>Error</div> :
        (
        <div>
            <ul className="products">
                {products.map((elem)=>{
                    return(
                        <li key = {elem._id} onClick={()=> this.getDetailProduct(elem._id)}>
                            <Product elem={elem} />
                        </li>
                    )
                })}
            </ul>
        </div>
        )
    }
}


const mapDispatchToProps = (dispatch) =>{
  return {
    BooksRequest : ()=> dispatch(BooksRequest())
  }
}

const mapStateToProps = ({ProductsReducer : {products}}) =>{
    return {products};
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);