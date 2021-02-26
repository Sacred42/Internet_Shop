const LoopObj = (response) =>{
let result = "";
for(let i in response){
    result = response[i]
 }
 return result;
}

export {LoopObj};