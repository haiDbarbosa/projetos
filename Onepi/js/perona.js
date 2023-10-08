    var peronaButton = document.getElementById('peronaButton');
    var peronaLaugh = document.getElementById('peronaLaugh');

    peronaButton.addEventListener('click', function () {
        if (peronaButton.classList.contains('selected')) {
            if (peronaLaugh.paused) {
                peronaLaugh.play();
            } else {
                peronaLaugh.pause();
            }
        }
    });