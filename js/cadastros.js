// INICIO Gerando página de cadastro
export function cadastro(event) {
    event.preventDefault()
    const url = "http://localhost:8080/pages/post.html"
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("link").innerHTML = this.responseText;
        const form = document.getElementsByTagName('form')
        $(form).hide().fadeIn(500)
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
}
// FIM Gerando página de cadastro

// INICIO Enviando conteúdo para o arquivo db.json
export function enviar(event) {
    event.preventDefault()
    var objeto = {
        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
        cidade: document.getElementById("input").value,
        termo: document.getElementById("termo").checked
    }
    const dados = JSON.stringify(objeto)
    const xhr = new XMLHttpRequest()
    const url = "http://localhost:3000/usuarios"
    xhr.open("POST", url, true)
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(dados)
    sucesso(event)
}
// FIM Enviando conteúdo para o arquivo db.json

// INICIO Página sucesso do cadastro
export function sucesso(event) {
    event.preventDefault()
    const xhr = new XMLHttpRequest()
    const url = "http://localhost:8080/pages/sucesso.html"
    xhr.open("GET", url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("link").innerHTML = this.responseText;
        }
    }
    xhr.send()
}
// FIM Página sucesso do cadastro