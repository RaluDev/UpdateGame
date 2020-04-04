var apiURL = "https://games-world.herokuapp.com";

//Get the list of games

function getGamesList(callbackFunction){
    fetch(apiURL + "/games", {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(function(response){
        return response.json();
    }).then(function(arrayOfGames){
        callbackFunction(arrayOfGames);
    });
}


//Delete game
function deleteGame(gameID, callbackFunction) {
    fetch(apiURL + "/games/" + gameID, {
        method: "DELETE"
    }).then(function(r){
        return r.text();
    }).then(function(apiresponse){
        callbackFunction(apiresponse);
    });

}

//Create game request
function createGameRequest(gameObject, callbackCreateGame){
    fetch(apiURL + "/games", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: gameObject
    }).then(function(response){
        return response.json();
    }).then(function(createdGame){
        console.log(createdGame);
        callbackCreateGame(createdGame);
    });
}


//Update game
function updateGameRequest(updatedGameObj, callbackCreateGame){
    fetch(apiURL + "/games", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: gameObject
    }).then(function(response){
        return response.json();
    }).then(function(updatedGame){
        console.log(updatedGame);
        callbackCreateGame(updatedGame);
    });
}


// "application/json"
// {"cheie": "valoare", "cheie2": "valoare2"}

//application/x-www-form-urlencoded
// cheie=valoare&cheie2=valoare2