import react from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logout , checkToken} from '../../actions/actionUser';





const Header = () =>{
  const {userInfo} = useSelector(state => state.UserRegisterReducer);
  const dispatch = useDispatch();
    return (
      <header>
      <div className="logo" ><Link  to="/" onClick={()=>dispatch(checkToken("/"))}>First Magazine</Link></div>
      {userInfo ? <ul className="links-header">
        
        <li><Link to="/productcart">Cart</Link></li>
        <li><Link>Profile</Link></li>
        <li><Link onClick={()=>dispatch(logout())}>Logout</Link></li>
        <li>{userInfo}</li>
        </ul> : 
        <ul className="links-header">
        <li><Link to="/productcart">Cart</Link></li>
        <li><Link to="/signin">Sign in</Link></li>
        <li><Link to="/signup">Sign up</Link></li>
        
      </ul>}
      
    </header>
    
    )
}

export default Header;