const UserRegisterReducer = (state = {} , action) =>{
    switch(action.type){
        case 'USER_REGISTER_REQUEST':
          return {loading : true };
        case 'USER_REGISTER_SUCCESS':
          return {loading : false , userInfo : action.payload};
        case 'USER_REGISTER_ERROR':
            return{loading : false , error : action.payload};
        case 'USER_REGISTER_LOGOUT':
            return{userInfo : null}
        default : return state;
    }
}

const UserAuthReducer = (state = {} , action) =>{
  switch(action.type){
    case 'USER_AUTH_REQUEST':
      return{loading : true}
    case 'USER_AUTH_SUCCESS':
      return{loading : false, userInfo : action.payload}
    case 'USER_AUTH_ERROR':
      return{loading : false, error : action.payload}
    default : return state;
  }
}

export {UserRegisterReducer, UserAuthReducer};