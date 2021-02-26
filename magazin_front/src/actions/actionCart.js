const Addtocart = (productId) => async(dispatch)=>{
    
 await fetch (`http://localhost:5000/products/${productId}`)
 .then(res=> res.json())
 .then((data)=> dispatch({type : 'ADD_TO_CART', payload : data}));
 
}

const DeleteFromCart = (ProductId) => (dispatch)=>{
 dispatch({type : 'DELETE_FROM_CART' , payload : ProductId})
}

const ReduceFromCart = (productId) => async(dispatch)=>{
    await fetch (`http://localhost:5000/products/${productId}`)
    .then(res=> res.json())
    .then((data)=> dispatch({type : 'REDUCE_FROM_CART', payload : data}))
}

export {Addtocart, DeleteFromCart, ReduceFromCart };