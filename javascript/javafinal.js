    document.getElementById("miFormulario").addEventListener("submit", function (event) {
            event.preventDefault(); // Evita que la página se recargue al enviar el formulario

            // Obtener los valores del formulario
            var nombre = document.getElementById("nombre").value;
            var email = document.getElementById("email").value;
            var numero= document.getElementById("numero").value;

            // Realizar alguna acción con los datos (en este caso, mostrarlos en la página)
            var resultado = "Nombre: " + nombre + "<br>Correo electrónico: " + email;
            document.getElementById("resultado").innerHTML = resultado;
        });