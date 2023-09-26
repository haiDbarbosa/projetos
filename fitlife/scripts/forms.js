const form = document.getElementsByTagName("form")[0]



function handleSubmit(event) {
    event.preventDefault();
    const rep = 5;
    let arrayValues = [];
    let isValid = true

    for (var i = 0; i < rep; i++) {
        console.log(form[i].id);
        const errorField = document.getElementById(form[i].id + "-error");
        if (errorField) {
        errorField.textContent = "";
        }
        if (form[i].id === "name" && !form[i].value) {
            errorField.textContent = "O nome é obrigatório";
            isValid = false
        }
        if (form[i].id === "lastname" && !form[i].value) {
            errorField.textContent = "O sobrenome é obrigatório";
            isValid = false
        }
        if (form[i].id === "email") {
            const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailregex.test(form[i].value)) {
                errorField.textContent = "O e-mail deve ser válido";
                isValid = false
            }
        }
        if (form[i].id === "tel") {
            if (form[i].value.length !== 15) {
                errorField.textContent = "O telefone deve ter pelo menos 11 caracteres";
                isValid = false
            }
            if (!form[i].value) {
                errorField.textContent = "O telefone é obrigatório";
                isValid = false
            }
        }
        arrayValues.push(form[i].value);
    }
    if (isValid) {
        alert(arrayValues);
    }
}

function mascararTelefone(input) {
    // Remove todos os caracteres não numéricos da entrada
    const numeroLimpo = input.value.replace(/\D/g, '');

    // Formata o número de telefone
    let numeroFormatado = '';

    if (numeroLimpo.length > 0) {
        numeroFormatado += `(${numeroLimpo.substring(0, 2)}`;
    }
    if (numeroLimpo.length >= 3) {
        numeroFormatado += `)${numeroLimpo.substring(2, 3)}`;
    }
    if (numeroLimpo.length >= 4) {
        numeroFormatado += `-${numeroLimpo.substring(3, 7)}`;
    }
    if (numeroLimpo.length >= 8) {
        numeroFormatado += `-${numeroLimpo.substring(7, 11)}`;
    }

    // Atualiza o valor do input com a máscara aplicada
    input.value = numeroFormatado;
}