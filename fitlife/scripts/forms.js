

const form = document.getElementsByTagName("form")[0]

function handleSubmit (event){
    const rep = 5;
    event.preventDefault();
    let arrayValues = [];
    for (var i = 0 ; i<rep;i++){
        arrayValues.push(form[i].value);
    }
}