const getUserName = function(userName) {
    console.log(userName);
}



const logUserName = function (callback) {
    callback('Tom')
}

logUserName(getUserName)