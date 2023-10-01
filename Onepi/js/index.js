
const button = document.querySelectorAll (".button");
const char = document.querySelectorAll (".character")


button.forEach((button, i)=> {
    button.addEventListener("click", () => {

        deselectButton();
        deselectChar();

        button.classList.add("selected");
        char[i].classList.add("selected")
    });
});

function deselectChar() {
    const selectedChar = document.querySelector(".character.selected");
    selectedChar.classList.remove("selected");
}

function deselectButton() {
    const selectedButton = document.querySelector(".button.selected");
    selectedButton.classList.remove("selected");
}
