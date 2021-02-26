function ProductsDetailsReducer (state = {product : {}}, action) {

    switch(action.type){
        case 'REQUEST_DETAILS':
            return{
                product : {},
                loading : true,
                error : null
            };
        case 'REQUEST_DETAILS_SUCCESS':
            return{
                product: action.payload,
                loading: false,
                error: null
            };
        case 'REQUEST_DETAILS_ERROR':
            return{
                product: {},
                loading: false,
                error: action.payload
            };
        default :
          return state;    
    }
 }

 export {ProductsDetailsReducer};