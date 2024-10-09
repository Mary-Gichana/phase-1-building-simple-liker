// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const heartButton = document.querySelector(".heart");
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");
  heartButton.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (heartButton.textContent === EMPTY_HEART) {
          heartButton.textContent = FULL_HEART;
          heartButton.classList.add("activated-heart");
        } else {
          heartButton.textContent = EMPTY_HEART;
          heartButton.classList.remove("activated-heart");
        }
      })
      .catch((error) => {
        modalMessage.textContent = error;
        modal.classList.remove("hidden");

        setTimeout(() => {
          modal.classList.add("hidden");
        }, 3000);
      });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
