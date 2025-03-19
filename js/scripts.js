var todos_css = ["css/estilo.css", "css/estilo_oscuro.css", "css/estilo_sepia.css", "css/estilo_azul.css"];
        css_actual = 0;
        var css_link = document.getElementById("css_archivo");

        window.onload = function () {
            document.onkeydown = function (event) {
                tecla_pulsada(event);
            };
        }

        window.onload = function() {
        const fechaInput = document.getElementById("fecha");
        const hoy = new Date();
        const fechaHoy = hoy.toISOString().split('T')[0];  
        
        fechaInput.value = fechaHoy;
        };

        
        function tecla_pulsada(event) {
            if (event.keyCode == 39) {
                css_actual = (css_actual + 1) % todos_css.length
                css_link.setAttribute("href", todos_css[css_actual])
            }
        }


        //Comprobar nombre


        function comprueba_nombre() {
            var nombre = document.getElementById("nombre").value;
            var salida = document.getElementById("errnombre");

            if (nombre.length == 0 || nombre == null || /^\s+$/.test(nombre)) {
                salida.style.display = 'inline';
                salida.innerHTML = "Obligatorio: Rellena tu nombre";
                salida.style.color = "red";
            } else if (/^[A-Z][a-z]{3,20}(\s[A-za-z]{3,20})*$/.test(nombre)) {
                salida.innerHTML = "OK";
                salida.style.color = "green";
            } else {
                salida.style.display = 'inline';
                salida.innerHTML = "Nombre incorrecto, ejemplo: Héctor";
                salida.style.color = "red";
            }

        }

        //Comprobar apellido

        function comprueba_apellido() {
            var apellido = document.getElementById("apellido").value;
            var salida = document.getElementById("errapellido");

            if (apellido.length == 0 || apellido == null || /^\s+$/.test(apellido)) {
                salida.style.display = 'inline';
                salida.innerHTML = "Obligatorio: Rellena tu nombre";
                salida.style.color = "red";
            } else if (/^[A-Z][a-z]{2,20}(\s[A-za-z]{2,20})*$/.test(apellido)) {
                salida.innerHTML = "OK";
                salida.style.color = "green";
            } else {
                salida.style.display = 'inline';
                salida.innerHTML = "Apellido incorrecto, ejemplo: Martínez";
                salida.style.color = "red";
            }
        }

        ///Comprobar e-mail 

        function comprueba_correo() {
            var correo = document.getElementById("correo").value;
            var salida = document.getElementById("errcorreo");

            if (correo.length == 0 || correo == null || /^\s+$/.test(correo)) {
                salida.innerHTML = "Has de rellenar el correo";
                salida.style.display = 'inline';
                salida.style.color = "red";
            } else if (/^[a-z0-9]{1,}@[a-z0-9]{1,}\.[a-z]{2,4}$/.test(correo)) {
                salida.innerHTML = "OK";
                salida.style.color = "green";
            } else {
                salida.innerHTML = "correo incorrecto, ejemplo hector@cosa.com";
                salida.style.display = 'inline';
                salida.style.color = "red";
            }

        }

        ///Comprobar contraseña

        function comprueba_password() {
            var password = document.getElementById("password").value;
            var salida = document.getElementById("errpassword");

            if (password.length == 0 || password == null || /^\s+$/.test(password)) {
                salida.innerHTML = "Has de rellenar la contraseña ";
                salida.style.display = 'inline';
                salida.style.color = "red";
            } else if (/^[a-zA-Z0-9]{3,20}$/.test(password)) {
                salida.innerHTML = "OK";
                salida.style.color = "green"; 
            } else {
                salida.innerHTML = "Contraseña incorrecta, solo numeros y letras minimo 3 y maximo 20, ejemplo inves";
                salida.style.display = 'inline';
                salida.style.color = "red";
            }

        }

        //Dirección

        function validar_direccion() {
            var via = document.getElementById("via").value;
            var errorDireccion = document.getElementById("errvia");

            if (via.length == 0 || via == null || /^\s+$/.test(via)) {
                errorDireccion.style.display = 'inline';
                errorDireccion.innerHTML = "Obligatoria: Rellena la calle/avenida/paseo. Ejemplo Miguel Cervantes 33";
                errorDireccion.style.color = "red";
            } else if (/^[A-Z][a-z]{3,20}(\s[A-za-z0-9]{1,20})*$/.test(via)) {
                errorDireccion.innerHTML = "OK";
                errorDireccion.style.color = "green";
            } else {
                errorDireccion.style.display = 'inline';
                errorDireccion.innerHTML = "Obligatorio: Comprueba la calle/avenida/paseo. Ejemplo Miguel Cervantes 33";
                errorDireccion.style.color = "red";
            }

        }

        //Comprobar Codigo Postal

        function validarPostal() {
            var valor = document.getElementById("cp").value;
            var inner = document.getElementById("errpostal");
            valor = valor.replace(/\D/g, '');
            if (valor.trim() === "") {
                inner.innerHTML = "Por favor introduzca un código postal";
                inner.style.color = "red";
                activo_postal = false;
            } else if (!(/^\d{5}$/.test(valor))) {
                inner.innerHTML = "Introduzca correctamente su código postal";
                inner.style.color = "red";
                activo_postal = false;
            } else {
                valor = parseInt(valor, 10);
                inner.innerHTML = "OK";
                inner.style.color = "green";
                activo_postal = true;
            }
        }

        //Comprobar DNI

        function validarDni() {
            var dni = document.getElementById("dni").value;
            var salida = document.getElementById("errdni");
            var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J',
                'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

            if (!(/^\d{1,8}[A-ZÑ]$/.test(dni))) {
                salida.style.display = 'inline';
                salida.innerHTML = "Formato DNI no válido, ejemplo de formato válido: 71238276P ";
                salida.style.color = "red";
            } else {
                salida.innerHTML = "OK";
                salida.style.color = "green";

                // Calcula el tamaño de la cadena DNI

                if (dni.charAt(8).toUpperCase() != letras[(dni.substring(0, 8)) % 23]) {
                    salida.style.display = 'inline';
                    salida.innerHTML = "La letra del DNI no corresponde con el número indicado";
                    salida.style.color = "red";
                } else {
                    salida.innerHTML = "OK";
                    salida.style.color = "green";
                }
            }
        }

        //Letras en mayúsculas

        function mayus(m) {
            m.value = m.value.toUpperCase();
        }

  //Recomendación

  function comprobar_intereses() {
            var cont = 0;
            var cuanto = document.getElementById("cinteres");
            if (cuanto.checked) {
                cont++;
            }
            var cuanto = document.getElementById("cinteres1");
            if (cuanto.checked) {
                cont++;
            }
            var cuanto = document.getElementById("cinteres2");
            if (cuanto.checked) {
                cont++;
            }
            var cuanto = document.getElementById("cinteres3");
            if (cuanto.checked) {
                cont++;
            }
            var cuanto = document.getElementById("cinteres4");
            if (cuanto.checked) {
                cont++;
            }

            if (cont < 2) {
                var textspan = document.getElementById("errinteres");
                textspan.innerHTML = "2 intereses minimo";
                textspan.style.color = "red";
                return false;
            }
            var textspan = document.getElementById("errinteres");
            textspan.innerHTML = "OK";
            textspan.style.color = "green";
            return true;
        }

  

        function limita2(maximoCaracteres) {
            var elemento = document.getElementById("observaciones");
            if (elemento.value.length >= maximoCaracteres) {
                return false;
            } else {
                var quedan = maximoCaracteres - elemento.value.length - 1;
                document.getElementById("spancaracteres").innerHTML = "Te quedan " + quedan + " caracteres";
                return true;
            }
        }


        // Solo Letras

        function permitir(elevento, caracteres_permitidos) {
            var Numeros = "0123456789";
            var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑPQRSTUVWXYZ";
            var Numeros_Caracteres = Numeros + caracteres;
            var Letras_especiales = [8, 37, 39, 46];

            switch (caracteres_permitidos) {
                case 'num':
                    caracteres_permitidos = Numeros;
                    break;
                case 'car':
                    caracteres_permitidos = caracteres;
                    break;
                case 'num_car':
                    caracteres_permitidos = Numeros_Caracteres;
                    break;
            }
            var evento = elevento || window.event;
            var codigodecaracter = evento.charCode || evento.keyCode;
            var caracter = String.fromCharCode(codigodecaracter);
            var tecla_especial_permitida = false;

            for (var i in Letras_especiales) {
                if (codigodecaracter == Letras_especiales[i]) {
                    tecla_especial_permitida = true;
                    break;
                }
            }
            return caracteres_permitidos.indexOf(caracter) != -1 || tecla_especial_permitida;
        }

        function limita(elEvento, maximoCaracteres) {
            var elemento = document.getElementById("texto");

            // Obtener la tecla pulsada

            var evento = elEvento || window.event;
            var codigoCaracter = evento.charCode || evento.keyCode;

            // Permitir utilizar las teclas con flecha horizontal

            if (codigoCaracter == 37 || codigoCaracter == 39) {
                return true;
            }
            if (codigoCaracter == 8 || codigoCaracter == 46) {
                return true;
            } else if (elemento.value.length >= maximoCaracteres) {
                return false;
            } else {
                return true;
            }
        }

        function actualizaInfo(maximoCaracteres) {
            var elemento = document.getElementById("texto");
            var info = document.getElementById("info");
            if (elemento.value.length >= maximoCaracteres) {
                info.innerHTML = "Máximo " + maximoCaracteres + " caracteres";
            } else {
                info.innerHTML = "Puedes escribir hasta " + (maximoCaracteres - elemento.value.length) + " caracteres adicionales";
            }


        }
        //Botón desabilitado, se activara cuando este todos los campos correctos

        function botonDisabled() {
            if (
                document.getElementById("errnombre").innerHTML == "OK" &&
                document.getElementById("errcorreo").innerHTML == "OK" &&
                document.getElementById("errpassword").innerHTML == "OK" &&
                document.getElementById("errvia").innerHTML == "OK" &&
                document.getElementById("errpostal").innerHTML == "OK" &&
                document.getElementById("errdni").innerHTML == "OK" 
            ) {
                document.getElementById("btnEnviar").disabled = false;
            } else {
                document.getElementById("btnEnviar").disabled = true;
            }
        }

        // Nuevas funciones para los botones de radio

 function verificar_conectividad(){
	document.getElementById('conectividad').style.display = "block";
	document.getElementById('resolucion').style.display = "none";
    var cuanto = document.getElementById("cinteres");
            if (cuanto.checked) {
                cont++;
            }
}

function verificar_monitor(){
	document.getElementById('conectividad').style.display = "none";
	document.getElementById('resolucion').style.display = "block";
}

function verificar_teclado(){
	document.getElementById('conectividad').style.display = "none";
	document.getElementById('resolucion').style.display = "none";
}