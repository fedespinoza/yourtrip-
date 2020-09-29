var nombre = document.getElementById("nombre");
var mail = document.getElementById("email");
var error = document.getElementById("error");
error.style.color = 'black';

var form = document.getElementById('formulario');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    var mensajeError = [];

    if (nombre.value === null || nombre.value === '') {
        mensajeError.push('Ingrese su nombre');
    }
    if (mail.value === null || mail.value === '') {
        mensajeError.push('Ingrese su Email');
    }

    error.innerHTML = mensajeError.join(' <p></p> ');
    error.style.padding = '10px 0';
    error.style.fontSize = '12px';

    return false;
})

/*Agregué el evento keyup, y cuando escribe en el formulario de suscripcion en el input nombre, salen todos los datos por consola.*/

nombre.addEventListener('keyup', function (event) {
    console.log(event)
})

/*Agregué el evento focus, y cuando hace click en el formulario de suscripcion en el input nombre, sale un borde rojo.*/

nombre.addEventListener('focus', function (event) {
    nombre.style.border = '1px solid red';
})

/*Agregué el evento blur, y cuando hace click fuera del input nombre, vuelve al borde negro.*/
nombre.addEventListener('blur', function (event) {
    nombre.style.border = '1px solid black';
})

/*Agregué el evento keyup, y cuando escribe en el formulario de suscripcion en el input email, salen todos los datos por consola.*/
mail.addEventListener('keyup', function (event) {
    console.log(event)
})

/*Agregué el evento focus, y cuando hace click en el formulario de suscripcion en el input email, sale un borde rojo.*/
mail.addEventListener('focus', function (event) {
    mail.style.border = '1px solid red';
})

/*Agregué el evento blur, y cuando hace click fuera del input email, vuelve al borde negro.*/
mail.addEventListener('blur', function (event) {
    mail.style.border = '1px solid black';
})
