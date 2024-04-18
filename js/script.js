const formLogIn = document.getElementById("formLogIn") //AGARRAMOS EL FORMULARIO
const inputEmail = document.getElementById("inputEmail") //AGARRAMOS EL INPUT DEL EMAIL
const inputUsuario = document.getElementById("inputUsuario") //AGARRAMOS EL INPUT DEL USUARIO
const inputPassword = document.getElementById("inputPassword") //AGARRAMOS EL INPUT DE LA PASSWORD

let newUser = [] //OBJETO DONDE VAMOS A GUARDAR LOS USUARIOS
let userJSON = [] //VARIABLE QUE VAMOS A USAR PARA PASAR EL OBJETO A JSON
let accLs = localStorage.getItem("Usuarios") //CREAMOS UN CONTADOR DE USUARIOS
if(accLs === null){ //SI NO EXISTE LO CREAMOS EN 0
    accLs = 0
}else{
    accLs = parseInt(accLs) //LO PASAMOS A ENTERO
}
formLogIn.addEventListener("submit" , (event) => {
    accLs++ //1ER USUARIO, 2DO USUARIO...
    event.preventDefault() //PARA QUE NO SE RECARGUE LA PAGINA

    let inpEmail = inputEmail.value //GUARDAMOS EL VALUE DEL EMAIL
    let inpUsuario = inputUsuario.value //GUARDAMOS EL VALUE DEL USUARIO
    let inpPassword = inputPassword.value //GUARDAMOS EL VALUE DE LA PASSWORD

    newUser[accLs] =  { ////GUARDAMOS EL VALUE EN UN OBJETO DE TIPO USUARIO EN LA POSICION 'acc' QUE INDICA EL NUMERO DE USUARIO
        Email: inpEmail,
        Usuario: inpUsuario,
        Password: inpPassword
    }

    localStorage.setItem("Usuarios" , accLs) //GUARDMOS EL VALOR DE 'accLs' EN EL LOCAL STORAGE
    if(newUser[accLs].Email.trim() !== "" && newUser[accLs].Usuario.trim() !== "" && newUser[accLs].Password.trim() !== ""){ //VERIFICAMOS QUE NO SEA NULL
        userJSON[accLs] = JSON.stringify(newUser[accLs]) //PASAMOS EL OBJETO A JSON EN LA POSICION 'acc' QUE INDICA EL NUMERO DE USUARIO
        localStorage.setItem("Usuario " + accLs , userJSON[accLs]) //SUBIMOS A LOCAL STORAGE EN FORMATO JSON
    } 
    formLogIn.reset() //RESETEAMOS EL FORM
})