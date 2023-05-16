//______________________________________________________________________________09/05/2023
//GERANDO DOIS OBJETOS NO LOCALSTORAGE
const usuario1 = {
    nomeUsuario:"predo",
    senhaUsuario:"12345"
}

const usuario2 = {
    nomeUsuario:"anzina",
    senhaUsuario:"12345"
}

let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));

//localStorage.setItem("user1",usuario1);
//localStorage.setItem("user2",usuario2);
//ESSAS COMENTADAS ^^ EXISTIAM ANTES DE TER COLOCADO O LISTADEUSUARIOS

//VAMOS CRIAR UM OBJETO PARA ARMAZENAR O NOSSO USUÁRIO
// const usuario = {
//     nomeUsuario:"",
//     senhaUsuario:""
// } //Essa é a estrutura de um objeto; nós não queremos mudar o objeto, mas sim seus atributos

addEventListener("click", (evento)=>{

    evento.preventDefault();
    //Evita que o evento de um refresh na página/formulário/whatever

    //console.log(evento.target.id == "btnSubmit"); //A melhor forma de saber se/como algo está funcionando é com o console.log
    if(evento.target.id == "btnSubmit"){
    // .target : vai mostrar tudo o que você clica, o código de tudo

        //let usuario = document.querySelector("#idUser").value;
        //let senha = document.querySelector("#idPass").value;
        //ESSAS COMENTADAS ^^ EXISTEM CASO NÃO TENHA O OBJETO DE ARMAZENAÇÃO ALI EM CIMA

        // //Armazenando os dados no OBJETO
        // usuario.nomeUsuario = document.querySelector("#idUser").value;
        // usuario.senhaUsuario = document.querySelector("#idPass").value;
        //COMENTEI ESSES DAQUI QUANDO CRIEI O GETITEM AQUI EMBAIXO

        //Recuperando os inputs
        let inputUserValue = document.querySelector("#idUser").value;
        let inputPassValue = document.querySelector("#idPass").value;

        const h1Titulo = document.querySelector("#titulo");

        let lista = JSON.parse(localStorage.getItem("listaUser"));
        //precisa usar o jason (JSON) para conseguir usar essa variável

        let userValidado = {};

        try{
            lista.forEach((usuario)=> {

            //Simulando uma VALIDAÇÃO
                if(inputUserValue == usuario.nomeUsuario && inputPassValue == usuario.senhaUsuario){
                    userValidado = usuario;
                    throw "VALIDADO!";    
                }
            });

                throw "NÃO VALIDADO!";

        }catch(msg){
            if(msg == "VALIDADO!"){
                h1Titulo.innerHTML = "<span><strong>Login validado com sucesso!</strong></span>";
                h1Titulo.setAttribute("style","color:#00ff00;");

                //Adicionando uma propriedade ao nosso objeto usuarioValidado: => token É A PROPRIEDADE
                userValidado["token"] = Math.random().toString(16).substring(2)+Math.random().toString(16).substring(2);

                //Setando um novo objeto no LocalStorage
                localStorage.setItem("UserValidado", JSON.stringify(userValidado));

                //Direcionando o usuário para a página de sucesso:
                window.location.href = "../sucesso.html";
            }else{
                h1Titulo.innerHTML = "<span><strong>Login ou senha inválidos!</strong></span>";
                h1Titulo.setAttribute("style","color:#ff0000;");
                //Direcionando o usuário para a página de erro:
                window.location.href = "../erro.html";
            }
        }       
    }
});

//O local-storage serve para guardar informações localmente, como se fosse um banco de dados; pode desligar e ligar denovo o computador que não vai perder as informações salvas

try{
    const userBemVindo = document.querySelector("#userWelcome");
    let usuario = JSON.parse(localStorage.getItem("UserValidado"));

    if(usuario){
        if(usuario.tokenp){
            userBemVindo.innerHTML = usuario.nomeUsuario;
        }
    
    }else{
        window.location.href = "../erro.html";
    }

    const botaoLogout = document.querySelector("#btnLogout");
    botaoLogout.addEventListener("click", ()=>{
        localStorage.removeItem("UserValidado")
        window.location.href = "../login.html"

    });

}catch(erro){

    if(userBemVindo != null){
        userBemVindo.innerHTML = JSON.parse(localStorage.getItem("UserValidado")).nomeUsuario;
    }

}