var registerButton = document.querySelector(".register-button");
var registerClose = document.querySelector(".register-popup-close");
var registerPopup = document.querySelector(".popup-container");

registerButton.addEventListener("click", function(evt){
	evt.preventDefault();
    registerPopup.classList.add("register-popup-show");

});
registerClose.addEventListener("click", function(evt){
    evt.preventDefault();
    registerPopup.classList.remove("register-popup-show");
});