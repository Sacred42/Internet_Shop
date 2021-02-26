import {defineResponse} from './defineRespone';

const Requst = async(path) =>{
    console.log(path)
    const email =  document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const data = {
        email : email,
        password : password}
    await fetch(`http://localhost:5000${path}`, {
        method : 'POST',
        mode: 'cors',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(res=> res.json())
      .then((data)=>{localStorage.setItem('id_token' , data._id)
        localStorage.setItem('acces_token', data.token)})
      .catch((err)=>{
          console.log('this err' , err);
      })
}

export {Requst};