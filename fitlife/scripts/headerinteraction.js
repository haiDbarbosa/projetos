
const menuButton = document.getElementsByClassName("menu")[0]
const aside = document.getElementsByTagName("aside")[0]
const background = document.getElementsByClassName("background")[0]
const botao = document.getElementsByTagName("a")[6]
const botao1 = document.getElementsByTagName("a")[7]
const botao2 = document.getElementsByTagName("a")[8]
const botao3 = document.getElementsByTagName("a")[9]
const botao4 = document.getElementsByTagName("a")[10]
const botao5 = document.getElementsByTagName("a")[11]

let showmenu = false;

menuButton.addEventListener("click" , () => {
    handleChange();
})

background.addEventListener("click" , () => {
    handleChange();
})

botao.addEventListener("click" , () => {
    handleChange();
})

botao1.addEventListener("click" , () => {
    handleChange();
})

botao2.addEventListener("click" , () => {
    handleChange();
})

botao3.addEventListener("click" , () => {
    handleChange();
})

botao4.addEventListener("click" , () => {
    handleChange();
})

botao5.addEventListener("click" , () => {
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