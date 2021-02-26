
const updateProduct = (item = {}, product) =>{
 const {
     _id = product._id,
     image = product.image,
     count = 0,
     title = product.title,
     price = 0
 } = item;

 return {
    _id,
    image,
    title,
    count: count + 1,
    price: price + 1* product.price
  };
}

const delFromCart = (state , index) =>{
    return[
        ...state.slice(0 , index),
        ...state.slice(index + 1)
    ]
}

const reduceFromCart = (item , REDitem)=>{

    return{
        _id :item._id,
        image : item.image,
        title : item.title,
        price : item.price - 1*REDitem.price
    }
}



const addProduct = (ind, state, item) =>{
    if (item.count === 0) {
        return [
          ...state.slice(0, ind),
          ...state.slice(ind + 1)
        ];
      }

    if(ind === -1){
        return [
            ...state ,
            item
        ]
    }
    return [
        ...state.slice(0 , ind),
        item,
        ...state.slice(ind + 1)
    ]
}

const ProductCart  = (state = {cartItems : []}, action) =>{
    const {cartItems} = state;
    switch(action.type){
        case 'ADD_TO_CART' : 
        console.log(cartItems);
        const product = action.payload;
        console.log(product);
        const IndexItem = cartItems.findIndex((elem)=>elem._id === product._id); // нахождение индекса для вставки продукта в корзину а так же нахождение товара в самой корзине для дальнейшей работы
        console.log(IndexItem); 
        const item = cartItems[IndexItem];
        const NewItem = updateProduct(item , product);
        return{
            orderTotal : 0,
            cartItems : addProduct(IndexItem, cartItems, NewItem )
        };
    case 'DELETE_FROM_CART' : 
    const DELproduct = action.payload;
    const DELIndexItem = cartItems.findIndex((elem)=>elem._id === DELproduct);
    return{
     orderTotal : 0,
     cartItems : delFromCart(cartItems, DELIndexItem)
    }
    case 'REDUCE_FROM_CART' :
    const REDproduct = action.payload;
    const REDindexItem = cartItems.findIndex((elem)=>elem._id === REDproduct._id);
    const REDitem = cartItems[REDindexItem];
    const REDnewItem = reduceFromCart(REDitem, REDproduct, REDindexItem, cartItems) ;
    if(REDnewItem.price <= 0){
        return{
            orderTotal : 0,
            cartItems : delFromCart(cartItems, REDindexItem)
        }
    }
    else{
        return{
            orderTotal : 0,
            cartItems : addProduct(REDindexItem, cartItems, REDnewItem)
        } 
    }
   


        default :
        return state
    }
    
}

export {ProductCart};