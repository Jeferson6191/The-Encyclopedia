let menumobile = document.querySelector('.menu-hamburger');
let opcoesmenu = document.querySelectorAll('nav > ul > li');
let opcoescursos = document.querySelector('.curso');

// menu hamburguer
menumobile.addEventListener('click', () => {
    opcoesmenu.forEach(item => {
        item.classList.toggle("classe-momentanea-opcoes");
    });
    menumobile.classList.toggle("classe-momentanea-menu");
});

// validação de erro no cadastro

let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let dtnsci = document.querySelector('#dt');
let tel = document.querySelector('#tel');
let senha = document.querySelector('#senha');
let todos = document.querySelectorAll(".erro");
let enviarbtn = document.querySelector("#enviar")

enviarbtn.addEventListener("click", () => {
    // remove a classe "erro" de todos os campos (caso já tenha)
    nome.classList.remove("erro");
    senha.classList.remove("erro");
    email.classList.remove("erro");

    // validação do nome
    if (nome.value.length < 3) {
        nome.classList.add("erro");
    }else{
        nome.classList.remove("erro");
    }

    // validação da senha
    if (senha.value.length > 20 || senha.value.length < 5)  {
        senha.classList.add("erro");
    }else{
        senha.classList.remove("erro");
    }
    // validação email
    email.classList.add("erro");
    if (tel.value.length > 11 || tel.value.length < 10) {
        tel.classList.add("erro");
    }else{
        email.classList.remove("erro");
    }

});

// seleçao da navbar

let Pythonlink = document.querySelector("#Python")
let Nodelink = document.querySelector("#Node.js")
let FrontEndlink = document.querySelector("#FrontEnd")
let Golanglink = document.querySelector("#Golang")
let Javalink = document.querySelector("#Java")
let Cslink = document.querySelector("#.NET")
let TypeScriptlink = document.querySelector("#TypeScript")
let Reactlink = document.querySelector("#React")

let Pythoncard = document.querySelector("#Python")
let nodejscard = document.querySelector("#nodejscard")
let hmtlcard = document.querySelector("#hmtlcard")
let gocard = document.querySelector("#gocard")
let javacard = document.querySelector("#javacard")
let cscard = document.querySelector("#cscard")
let tscard = document.querySelector("#tscard")
let reactcard = document.querySelector("#reactcard")

