// var obj = [
//     {
//         name: 'Person One'
//     },
//     {
//         name: 'Person Two'
//     }
// ];
// // console.log(obj);

// var jsonObj = [
//     {
//         "name": "person1"
//     },
//     {
//         "name": "person2"
//     }
// ]
// // console.log(jsonObj);

// var obj2 = JSON.stringify(obj);

// // console.log(obj2);


// var newUser = {
//     name: "persons name",
//     username: "username",
//     password: "password",
//     email: "email"
// }

// newUser = JSON.stringify(newUser);
// // send to the database

// var newUser2 = JSON.parse(newUser);


//  ----- PURE JS ------

var data;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){

    // readyState
    //     0 - request was not initialized
    //     1 - server connection established
    //     2 - request recieved
    //     3 - processing request
    //     4 - request has finisehd and the data/responese is ready


    // Status
    //     200 - OK
    //     403 - Forbidden / need to log in
    //     404 - not found

    if(this.status == 403){
        console.log('Forbidden, cant access information');
        return;
    } else if(this.status == 404){
        console.log('ERROR, file not found');
        return;
    };

    if(this.status == 200 && this.readyState == 4) {
        // console.log(this.responseText);
        data = JSON.parse(this.responseText);
        makeChart(data);
        // return data;
    };

};

// xhttp.open(typeOfConnection, URL, a-syncronous or syncronous (boolean));
xhttp.open('GET', 'js/MOCK_DATA.json', false);
xhttp.send();

function makeChart(data){
    console.log(data)
    var myArray = [
        ['']
    ]

    for (let i = 0; i < 20; i++) {
        console.log(data[i])
    }
        
    
}
// $.ajax({
//     type: "GET",
//     url: "data/data.json",
//     dataType: "json",
//     success: function(dataFromJSON){
//         console.log(dataFromJSON);
//     },
//     error: function(error){
//         console.log(error);
//         console.log('something went wrong with the connection');
//     }
// })