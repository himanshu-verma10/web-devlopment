//async Used to declare an asynchronous function that returns a Promise
//await always used in async function, there is no need of callback
function getuser(id) {
    const promise= new Promise((resolve,reject)=>{
    setTimeout(() => { 
        resolve({id,name: "Jit"});
    }, 500);
});
return promise;
} 

function getorder(userid) {
    const promise= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(["order1", "order2"]);
    }, 500);
});
return promise;
}

function getorderdetails(order) {
    const promise= new Promise((resolve,reject)=>{
    setTimeout(() => {
    // default programming practices error handling try catch
    //    resolve({ order, price: 499 });

    if(order==="order2")
    {
        resolve({ order, price: 499 });
    } else{
        reject(new Error("order not found"));
    }
    }, 500);

});
return promise;
}

async function main(){
    try{
    const user= await getuser(1);
    const order= await getorder(user.id);
    const orderdetails= await getorderdetails(order[1]);
    console.log(user.id);
    
    console.log();
    console.log();
    console.log();
     
    } 
    catch (err){
        console.log(err);
        
    }
       
}
main();

