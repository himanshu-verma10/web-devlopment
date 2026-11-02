// Promises are a way to handle asynchronous operations in NodeJS, 
//providing a cleaner and more readable approach compared to callbacks.
// Three states in Promises:- Pending ,completed ,rejected

const promise= new Promise((resolve,reject)=>{  //Promise -class callback func : resolve,reject
   setTimeout(()=>{
     const success= true; //default
     if (success){ resolve ("Data Reviews")}

    else{
     reject(new error("Thand le al"));
    }},500);   
});

promise.then((msg)=>{
    console.log(msg);  
})

 .catch((err)=>{
    console.log(err);
})

 .finally(( )=>{
    console.log("alldone");
});