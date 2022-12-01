let inp_usuario = document.getElementById("inp_usuario")
let parrafo_alerta_usuario = document.getElementById("parrafo_alerta_usuario")
let inp_nombre = document.getElementById("inp_nombre")
let parrafo_alerta_nombre = document.getElementById("parrafo_alerta_nombre")
let inp_contrasena = document.getElementById("inp_contrasena")
let inp_repetir_contrasena = document.getElementById("inp_repetir_contrasena")
let parrafo_alerta_repetir_contrasena = document.getElementById("parrafo_alerta_repetir_contrasena")

inp_usuario.addEventListener("change",()=>{
    tiene_numerosyguiones = validacion_4a16(inp_usuario.value || "")
    if(tiene_numerosyguiones){
        parrafo_alerta_usuario.innerText = ""
    }else{
        parrafo_alerta_usuario.innerText = "el usuario tiene que ser de 4 a 16 digitos, y solo puede contener numeros, letras y guion bajo"
    }
})

inp_nombre.addEventListener("change",nombre)

function nombre(){
    let nombreEsCorrecto = nombreCorrecto(inp_nombre.value || "")
    if(nombreEsCorrecto){
        parrafo_alerta_nombre.innerText = ""
    }else{
        parrafo_alerta_nombre.innerText = "el nombre no puede contener numeros o otros caracteres"
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

inp_repetir_contrasena.addEventListener("change",contrasena)
inp_contrasena.addEventListener("change",contrasena)

function contrasena(){
    let contrasena = inp_contrasena.value || ""
    let repetirContrasena = inp_repetir_contrasena.value || ""
    
    let soniguales = contrasenas_iguales(contrasena,repetirContrasena)
    if(soniguales){
        
        parrafo_alerta_repetir_contrasena.innerText = ""
    }else{
        parrafo_alerta_repetir_contrasena.innerText = "ambas contraseñas deben de ser iguales"
    }
}
function contrasenas_iguales(contrasena_1,contrasena_2){
    if(contrasena_1 == contrasena_2){
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