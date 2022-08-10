function enviar(){
    let email = document.getElementById("email")
    let usuario = email.value.substring(0, email.value.indexOf("@"))
    let dominio = email.value.substring(email.value.indexOf("@") + 1, email.value.length)
    let errorTxt = document.getElementById("errorTxt")

    if(!((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1))){
        errorTxt.style.display = "block"
    }else{
        errorTxt.style.display = "none"
    }
}