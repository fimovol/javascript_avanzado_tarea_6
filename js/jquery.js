$("#inp_usuario").change(function(){
    tiene_numerosyguiones = validacion_4a16(inp_usuario.value || "")
    if(tiene_numerosyguiones){
        parrafo_alerta_usuario.innerText = ""
        inp_usuario.style.border = ""
    }else{
        parrafo_alerta_usuario.innerText = "el usuario tiene que ser de 4 a 16 digitos, y solo puede contener numeros, letras y guion bajo"

        inp_usuario.style.border = "2px solid red"
    }
})

$("#inp_nombre").change(function(){
    let nombreEsCorrecto = nombreCorrecto(inp_nombre.value || "")
    if(nombreEsCorrecto){
        parrafo_alerta_nombre.innerText = ""
        inp_nombre.style.border = ""
        
    }else{
        parrafo_alerta_nombre.innerText = "el nombre no puede contener numeros o otros caracteres"
        inp_nombre.style.border = "2px solid red"
    }
})
$("#inp_repetir_contrasena").change(contrasena)
$("#inp_contrasena").change(contrasena)

function contrasena(){
    let contrasena = inp_contrasena.value || ""
    let repetirContrasena = inp_repetir_contrasena.value || ""
    
    let soniguales = contrasenas_iguales(contrasena,repetirContrasena)
    if(soniguales){
        inp_repetir_contrasena.style.border = ""
        inp_contrasena.style.border = ""
        parrafo_alerta_repetir_contrasena.innerText = ""
    }else{
        parrafo_alerta_repetir_contrasena.innerText = "ambas contraseñas deben de ser iguales"
        inp_repetir_contrasena.style.border = "2px solid red"
        inp_contrasena.style.border = "2px solid red"
    }
}


$("#inp_correo").change(function(){
    let correoCorrect = correoCorrecto(inp_correo.value || "")
    if(correoCorrect){
        parrafo_alerta_correo.innerText = ""
        inp_correo.style.border = ""
        
    }else{
        parrafo_alerta_correo.innerText = "debes de escribir un correo valido"
        inp_correo.style.border = "2px solid red"
    }
})

$("#inp_celular").change(function(){
    let celularCorrect = celularCorrecto(inp_celular.value || "")
    if(celularCorrect){
        parrafo_alerta_celular.innerText = ""
        inp_celular.style.border = ""
        
    }else{
        parrafo_alerta_celular.innerText = "ejemplo de un celular valido (51)123-123-123"
        inp_celular.style.border = "2px solid red"
    }
})

function celularCorrecto(telefono){
    let exreg = /^\([0-9]{2}\)[0-9]{3}-[0-9]{3}-[0-9]{3}$/
    if(exreg.test(telefono)){
        return true
    }else{
        return false
    }
}

function correoCorrecto(correo=""){
    let exreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(exreg.test(correo)){
        return true
    }else{
        return false
    }
}

function contrasenas_iguales(contrasena_1,contrasena_2){
    if(contrasena_1 == contrasena_2){
        return true
    }else{
        return false
    }
}


function nombreCorrecto(nombre=""){
    let exreg = /^[A-Za-z]+([\s]?[A-Za-z])*$/
    if(exreg.test(nombre)){
        return true
    }else{
        return false
    }
}

function validacion_4a16(texto=""){
    let escorrecto 
    let expreg = new RegExp("^[a-zA-Z0-9_]{4,16}$")
    if(expreg.test(texto)){
        escorrecto = true
    }else{
        escorrecto = false
    }
    return escorrecto
}