import ehumcpf from "./valida-cpf.js";

const camposFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]")

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "name": e.target.elements["name"].value,
        "email": e.target.elements["email"].value,
        "cpf": e.target.elements["cpf"].value,
        "assunto": e.target.elements["assunto"].value,
        "msgm": e.target.elements["msgm"].value,
    }
    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));
    window.location.href = './abrir-conta-form-2.html'
})



camposFormulario.forEach((campo) => {

    campo.addEventListener("blur", () => verificarCampo(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault());
})



function verificarCampo(campo) {
    let mensagem = " ";
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehumcpf(campo)
    }

    tipoDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem)
        }
    })

    const mensagemErro = campo.parentNode.querySelector('.mensagem_erro');
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = ""

    }
}

const tipoDeErro = [
    'valueMissing',
    'typeMismatch',
    'tooShort',
    'patternMismatch',
    'customError'
]


const mensagens = {
    name: {
        
        valueMissing: "O campo nome não pode ficar vazio",
        tooShort: "por favor preencha um nome válido"

    },

    email: {
        valueMissing: "O campo e-mail não pode ficar vazio",
        tooShort: "Preencha um e-mail valido conforme email@texto.com"
    },

    cpf: {
        valueMissing: "O campo de CPF não pode ficar vazio",
        tooShort: "Preencha um e-mail válido"
    },
    assunto: {
        valueMissing: "O campo de assunto não deve ficar vazio",
        tooShort: "O campo de assunto não deve ficar vazio"
    },
    msgm: {
        valueMissing: "O campo de mensagem não deve ficar vazio",
        tooShort: "O campo de mensagem não deve ficar vazio"
    }
}