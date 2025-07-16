

const headingEl = document.querySelector("h1");

const additionEl = document.getElementById("addition")
const additionsEl = document.getElementById("additions")

headingEl.addEventListener("click", function() {
    if (headingEl.innerHTML === "JavaScript") {
        headingEl.innerHTML = "is awesome";
    } else {
        headingEl.innerHTML = "JavaScript";
    }
});
addNumbers(6, 7)
function addNumbers(num1, num2){
    additionEl.innerHTML = num1 + num2

}
additionsEl.innerHTML = addNumber(18, 9)
function addNumber(num3, num4){
    return num3 + num4

}
const outputEl = document.getElementById("output")
const someVar = 100
someFunction ()

function someFunction(){
    outputEl.innerHTML = someVar

}

const buttonEl = document.getElementById("buttons");
const headingTextEl = document.getElementById("headingText");

function checkUserCreds(usernameEl, passwordEl) {
    const checkUserName = "Bond";
    const checkPassword = "7784";
    if (usernameEl === checkUserName && passwordEl === checkPassword) {
        headingTextEl.innerHTML = "Correct Log In";
    } else {
        headingTextEl.innerHTML = "Incorrect Password, Try again";
    }
}

function verifyUser() {
    const passwordEl = document.getElementById("passwordInput").value;
    const usernameEl = document.getElementById("usernameInput").value;
    checkUserCreds(usernameEl, passwordEl);
}

buttonEl.addEventListener("click", verifyUser);
