$.ajax({
    url: "http://www.omdbapi.com/?t=frozen&plot=full&apikey=trilogy",
    method: 'GET'
}).then(function (response) {
    console.log(response);
    console.log(response.Actors)
})

// fetch("http://www.omdbapi.com/?t=frozen&plot=full&apikey=trilogy")
// .then(response => response.json())
// .then(function(response){
//     console.log(response);
// })

// fetch("http://www.omdbapi.com/?t=the+godfather&apikey=trilogy")
// .then(response => response.json())
// .then(function(response){
//     console.log(response);
// })