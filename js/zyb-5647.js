// const liElement = document.getElementsByTagName("li") //utiliza de uma coleção de objetos no geral, utilizando do seu nome e não do seu id/sua identificação

// // for (let index = 0; index < liElement.length; index++) {
// //     console.log(liElement[index].textContent)
// // }

// //console.log(liElement.length)

// //Declaração de Arrays
// let num1 = [1,2,3,4,5];
// let num2 = [6,7,8,9,10];
// let num3 = [num1,num2];

// console.log(`Array-1 ${num1}`);
// console.log(`Array-2 ${num2}`);
// console.log(`Array-3 ${num3}`);

// //Listando um Array! Técnica especial
// // num3.forEach((itemDoArray)=>{
// //     console.log(`Array-3 sendo listado ${itemDoArray}`);
// // })

//______________________________________________________________________________18/04/2023
// //Listando um Array com MAP
// num3.map((numero, key)=>{
    
//     console.log(`${key + 1} - Itens do Array - ${numero}`);
//     numero.forEach((digitos)=>{
//         console.log(digitos);
//     })
// })

//--------------------------------
// const liElement = document.getElementsByTagName("li") //utiliza de uma coleção de objetos no geral, utilizando do seu nome e não do seu id/sua identificação

// //Declaração de Arrays
// let num1 = [1,2,3,4,5];
// let num2 = [6,7,8,9,10];
// //Espalhar o Array com o SPREAD > AGORA OS OUTROS ARRAYS ESTÃO DESTRIBUÍDOS AQUI DENTRO, NÃO ESTÃO APENAS SENDO JOGADOS AQUI
// let num3 = [...num1,...num2];

// console.log(`Array-1 ${num1}`);
// console.log(`Array-2 ${num2}`);
// console.log(`Array-3 ${num3}`);

// // num3.forEach((itemDoArray)=>{
// //      console.log(`Array-3 sendo listado ${itemDoArray}`);
// //  })

// //Convertendo HTMLCollection em Array de forma indireta
// const liElementHTML = document.getElementsByTagName("li");
// const liElementArray = [...liElementHTML];

// liElementArray.map((item, key)=>{
//     if (item.textContent == "Item-39"){
//         console.log(`${key + 1} - ${item.textContent = "LOCALIZADO"}`);
//     }
// })

//--------------------------------
// function soma(p1, p2, p3) {
//     num1 = p1;
//     num2 = p2;

//     return parseInt(num1) + parseInt(num2) + parseInt(p3)

//     // console.log(`Resultado: ${parseInt(num1) + parseInt(num2) + parseInt(parametro)}`)
//     // console.log(`Este é o parêmetro passado à função: ${parametro}`)
// //}

// //--------------------------------
// //ARROW FUNCTION
// const mudaCor = ()=>{

//     //FUNÇÃO AUTÔNOMA SET-TIME-OUT
//     setTimeout(soma(1,2,3), 5000);

// }

// soma();
//______________________________________________________________________________25/04/2023

// let tmp = ""

// function mudaCor(){

//     let r = "";
//     let g = "";
//     let b = "";

//     //random = gera números aleatórios entre 0 e 1.
//     //ceil, floor e round = arredondam o número para cima, para baixo ou aleatoriamente.

//     //Determinando para a variável r um valor entre 0 e 255
//     r = Math.round(Math.random() * 255);
//     g = Math.round(Math.random() * 255);
//     b = Math.round(Math.random() * 255);

//     //querySelector = seleciona um elemento igual o css
//     const cabeçalho = document.querySelector(".cabeçalho")

//     cabeçalho.setAttribute("style", `background-color:rgb(${r}, ${g}, ${b})`)

//     //Uma função  de callback, que executa algo e retorna algo: primeiro parâmetro é o que vai executar e o segundo, o tempo
//     tmp = setTimeout(mudaCor, 1000);

// }

// mudaCor();
//--------------------------------
//EXERCÍCIO 1: MUDANDO E ROTACIONANDO A IMAGEM ENTRE OS 3 BANNERS
//DICA DO EXERCÍCIO: A FUNÇÃO BANNER1 VAI PUXAR A FUNÇÃO BANNER2, QUE VAI PUXAR A FUNÇÃO BANNER3, POR FIM, PUXANDO A FUNÇÃO BANNER1

// //função altera banner
// function alteraBanner(){

//     //o '>' serve para falar que dentre todos os elementos da div, queremos apenas aquele dentro do aside 
//     const img1 = document.querySelector(".l-e > img");
//     const img2 = document.querySelector(".l-d > img");

//     let numero = Math.round(Math.random() * 3);
//     let caminho = `./img/banner-lateral-${numero}.png`;
//     img1.src = caminho;
    
//     let numero = Math.round(Math.random() * 3);
//     let caminho = `./img/banner-lateral-${numero}.png`;
//     img2.src = caminho;

//     setTimeout(alteraBanner, 1000);

// }

// alteraBanner();

//EXERCÍCIO 2: LIGAR E DESLIGAR A LÂMPADA

// const botao = document.querySelector(".central button");
// botao.addEventListener("click" , ligaDesliga);
// botao.addEventListener("click" , ()=>{
//     const imgLampada = document.querySelector(".central img");

//     if(botao.textContent == "LIGAR"){
//         imgLampada.src = "./img/pic_bulbon.gif"
//         botao.textContent = "DESLIGAR";
//     } else{
//         imgLampada.src = "./img/pic_bulboff.gif"
//         botao.textContent = "LIGAR";
//     }
// });

// function ligaDesliga() {

//     const imgLampada = document.querySelector(".central img");

//     if(botao.textContent == "LIGAR"){
//         imgLampada.src = "./img/pic_bulbon.gif"
//         botao.textContent = "DESLIGAR";
//     } else{
//         imgLampada.src = "./img/pic_bulboff.gif"
//         botao.textContent = "LIGAR";
//     }
// }

//______________________________________________________________________________05/02/2023

const inputUser = document.querySelector("input[name='nmUser']");
const labelUser = document.querySelector("label[for]");

inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style", "outline-color:#ff0000;");
});

inputUser.addEventListener("keyup", ()=>{
    if(inputUser.value.length <= 8){
        inputUser.setAttribute("style", "outline-color:#ff0000;");
        labelUser.setAttribute("style", "color:#ff0000;");
    } else{
        inputUser.setAttribute("style", "outline-color:#dddddd;");
        labelUser.setAttribute("style", "color:#000000;");
    }
    
});