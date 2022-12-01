let dni = document.getElementById("txtdni")
let msgvaldni = document.getElementById("msgvaldni")

let btnEnviar = document.getElementById("btnenviar")

btnEnviar.addEventListener("click",valida)

function valida(){
    let vdni = dni.value || ""
    msgvaldni.innerText = ""
    let exregdni = new RegExp("^[0-9]{8}$")

    let regte = /^[0-9]{8}$/
    if(regte.test(vdni) ){
        msgvaldni.innerText = "cumple el patron"
    }else{
        msgvaldni.innerText = "no cumple el patron ejemplo: 12345678"
    }
}

let txtnombre = document.getElementById("txtnombre")
let btnenviar_nombre = document.getElementById("btnenviar_nombre")
let msgvaldni_nombre = document.getElementById("msgvaldni_nombre")

btnenviar_nombre.addEventListener("click",validar_nombre)

function validar_nombre(){
    let vnombre = txtnombre.value || ""
    msgvaldni_nombre.innerText = ""

    let regte = /^[A-Za-z]+([\s]?[A-Za-z])*$/
    if(regte.test(vnombre) ){
        msgvaldni_nombre.innerText = "cumple el patron"
    }else{
        msgvaldni_nombre.innerText = "no cumple el patron ejemplo: carlos pacheco"
    }
}

let txttelefono = document.getElementById("txttelefono")
let btnenviar_telefono = document.getElementById("btnenviar_telefono")
let msgvaldni_telefono = document.getElementById("msgvaldni_telefono")

btnenviar_telefono.addEventListener("click",validar_telefono)

function validar_telefono(){
    let vntelefono = txttelefono.value || ""
    msgvaldni_telefono.innerText = ""

    let regte = /^\([0-9]{2}\)[0-9]{3}-[0-9]{3}-[0-9]{3}$/
    if(regte.test(vntelefono) ){
        msgvaldni_telefono.innerText = "cumple el patron"
    }else{
        msgvaldni_telefono.innerText = "no cumple el patron ejemplo: (51)123-123-123"
    }
}


let txtpassword = document.getElementById("txtpassword")
let btnenviar_pass = document.getElementById("btnenviar_pass")
let msgvaldni_pass = document.getElementById("msgvaldni_pass")

btnenviar_pass.addEventListener("click",validar_pass)

function validar_pass(){
    let vpass = txtpassword.value || ""
    msgvaldni_pass.innerText = ""

    let regte = /^[A-Z]{1}[a-z]*[0-9]{1}/
    if(vpass.lenght > 10 || regte.test(vpass) ){
        msgvaldni_pass.innerText = "cumple el patron"
    }else{
        msgvaldni_pass.innerText = "no cumple el patron ejemplo: Mayuscula1123123"
    }
}
///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



let txtemail = document.getElementById("txtemail")
let btnenviar_email = document.getElementById("btnenviar_email")
let msgvaldni_email = document.getElementById("msgvaldni_email")

btnenviar_email.addEventListener("click",validar_email)

function validar_email(){
    let vpass = txtemail.value || ""
    msgvaldni_email.innerText = ""

    let regte = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(regte.test(vpass) ){
        msgvaldni_email.innerText = "cumple el patron"
    }else{
        msgvaldni_email.innerText = "no cumple el patron ejemplo: asd@asd.com"
    }
}