function cadastro(event) {
  event.preventDefault()
  url = "http://localhost:8080/pages/post.html"
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

function enviar(event) {
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
  url = "http://localhost:3000/usuarios"
  xhr.open("POST", url, true)
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(dados)
  sucesso(event)
}

function sucesso(event) {
  event.preventDefault()
  const xhr = new XMLHttpRequest()
  url = "http://localhost:8080/pages/sucesso.html"
  xhr.open("GET", url, true)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("link").innerHTML = this.responseText;
    }
  }
  xhr.send()
}

function remover(event) {
  event.preventDefault()
  url = "http://localhost:8080/pages/remove.html"
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("link").innerHTML = this.responseText;
      urlJson = "http://localhost:3000/usuarios"
      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          const dados = JSON.parse(this.responseText)
          dados.map(value => {

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

            const barra = document.createElement("hr")

            const div1 = document.createElement("div")
            div1.classList.add("col-3")
            div1.classList.add("align-self-center")
            div1.classList.add("fontList")
            div1.classList.add("mb-3")
            div1.innerHTML = `<strong>Nome: </strong>${value.nome}`
            divprincipal.appendChild(div1)
            divprincipal.appendChild(barra)

            const div2 = document.createElement("div")
            div2.classList.add("col-6")
            div2.classList.add("align-self-center")
            div2.classList.add("fontList")
            div2.classList.add("mb-3")
            div2.innerHTML = `<strong>Email: </strong>${value.email}`
            divprincipal.appendChild(div2)
            divprincipal.appendChild(barra)

            const div3 = document.createElement("div")
            const botton = document.createElement("button")
            botton.id = value.id
            botton.setAttribute("onclick", "excluir(event, this.id)")
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
            divprincipal.appendChild(div3)
            divprincipal.appendChild(barra)
            divcentral.appendChild(divprincipal)
            divAll.appendChild(divlateralEsquerda)
            divAll.appendChild(divcentral)
            divAll.appendChild(divlateralDireira)
            $(divAll).hide().fadeIn(500)
            const conteudo = document.getElementById("link")
            conteudo.appendChild(divAll)
            
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


function excluir(event, id) {
  event.preventDefault()
  url = "http://localhost:3000/usuarios"
  var xhr = new XMLHttpRequest()
  const urlRemove = url + '/' + id
  console.log(urlRemove)
  var confirma = window.confirm("Tem certeza que deseja continuar?");
  if (confirma) {
    xhr.open("DELETE", urlRemove)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = function() {
      if(this.readyState == 4  && this.status == 200) {
        remover(event)
      }
    }
    xhr.send()
  }
}

function putBase(event) {
  event.preventDefault
  url = "http://localhost:8080/pages/putInicio.html"
  xhr = new XMLHttpRequest()
  xhr.open("GET", url, true)
  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("link").innerHTML = this.responseText
      urlJson = "http://localhost:3000/usuarios"
      xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          const dados = JSON.parse(this.responseText)
          dados.map(value => {

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

            const barra = document.createElement("hr")

            const div1 = document.createElement("div")
            div1.classList.add("col-3")
            div1.classList.add("align-self-center")
            div1.classList.add("fontList")
            div1.classList.add("mb-3")
            div1.innerHTML = `<strong>Nome: </strong>${value.nome}`
            divprincipal.appendChild(div1)
            divprincipal.appendChild(barra)

            const div2 = document.createElement("div")
            div2.classList.add("col-6")
            div2.classList.add("align-self-center")
            div2.classList.add("fontList")
            div2.classList.add("mb-3")
            div2.innerHTML = `<strong>Email: </strong>${value.email}`
            divprincipal.appendChild(div2)
            divprincipal.appendChild(barra)

            const div3 = document.createElement("div")
            const botton = document.createElement("button")
            botton.id = value.id
            botton.setAttribute("onclick", "alterar(event, this.id)")
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
            divcentral.appendChild(divprincipal)
            divAll.appendChild(divlateralEsquerda)
            divAll.appendChild(divcentral)
            divAll.appendChild(divlateralDireira)
            $(divAll).hide().fadeIn(500)
            const conteudo = document.getElementById("link")
            conteudo.appendChild(divAll)
            
          })
        }
      }
      xhr.open("GET", urlJson, true);
      xhr.send();
    }
  }
  xhr.send()
}

function alterar(event, id) {
  event.preventDefault()
  url = "http://localhost:8080/pages/putAlterar.html"
  var xhr = new XMLHttpRequest()
  xhr.open("GET", url)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.onreadystatechange = function() {
    if(this.readyState == 4  && this.status == 200) {
      document.getElementById("link").innerHTML = this.responseText
      urlJson = `http://localhost:3000/usuarios/${id}`
      xhr.open("GET", urlJson, true)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
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

function mudar(event) {
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

function putSucess(event) {
  event.preventDefault()
  const xhr = new XMLHttpRequest()
  const url = "http://localhost:8080/pages/alteracaoSucesso.html"
  xhr.open("GET", url) 
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.onreadystatechange = function() {
    if ( this.readyState == 4 && this.status == 200 ) {
      document.getElementById('link').innerHTML = this.responseText
    }
  }
  xhr.send()
}

function getPagina(event) {
  event.preventDefault()
  xhr = new XMLHttpRequest()
  url = "http://localhost:8080/pages/get.html"
  xhr.open("GET", url, true) 
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("link").innerHTML = this.responseText
      urlJson = "http://localhost:3000/usuarios"
      xhr.open("GET", urlJson, true)
      xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
          const dados = JSON.parse(this.responseText)
          divRow = document.createElement('div')
          divRow.classList.add('row')
          dados.map(value => {
            const divList = document.createElement('div')
            divList.classList.add('col-lg-6')
            divList.classList.add('col-md-12')
            divList.classList.add('mb-3')
            const ul = document.createElement('ul')
            ul.classList.add("list-group")
            divRowNome = document.createElement('div')
            divRowNome.classList.add('row')
            divColNome = document.createElement('div')
            divColNome.classList.add('col-6')
            const pNome = document.createElement('p')
            pNome.classList.add('pValor')
            pNome.innerHTML = `Nome: ${value.nome}`
            divColNome.appendChild(pNome)
            divColID = document.createElement('div')
            divColID.classList.add('col-6')
            const pID = document.createElement('p')
            pID.classList.add('pValor')
            pID.innerHTML = `ID: ${value.id}`
            divColID.appendChild(pID)
            divRowNome.appendChild(divColNome)
            divRowNome.appendChild(divColID)
            const liAtivo = document.createElement('li')
            liAtivo.classList.add('list-group-item')
            liAtivo.classList.add('active')
            liAtivo.setAttribute("aria-current","true")
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

            ul.appendChild(liAtivo)
            ul.appendChild(lisobrenome)
            ul.appendChild(liemail)
            ul.appendChild(licidade)
            divList.appendChild(ul)
            divRow.appendChild(divList)
            $(divList).hide().fadeIn(500)
          })
          document.getElementById('link').appendChild(divRow)
        }
      }
      xhr.send()
    }
  }
  xhr.send()
}

const eventClick = new Event('click')
const botaoGet = document.getElementById('disparar')
botaoGet.dispatchEvent(eventClick)