const bg = document.querySelectorAll (".image")

document.addEventListener('mousemove', parallax)

function parallax(e){
    document.querySelectorAll('.image')
    .forEach(layer =>{
        const speed = layer.getAttribute('data-speed')
        
        const x = (window.innerHeight - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/250

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
})
}
