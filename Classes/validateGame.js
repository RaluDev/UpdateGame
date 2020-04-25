// function myGame(title, releaseDate, genre, publisher, imageUrl, description) {
//   this.title = title;
//   this.releaseDate = releaseDate;
//   this.genre = genre;
//   this.publisher = publisher;
//   this.imageUrl = imageUrl;
//   this.description = description;
// }


// myGame.prototype.validateFormElement = function(inputElement, errorMessage) {
//     if (inputElement.value === "") {
//         if (!document.querySelector('[rel="' + inputElement.id + '"]')) {
//             this.buildErrorMessage(inputElement, errorMessage);
//         }
//     } else {
//         if (document.querySelector('[rel="' + inputElement.id + '"]')) {
//             console.log("the error is erased!");
//             document.querySelector('[rel="' + inputElement.id + '"]').remove();
//             inputElement.classList.remove("inputError");
//         }
//     }
// }


// myGame.prototype.validateReleaseTimestampElement = function (inputElement, errorMessage) {
//     if (isNaN(inputElement.value) && inputElement.value !== "") {
//         this.buildErrorMessage(inputElement, errorMessage);
//     }
// }

// myGame.prototype.buildErrorMessage = function (inputEl, errosMsg) {
//     inputEl.classList.add("inputError");
//     const errorMsgElement = document.createElement("span");
//     errorMsgElement.setAttribute("rel", inputEl.id);
//     errorMsgElement.classList.add("errorMsg");
//     errorMsgElement.innerHTML = errosMsg; 
//     inputEl.after(errorMsgElement);
// }

