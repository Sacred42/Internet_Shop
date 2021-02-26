
function ProductsReducer (state = {products : []} , action) {
  
 switch (action.type){
     case 'REQUEST_BOOKS' :
     return{
         products : [],
         loading : true,
         error : null
     };
     case 'REQUEST_SUCCESS' : 
     return {
        products : action.payload,
        loading : false,
        error : null
     };
     case 'REQUEST_FAILURE' : 
     return {
        products : [],
        loading : false,
        error : action.payload
     };
     default :
     return state;
  }
};



export { ProductsReducer};