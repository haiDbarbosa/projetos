
const menuButton = document.getElementsByClassName("menu")[0]
const aside = document.getElementsByTagName("aside")[0]
const background = document.getElementsByClassName("background")[0]

let showmenu = false;

menuButton.addEventListener("click" , () => {
    handleChange();
})

background.addEventListener("click" , () => {
    handleChange();
})

function handleChange(){
    if (showmenu){
        aside.style.translate = "-280px";
        aside.style.transition = "300ms"
        background.style.display = "none";
        showmenu = false;
    } else{ 
        aside.style.translate = "0";
        aside.style.transition = "300ms"
        background.style.display = "flex";
        showmenu = true;
    }
}