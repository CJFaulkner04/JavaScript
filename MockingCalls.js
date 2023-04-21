
const user = [
    { id: 1, name: 'Joe', email: 'joe@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' },
    { id: 3, name: 'Jimmy', email: 'jimmy@example.com' },
];

function fetchUserById(userID){
    return new Promise(function(myResolve, myReject){
        setTimeout(function () {
            let check = false;
            for(let i = 0; i<user.length; i++){
                if(userID === user[i].id){
                    check = true;
                }
            } 

            if(check === true){
                myResolve(user);
            } else {
                myReject(new Error("User wtih ID " + userID + " doesn't exist"));
            }
        }, 1000);
    });
}

fetchUserById(1)
    .then((user1) => {
        console.log("User" , user[0].id + ':', user[0].name, user[0].email);
        return fetchUserById(2);
    })
    .then((user2) => {
        console.log("User" , user[1].id + ':', user[1].name, user[1].email);
    })
    .catch((error) => {
        console.error(error);
    });

