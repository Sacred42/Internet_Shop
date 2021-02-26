import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {auth} from '../../actions/actionUser';
import {Requst} from '../../ReqResFunction/request';
import './signUp.css';

const SignUp = (props)=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userAuth = useSelector(state => state.UserAuthReducer);
    const {loading, error, userInfo} = userAuth;
    const dispatch = useDispatch();

    const submitHandler = () =>{
     dispatch(auth(email , password))
    }

    
    return(
        <ul className="content">
          
        <li> 
        <div>Email</div>
        <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} ></input>
        </li>
        <li>
        <div>Password</div>
        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} ></input>
        </li>
        <li>
        <button type="submit" id="pas" onClick={submitHandler} >SignIn</button>
        </li>
        <li>
         {loading && <div>Loading...</div>}
         {error && <div>{error}</div>}
         </li>
        {/* <Alert/> */}
        
    </ul>
    )
}

export default SignUp;