
const defineResponse = (response) =>{
    let alert = document.getElementById('alert');
    alert.value = " ";
    if(response.type == 'success' || response.type == 'danger' ){
        console.log(response);
        console.log(response.type)
        response.body.forEach((error)=> alert.value += error + "/");
        // alert.value = response.body;
        alert.classList = `text-${response.type}`
    }
  
    return alert
}

export {defineResponse};


