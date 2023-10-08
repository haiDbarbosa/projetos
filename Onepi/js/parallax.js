const bg = document.querySelectorAll (".image")
const logo = document.querySelectorAll (".logo")

document.addEventListener('mousemove', parallax)

function parallax(e){
    document.querySelectorAll('.image')
    .forEach(layer =>{
        const speed = layer.getAttribute('data-speed')
        
        const x = (window.innerHeight - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/250

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
})
    document.querySelectorAll('.logo')
    .forEach(layer =>{
        const speed = layer.getAttribute('data-speed')
    
        const x = (window.innerHeight - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/100

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
})
}