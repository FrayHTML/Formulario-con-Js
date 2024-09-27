(function(){
   var formulario = document.getElementById('formulario'),
        nombre = formulario.nombre,
        correo = formulario.correo,
        sexo = formulario.sexo,
        terminos = formulario.terminos
        error = document.getElementById('error')
    
    function validarNombre(e){
        if (nombre.value == '' || nombre.value == null){
            console.log('Por favor, completa el nombre');
            error.style.display = 'block';
            error.innerHTML += '<li> Por favor, ingrese su nombre</li>';

            e.preventDefault();
        } else {
            error.style.display = 'none'
        }
    }

    function validarCorreo(e){
        if (correo.value == '' || correo.value == null){
            console.log('Por favor, completa el correo');
            error.style.display = 'block';
            error.innerHTML += '<li> Por favor, ingrese su correo electronico</li>';

            e.preventDefault();
        } else {
            error.style.display = 'none'
        }
    }

    function validarSexo(e){
        if(sexo.value == '' || sexo.value == null){
                console.log('Por favor, escoge tu sexo');
                error.style.display = 'block';
                error.innerHTML += '<li> Por favor, escoga un sexo</li>';
    
                e.preventDefault();

            } else {
                error.style.display = 'none'
            }
        }

    function validarTerminos(e) {
        if(terminos.checked == false){
            console.log('Por favor, acepta los terminos y condiciones');
                error.style.display = 'block';
                error.innerHTML += '<li> Por favor, acepta los terminos y condiciones</li>';
    
                e.preventDefault();

            } else {
                error.style.display = 'none'
            }
        }

    function validarFormulario(e){
        error.innerHTML = ''
        validarNombre(e)
        validarCorreo(e)
        validarSexo(e)
        validarTerminos(e)
    }

    
    formulario.addEventListener('submit', validarFormulario)
}())