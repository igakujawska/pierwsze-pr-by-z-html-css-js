const ul = document.querySelector("#task-list");
const input = document.querySelector("#task-input");
const button = document.querySelector("#add-button");
const emotes = ["🍄", "🌿", "✨", "☕", "🧿", "🌙"];

button.addEventListener("click", () => {
    const taskText = input.value;

    if (taskText === "") {
        return; //zabezpieczxenie do pustych tasków, aby ich nie dodawać
    } 

    const newLi = document.createElement("li");
    const randomEmote = emotes[Math.floor(Math.random() * emotes.length)];
    const textSpan = document.createElement("span");
    textSpan.innerText = randomEmote + " " + taskText;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.classList.add("delete-btn");

    textSpan.addEventListener("click", () => {
        textSpan.classList.toggle("crossed")});

    deleteBtn.addEventListener("click", () => {
        newLi.remove()});

    newLi.appendChild(textSpan);
    newLi.appendChild(deleteBtn);
    ul.appendChild(newLi);
    input.value = "";
});