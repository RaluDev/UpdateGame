//parcurgerea array-ului de jocuri

getGamesList(function (arrayOfGames) {
    for (var i = 0; i < arrayOfGames.length; i++) {
        createDomElement(arrayOfGames[i]);
    }
});


//creare div pentru fiecare joc si adaugare in DOM

function createDomElement(gameObj) {
    var container1 = document.querySelector('.container');
    const gameELement = document.createElement("div");
    gameELement.innerHTML = `<h1>${gameObj.title}</h1> 
                        <img src="${gameObj.imageUrl}" />
                        <p>${gameObj.description}</p> 
                        <button class="delete-btn" id="${gameObj._id}">Delete Game</button>
                        <button class="update-btn" id="${gameObj._id}">Edit Game</button>`;


    container1.appendChild(gameELement);


    //update form display
    function displayForm() {
        const updateElement = document.createElement("Form");
        updateElement.id = "updateForm";
        updateElement.innerHTML = `<label for="gameTitle">Title *</label>
                                <input type="text" value="${gameObj.title}" name="gameTitle" id="gameTitle" />       
                                
                                <label for="gameDescription">Description</label>
                                <textarea name="gameDescription" id="gameDescription">${gameObj.description}</textarea>

                                <label for="gameImageUrl">Image URL *</label>
                                <input type="text" name="gameImageUrl" value="${gameObj.imageUrl}" id="gameImageUrl" />

                                <button class="updateBtn">Save Changes</button>
                                <button class="cancelBtn">Cancel</button>`;
        container1.appendChild(updateElement);

    
    }
   
  
    // displayForm();
 
  

    // display update form on button click 
  document.querySelectorAll('button.update-btn').forEach(btn => {
        btn.addEventListener('click', event => {
             displayForm();     
            console.log(event.target);
        })
    })




    // var btns = document.querySelectorAll('button.update-btn');
    //     btns.forEach(function(btn){ 
    //     btn.addEventListener('click', function(e){
    //          displayForm();     
    //         console.log(e.target);
    //     });
    // });





    //Delete game on pressing the delete button

    document.getElementById(`${gameObj._id}`).addEventListener("click", function (event) {
        deleteGame(event.target.getAttribute("id"), function (apiResponse) {
            console.log(apiResponse);
            removeDeletedElementFromDOM(event.target.parentElement);
        })
    });
}


function removeDeletedElementFromDOM(domElement) {
    domElement.remove();
}



//Validare

function validateFormElement(inputElement, errorMessage) {
    if (inputElement.value === "") {
        if (!document.querySelector('[rel="' + inputElement.id + '"]')) {
            buildErrorMessage(inputElement, errorMessage);
        }
    } else {
        if (document.querySelector('[rel="' + inputElement.id + '"]')) {
            console.log("the error is erased!");
            document.querySelector('[rel="' + inputElement.id + '"]').remove();
            inputElement.classList.remove("inputError");
        }
    }
}

function validateReleaseTimestampElement(inputElement, errorMessage) {
    if (isNaN(inputElement.value) && inputElement.value !== "") {
        buildErrorMessage(inputElement, errorMessage);
    }
}

function buildErrorMessage(inputEl, errosMsg) {
    inputEl.classList.add("inputError");
    const errorMsgElement = document.createElement("span");
    errorMsgElement.setAttribute("rel", inputEl.id);
    errorMsgElement.classList.add("errorMsg");
    errorMsgElement.innerHTML = errosMsg;
    inputEl.after(errorMsgElement);
}



//Creare joc la submit

document.querySelector(".submitBtn").addEventListener("click", function (event) {
    event.preventDefault();

    const gameTitle = document.getElementById("gameTitle");
    const gameDescription = document.getElementById("gameDescription");
    const gameGenre = document.getElementById("gameGenre");
    const gamePublisher = document.getElementById("gamePublisher");
    const gameImageUrl = document.getElementById("gameImageUrl");
    const gameRelease = document.getElementById("gameRelease");

    validateFormElement(gameTitle, "The title is required!");
    validateFormElement(gameGenre, "The genre is required!");
    validateFormElement(gameImageUrl, "The image URL is required!");
    validateFormElement(gameRelease, "The release date is required!");

    validateReleaseTimestampElement(gameRelease, "The release date you provided is not a valid timestamp!");

    if (gameTitle.value !== "" && gameGenre.value !== "" && gameImageUrl.value !== "" && gameRelease.value !== "") {
        var urlencoded = new URLSearchParams();
        urlencoded.append("title", gameTitle.value);
        urlencoded.append("releaseDate", gameRelease.value);
        urlencoded.append("genre", gameGenre.value);
        urlencoded.append("publisher", gamePublisher.value);
        urlencoded.append("imageUrl", gameImageUrl.value);
        urlencoded.append("description", gameDescription.value);

        createGameRequest(urlencoded, createDomElement);
    }
})



