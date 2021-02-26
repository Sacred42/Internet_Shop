
const BooksRequest =  () => async (dispatch)=>{
    try{
        dispatch({type : 'REQUEST_BOOKS'});
        await fetch('http://localhost:5000/products')
         .then(res=> res.json())
         .then((data)=>{
             dispatch(BooksSuccess(data))
         })
    }
    catch(error){
        dispatch(BooksError(error))
    }
    
}

const BooksSuccess = (books) => (dispatch)=>{
    dispatch({type : 'REQUEST_SUCCESS' , payload : books});
}

const BooksError = (error) => (dispatch) =>{
    dispatch({type : 'REQUEST_FAILURE' , payload : error})
}

const ProductDetails = (id) => async(dispatch) =>{
   try {
        dispatch({type: 'REQUEST_DETAILS'});
        await fetch (`http://localhost:5000/products/${id}`)
        .then(res=> res.json())
        .then((data)=>{dispatch(ProductDetailsSuccess(data))});
}
catch (error){
    dispatch(ProductDetailsError(error))
  }
}

const ProductDetailsSuccess = (book) => (dispatch)=>{
    dispatch({type: 'REQUEST_DETAILS_SUCCESS' , payload: book});
}

const ProductDetailsError = (error) => (dispatch) =>{
    dispatch({type: 'REQUEST_DETAILS_ERROR' , payload: error});
}

export {BooksRequest , ProductDetails };