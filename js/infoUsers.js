export function getPagina(event) {
    event.preventDefault()
    const xhr = new XMLHttpRequest()
    const url = "http://localhost:8080/pages/get.html"
    xhr.open("GET", url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("link").innerHTML = this.responseText
            const urlJson = "http://localhost:3000/usuarios"
            xhr.open("GET", urlJson, true)
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const dados = JSON.parse(this.responseText)
                    const divRow = document.createElement('div')
                    divRow.classList.add('row')
                    dados.map(value => {
                        
                        // Inicio DIV row do cabeçalho
                        const divRowNome = document.createElement('div')
                        divRowNome.classList.add('row')
                        // Fim DIV row do cabeçalho

                        // Inicio DIV col NOME do cabeçalho
                        const divColNome = document.createElement('div')
                        divColNome.classList.add('col-6')
                        const pNome = document.createElement('p')
                        pNome.classList.add('pValor')
                        pNome.innerHTML = `Nome: ${value.nome}`
                        divColNome.appendChild(pNome)
                        // Fim DIV col NOME do cabeçalho

                        // Inicio DIV col ID do cabeçalho
                        const divColID = document.createElement('div')
                        divColID.classList.add('col-6')
                        const pID = document.createElement('p')
                        pID.classList.add('pValor')
                        pID.innerHTML = `ID: ${value.id}`
                        divColID.appendChild(pID)
                        // Fim DIV col NOME do cabeçalho

                        // Inicio Inserindo os dados na DIV cabeçalho
                        divRowNome.appendChild(divColNome)
                        divRowNome.appendChild(divColID)
                        // Fim Inserindo os dados na DIV cabeçalho

                        // Inicio DIV Col dos dados
                        const divList = document.createElement('div')
                        divList.classList.add('col-lg-6')
                        divList.classList.add('col-md-12')
                        divList.classList.add('mb-3')
                        // Fim DIV Col dos dados

                        // Inicio UL da lista de dados
                        const ul = document.createElement('ul')
                        ul.classList.add("list-group")
                        // Fim UL da lista de dados

                        // Inicio estrutura LI da lista de dados
                        const liAtivo = document.createElement('li')
                        liAtivo.classList.add('list-group-item')
                        liAtivo.classList.add('active')
                        liAtivo.setAttribute("aria-current", "true")
                        liAtivo.appendChild(divRowNome)
                        const lisobrenome = document.createElement('li')
                        lisobrenome.classList.add('list-group-item')
                        lisobrenome.innerHTML = `<strong>Sobrenome</strong>: ${value.sobrenome}`
                        const liemail = document.createElement('li')
                        liemail.classList.add('list-group-item')
                        liemail.innerHTML = `<strong>E-mail</strong>: ${value.email}`
                        const licidade = document.createElement('li')
                        licidade.classList.add('list-group-item')
                        licidade.innerHTML = `<strong>Cidade</strong>: ${value.cidade}`
                        // Fim estrutura LI da lista de dados

                        // Inicio inserindo conteúdo na DIV principal
                        ul.appendChild(liAtivo)
                        ul.appendChild(lisobrenome)
                        ul.appendChild(liemail)
                        ul.appendChild(licidade)
                        divList.appendChild(ul)
                        divRow.appendChild(divList)
                        $(divList).hide().fadeIn(500)
                        // Fim inserindo conteúdo na DIV principal
                    })
                    // Inserindo conteúdo na tag Section
                    document.getElementById('link').appendChild(divRow)
                    // Fim inserindo conteúdo na tag Section
                }
            }
            xhr.send()
        }
    }
    xhr.send()
}