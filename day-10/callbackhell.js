// callbackhell is a continous iterations of callback function
function getuser(id, cb) {
    setTimeout(() => { 
        cb(null, {id: id,name: "Himanshu"});
    }, 500);
}

function getorder(userid, cb) {
    setTimeout(() => {
        cb(null, ["order1", "order2"]);
    }, 500);
}

function getorderdetails(order, cb) {
    setTimeout(() => {
        cb(null, { order, price: 499 });
    }, 500);
}

getuser(1, (err, user) => {
    if (err) {
        console.log(err);
    } else {
        getorder(user.id, (err, order) => {
            if (err) {
                console.log(err);
            } else {
                getorderdetails(order[0], (err, orderdetails) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(user.name);
                        console.log(order[0]);
                        console.log(orderdetails.price);
                    }
                }); // Closes getorderdetails callback
            }
        }); // Closes getorder callback
    }
}); // Closes getuser callback

