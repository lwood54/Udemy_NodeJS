var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Logan'
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
};

var printUserInfo = function (user) {
    console.log(user);
    console.log("ID: ", user.id);
    console.log("Name: ", user.name);
};

// function printUserInfo(user) {
//     console.log(user);
//     console.log("ID: ", user.id);
//     console.log("Name: ", user.name);
// }


// I actually think this is the coolest way because you can have a separate
// function, and use it as an argument, and the data being pulled
// by running the getUser() function automatically gets put in that function
// I mean, clearly it does that for all of these scenarios, but this seems
// the cleanest to me.
getUser(54, printUserInfo);
// callback function is meant to receive, so putting printUserInfo()
// wouldu make it execute immediately and crash

// he did it this way
getUser(31, (userObject) => {
    console.log(userObject);
});

// I think you could also do this:
getUser(67, userObject => console.log(userObject));
