const expRegulares = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const formulario = document.getElementById('formulario-mail');
const campoInput = document.querySelector('#formulario-mail input');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario para hacer la validación

    const inputValue = campoInput.value; // Obtener el valor ingresado por el usuario
    
});


function validateEmail(inputValue) { 
    let isValid = expRegulares.test(inputValue);

    if(inputValue === ''){
        alert("El campo está vacio; por favor, ingrese un correo electronico valido");
        return;
    }


    if (isValid) {
        alert("Dir de correo: " + inputValue + " registrada; ¡Gracias por elegirnos!");
    } else {
        alert("El correo electrónico no es válido, por favor ingrese otro.");
    }
}





















