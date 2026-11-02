//function  getuser(id,cb){ //callback function
   //setTimeout(()=>{
   // cb({id,name:"superman"})
   //},5000);
//}; 
//console.log(`start`);
//getuser(1,((user)=>{
//    console.log(user);
    
//}));
//console.log(`end`);

function  getuser(id,cb){
    if(id<=0){
        cb("id lower than 0",null);
    } else{
        setTimeout(()=>{
        cb(null,{id,name:"spiderman"});
        },500);
    }
}
getuser(1,(err,user)=>{
       if(err){
        console.log(err);
       }
       else{
        console.log(user);     
       }
});

