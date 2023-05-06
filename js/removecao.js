export function remover(event) {
    event.preventDefault()
    const url = "http://localhost:8080/pages/remove.html"
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("link").innerHTML = this.responseText;
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
                        // Fim Estrutura da div

                        // Linha divisoria
                        const barra = document.createElement("hr")
                        // Fim Linha divisoria


                        // Conteúdo nome
                        const div1 = document.createElement("div")
                        div1.classList.add("col-3")
                        div1.classList.add("align-self-center")
                        div1.classList.add("fontList")
                        div1.classList.add("mb-3")
                        div1.innerHTML = `<strong>Nome: </strong>${value.nome}`
                        divprincipal.appendChild(div1)
                        divprincipal.appendChild(barra)
                        // Fim Conteúdo nome

                        // Conteúdo email
                        const div2 = document.createElement("div")
                        div2.classList.add("col-6")
                        div2.classList.add("align-self-center")
                        div2.classList.add("fontList")
                        div2.classList.add("mb-3")
                        div2.innerHTML = `<strong>Email: </strong>${value.email}`
                        divprincipal.appendChild(div2)
                        divprincipal.appendChild(barra)
                        // Fim Conteúdo email

                        // Conteúdo botão
                        const div3 = document.createElement("div")
                        const botton = document.createElement("button")
                        botton.id = value.id
                        botton.classList.add("remover")
                        botton.classList.add("btn")
                        botton.classList.add("btn-danger")
                        const icone = document.createElement("i")
                        icone.classList.add('fa')
                        icone.classList.add('fa-remove')
                        botton.appendChild(icone)
                        div3.classList.add("col-3")
                        div3.classList.add("align-self-center")
                        div3.classList.add("fontList")
                        div3.classList.add("mb-3")
                        div3.appendChild(botton)
                        // Fim Conteúdo botão

                        // Inserindo elementos na tag section
                        divprincipal.appendChild(div3)
                        divprincipal.appendChild(barra)
                        divcentral.appendChild(divprincipal)
                        divAll.appendChild(divlateralEsquerda)
                        divAll.appendChild(divcentral)
                        divAll.appendChild(divlateralDireira)
                        $(divAll).hide().fadeIn(500)
                        const conteudo = document.getElementById("link")
                        conteudo.appendChild(divAll)
                        // Fim Inserindo elementos na tag section

                    })
                }
            }
            xhr.open("GET", urlJson, true);
            xhr.send();
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

export function excluir(event, id) {
    event.preventDefault()
    const url = "http://localhost:3000/usuarios"
    var xhr = new XMLHttpRequest()
    const urlRemove = url + '/' + id
    var confirma = window.confirm("Tem certeza que deseja continuar?");
    if (confirma) {
        xhr.open("DELETE", urlRemove, true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send()
    }
    
}

export function excluirSucess(event) {
    event.preventDefault()
    const urlPagRemove = "http://localhost:8080/pages/remocaoSucesso.html"
    var xhr = new XMLHttpRequest()
    xhr.open("GET", urlPagRemove)
    xhr.setRequestHeader('Content-Type', 'application/json')
    if(xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('link').innerHTML = this.responseText
        }
    })
    xhr.send()
}



