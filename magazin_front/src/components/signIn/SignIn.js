import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Requst} from '../../ReqResFunction/request';
import {register, checkToken} from '../../actions/actionUser';
import './signIn.css';

const SignIn = (props) => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const useRegister = useSelector(state => state.UserRegisterReducer);
    const {loading, error, userInfo} = useRegister;
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(userInfo){
        dispatch(checkToken(props.match.path));
        props.history.push("/profile");
        }
        return ()=>{

        }
     }, [])
    

    const submitHandler = () => {
        
        dispatch(register( email, password));
      }

    return (
        <ul className="content">
          
            <li> 
            <div>Email</div>
            <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
            </li>
            <li>
            <div>Password</div>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
            </li>
            <li>
            <button type="submit" id="pas" onClick={submitHandler}>SignUp</button>
            </li>
            <li>
             {loading && <div>Loading...</div>}
             {error && <div>{error}</div>}
             </li>
            
            
        </ul>
        
    )
}

export default SignIn;