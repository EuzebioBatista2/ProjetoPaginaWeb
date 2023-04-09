// INICIO Chamando lista de cadastro para alterar
export function putBase(event) {
    event.preventDefault
    const url = "http://localhost:8080/pages/putInicio.html"
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url, true)
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("link").innerHTML = this.responseText
            const urlJson = "http://localhost:3000/usuarios"
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const dados = JSON.parse(this.responseText)
                    dados.map(value => {
                        // Estrutura da div
                        const divAll = document.createElement("div")
                        divAll.classList.add("row")

                        const divlateralEsquerda = document.createElement("div")
                        divlateralEsquerda.classList.add("col-1")

                        const divlateralDireira = document.createElement("div")
                        divlateralDireira.classList.add("col-1")

                        const divcentral = document.createElement("div")
                        divcentral.classList.add("col-10")

                        const divprincipal = document.createElement("div")
                        divprincipal.classList.add("row")
                        // Fim estrutura da div

                        // Linha divisoria
                        const barra = document.createElement("hr")
                        // Fim linha divisoria

                        // Conteúdo nome
                        const div1 = document.createElement("div")
                        div1.classList.add("col-3")
                        div1.classList.add("align-self-center")
                        div1.classList.add("fontList")
                        div1.classList.add("mb-3")
                        div1.innerHTML = `<strong>Nome: </strong>${value.nome}`
                        divprincipal.appendChild(div1)
                        divprincipal.appendChild(barra)
                        // Fim conteúdo nome

                        // Conteúdo email
                        const div2 = document.createElement("div")
                        div2.classList.add("col-6")
                        div2.classList.add("align-self-center")
                        div2.classList.add("fontList")
                        div2.classList.add("mb-3")
                        div2.innerHTML = `<strong>Email: </strong>${value.email}`
                        divprincipal.appendChild(div2)
                        divprincipal.appendChild(barra)
                        // Fim conteúdo email

                        // Conteúdo botão
                        const div3 = document.createElement("div")
                        const botton = document.createElement("button")
                        botton.id = value.id
                        botton.classList.add("alterar")
                        botton.classList.add("btn")
                        botton.classList.add("btn-warning")
                        const icone = document.createElement("i")
                        icone.classList.add('fa')
                        icone.classList.add('fa-edit')
                        botton.appendChild(icone)
                        div3.classList.add("col-3")
                        div3.classList.add("align-self-center")
                        div3.classList.add("fontList")
                        div3.classList.add("mb-3")
                        div3.appendChild(botton)
                        divprincipal.appendChild(div3)
                        divprincipal.appendChild(barra)
                        // Fim conteúdo botão

                        // Inserindo elementos na tag section
                        divcentral.appendChild(divprincipal)
                        divAll.appendChild(divlateralEsquerda)
                        divAll.appendChild(divcentral)
                        divAll.appendChild(divlateralDireira)
                        $(divAll).hide().fadeIn(500)
                        const conteudo = document.getElementById("link")
                        conteudo.appendChild(divAll)
                        // Fim inserindo elementos

                    })
                }
            }
            xhr.open("GET", urlJson, true);
            xhr.send();
        }
    }
    xhr.send()
}
// FIM Chamando lista de cadastro para alterar

// INICIO Chamando página de cadastro para alterar
export function alterar(event, id) {
    event.preventDefault()
    const url = "http://localhost:8080/pages/putAlterar.html"
    var xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("link").innerHTML = this.responseText
            const urlJson = `http://localhost:3000/usuarios/${id}`
            xhr.open("GET", urlJson, true)
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const dados = JSON.parse(this.responseText)
                    document.getElementById("nome").setAttribute("adress", `${id}`)
                    document.getElementById("nome").value = dados.nome
                    document.getElementById("sobrenome").value = dados.sobrenome
                    document.getElementById("email").value = dados.email
                    document.getElementById("senha").value = dados.senha
                    document.getElementById("input").value = dados.cidade
                    document.getElementById("termo").checked = dados.termo
                    const form = document.getElementsByTagName('form')
                    $(form).hide().fadeIn(500)
                }
            }
            xhr.send()
        }
    }
    xhr.send()
}
// FIM Chamando página de cadastro para alterar

// INICIO Evento alterando cadastro
export function mudar(event) {
    event.preventDefault()
    const endereco = document.getElementById("nome").getAttribute("adress")
    const url = `http://localhost:3000/usuarios/${endereco}`
    const xhr = new XMLHttpRequest()
    xhr.open("PUT", url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    var objeto = {
        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
        cidade: document.getElementById("input").value,
        termo: document.getElementById("termo").checked
    }
    const dados = JSON.stringify(objeto)
    xhr.send(dados)
    putSucess(event)
}
// FIM Evento alterando cadastro

// INICIO Página de alteração com SUCESSO
export function putSucess(event) {
    event.preventDefault()
    const xhr = new XMLHttpRequest()
    const url = "http://localhost:8080/pages/alteracaoSucesso.html"
    xhr.open("GET", url)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('link').innerHTML = this.responseText
        }
    }
    xhr.send()
}
// FIM Página de alteração com SUCESSO