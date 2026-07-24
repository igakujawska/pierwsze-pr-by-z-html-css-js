const emailInput = document.querySelector("#email");
const button = document.querySelector("#send-button");
const validation = document.querySelector("#validation");
const form = document.querySelector("#form");
const sukces = document.querySelector("#sukces");

const checkEmail = (value) => {
    if (value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        button.disabled = false;
        validation.innerHTML = "jak najbardziej poprawny mości panie 😎";
        validation.classList.add("green");
        validation.classList.remove("red");
    } 
    else {
        button.disabled = true;
        validation.innerHTML = "Email chyba niepoprawny 😒";
        validation.classList.add("red");
        validation.classList.remove("green");
    }
}
emailInput.addEventListener("keyup", event => {
    let email = event.target.value; 
    checkEmail(email); 
}); 
button.addEventListener("click", () => {
    form.classList.add("hidden");
    sukces.classList.remove("hidden");
});