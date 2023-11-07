function enviar(){

//chamando variáveis do HTMl (contato.html)
var name = window.document.getElementById("nome")
var emai = window.document.getElementById("email01")
var mensage = window.document.getElementById("mensagem")
var date = window.document.getElementById("data_visita")
var hour = window.document.getElementById("hora_visita")

//Modificando variáveis para type: String
var nome = String(name.value)
var email = String(emai.value)
var mensagem = String(mensage.value)
var data = String(date.value)
var hora = String(hour.value)

    if (nome, email, mensagem, data, hora){
        alert("Sua mensagem foi enviada com sucesso!")
        alert("Retornaremos uma mensagem na sua caixa de email!")
    }else{      
        alert("Preencha todos os campos!")
    }

}